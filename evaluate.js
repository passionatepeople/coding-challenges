const fs = require('fs');
const chalk = require('chalk');
const { performance } = require('perf_hooks');
const { shuffle, flatten, sum, sortBy } = require('lodash');
const { table } = require('table');

// update for challenge you wish to evaluate and how many times
const CHALLENGE = '2021/w09';
const TIMES_TO_EVAL_EACH = 1000;

// don't change these
const SOLUTIONS_DIR = `./${CHALLENGE}/solutions`;
const SOLUTIONS = fs.readdirSync(SOLUTIONS_DIR).filter(file => file.endsWith('.js'));
const SOLUTION_FNS = SOLUTIONS.reduce((acc, sol) => ({ ...acc, [sol]: require(`${SOLUTIONS_DIR}/${sol}`) }), {});
const SPEC = require(`./${CHALLENGE}/test-cases/spec.json`)
const TEST_RUNS = shuffle(flatten(Array.from({ length: TIMES_TO_EVAL_EACH }, () => SOLUTIONS)));
const STATS = SOLUTIONS.reduce((acc, sol) => ({
  ...acc,
  [sol]: {
    solution: sol,
    runTimes: [],
    failed: false,
    total: null,
    average: null,
    best: null,
    worst: null,
    size: fs.statSync(`${SOLUTIONS_DIR}/${sol}`).size,
  }
}), {});


console.log(`\n\n${chalk.yellow('EVALUATING CHALLENGE:')} ${chalk.green(CHALLENGE)}`);
console.log(`${chalk.yellow(`FOUND ${SOLUTIONS.length} SOLUTIONS:`)}  ${chalk.green(SOLUTIONS.join(', '))}`);
console.log(`${chalk.yellow('EVALUATING EACH')} ${chalk.cyan(TIMES_TO_EVAL_EACH)} ${chalk.yellow('TIMES WITH')} ${chalk.cyan(SPEC.length)} ${chalk.yellow('TEST CASES...')}\n\n`);

TEST_RUNS.forEach(solution => {
  const fn = SOLUTION_FNS[solution];

  const start = performance.now();
  SPEC.forEach(({ inputs, result }) => {
    if (fn(...inputs) !== result) {
      STATS[solution].failed = true;
    }
  });
  const end = performance.now();

  STATS[solution].runTimes.push(end - start);
});

// assess stats
SOLUTIONS.forEach(solution => {
  const evaluated = STATS[solution].runTimes;

  STATS[solution].best = Math.min(...evaluated);
  STATS[solution].worst = Math.max(...evaluated);
  STATS[solution].total = sum(evaluated);
  STATS[solution].average = STATS[solution].total / evaluated.length;
});

const RESULTS = sortBy(Object.values(STATS).filter(res => !res.failed), 'best');
const FAILED = Object.values(STATS).filter(res => res.failed).map(res => res.solution);

const MIN_SIZE = Math.min(...RESULTS.map(r => r.size));

const PRETTY = [['Place', 'Name', 'Best', 'Average', 'Size (bytes)', 'Codegolf']];
let place = 1;
let currentBest = 0;
let showPlace = true;
for (let i = 0; i < RESULTS.length; i++) {

  const name = RESULTS[i].solution.replace(/.js$/gi, '');

  // check if solution best time is within 5% of previous
  if (i > 0) {
    if (currentBest * 1.05 > RESULTS[i].best) {
      showPlace = false;
    } else {
      currentBest = RESULTS[i].best;
      place++;
      showPlace = true;
    }
  } else {
    currentBest = RESULTS[i].best;
  }

  const res = [
    showPlace ? place : '',
    name,
    RESULTS[i].best.toFixed(3) + 'ms',
    RESULTS[i].average.toFixed(3) + 'ms',
    RESULTS[i].size,
    RESULTS[i].size === MIN_SIZE ? '+5pts' : '',
  ];

  PRETTY.push(res);
}

console.log(table(PRETTY))

if (FAILED.length) {
  console.log(`\n\nDISQUALIFIED FAILED SOLUTIONS: ${FAILED.join(', ')}\n\n`);
}

console.log('\n\nRAW RESULTS:');
console.table(RESULTS);
