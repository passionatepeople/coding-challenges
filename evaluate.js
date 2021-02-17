const fs = require('fs');
const chalk = require('chalk');
const { performance } = require('perf_hooks');
const { shuffle, flatten, sum, sortBy } = require('lodash');

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

console.table(RESULTS);

// RESULTS.forEach(({ solution, average, runTimes, failed, total }, idx) => {
//   console.log(`${((idx + 1) + '.').padEnd(3, ' ')} ${solution.padEnd(30, ' ')} AVG=${average}ms  TOTAL=${total}`);
// });

// console.log(RESULTS);

if (FAILED.length) {
  console.log(`\n\nDISQUALIFIED FAILED SOLUTIONS: ${FAILED.join(', ')}\n\n`);
}

