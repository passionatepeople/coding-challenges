const fs = require('fs');
const os = require('os');
const chalk = require('chalk');
const { performance } = require('perf_hooks');
const { shuffle, flatten, sum, sortBy } = require('lodash');
const { table } = require('table');
const humanizeDuration = require('humanize-duration');

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

console.log(`\n${chalk.yellow('EVALUATION STARTED:').padEnd(35, ' ')} ${chalk.green(new Date())}`);
console.log(`${chalk.yellow('EVALUATING CHALLENGE:').padEnd(35, ' ')} ${chalk.green(CHALLENGE)}`);
console.log(`${chalk.yellow(`FOUND ${SOLUTIONS.length} SOLUTIONS:`).padEnd(35, ' ')} ${chalk.green(SOLUTIONS.join(', '))}`);
console.log(`${chalk.yellow('EVALUATING EACH').padEnd(35, ' ')} ${chalk.cyan(TIMES_TO_EVAL_EACH)} ${chalk.yellow('TIMES WITH')} ${chalk.cyan(SPEC.length)} ${chalk.yellow('TEST CASES...')}\n`);

const stdout = (progress) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(progress);
}

const totalStart = performance.now();

TEST_RUNS.forEach((solution, idx) => {
  const fn = SOLUTION_FNS[solution];

  const start = performance.now();
  SPEC.forEach(({ inputs, result }) => {
    if (fn(...inputs) !== result) {
      STATS[solution].failed = true;
    }
  });
  const end = performance.now();

  STATS[solution].runTimes.push(end - start);
  stdout(`Running perf checks ${(100 * idx / TEST_RUNS.length).toFixed(1)}%...`);
});
stdout('');

const totalEnd = performance.now();
console.log(`\n${chalk.yellow('EVALUATION ENDED:').padEnd(35, ' ')} ${chalk.green(new Date())}`);
console.log(`${chalk.yellow('DURATION:').padEnd(35, ' ')} ${chalk.green(humanizeDuration(Math.floor(totalEnd - totalStart)))}\n\n`);

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

console.log(`\n${chalk.yellow('SYSTEM INFO:')}`);
console.log(`NODE: ${process.version}`);
console.log(`ARCH: ${os.arch()}`);
console.log(`PLATFORM: ${os.platform()}`);
console.log(`VERSION: ${os.version()}`);
console.log(`CPUS: ${os.cpus().length}\n${os.cpus().map(cpu => ' - ' + cpu.model).join('\n')}`);

console.log(`\n${chalk.yellow('RAW RESULTS:')}`);
console.table(RESULTS);
