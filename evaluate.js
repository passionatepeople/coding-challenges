const fs = require('fs');
const os = require('os');
const chalk = require('chalk');
const { performance } = require('perf_hooks');
const { shuffle, flatten, sum, sortBy, omit } = require('lodash');
const { table } = require('table');
const humanizeDuration = require('humanize-duration');

// update for challenge you wish to evaluate and how many times
const CHALLENGE = '2021/w09';
const PERCENT_MARGIN_FOR_TIE = 5;
const TIMES_TO_EVAL_EACH = parseInt(process.argv[2], 10) || 1000;

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

// assemble stats and results
const RAW_RESULTS = sortBy(Object.values(STATS).filter(res => !res.failed), 'best');
const FAILED = Object.values(STATS).filter(res => res.failed).map(res => res.solution);
const MIN_SIZE = Math.min(...RAW_RESULTS.map(r => r.size));
const CODEGOLF = Object.values(STATS).filter(res => res.size === MIN_SIZE).map(res => res.solution);
// keep only the best result from each contestant
const KEPT = [];
const DISCARDED = [];
const RESULTS = RAW_RESULTS.filter(res => {
  const name = res.solution.match(/([a-z]+)\d*\.js/i)[1];
  if (KEPT.includes(name)) {
    DISCARDED.push(res.solution);
    return false;
  } else {
    KEPT.push(name);
    return true;
  }
});

const points = {
  1: 25,
  2: 18,
  3: 15,
  4: 12,
  5: 10,
  6: 8,
  7: 6,
  8: 4,
  9: 2,
  10: 1,
};

const PRETTY = [['Place', 'Points', 'Name', 'Best', 'Average', 'Size (bytes)']];
let place = 1;
let currentBest = 0;
let showPlace = true;
for (let i = 0; i < RESULTS.length; i++) {

  const name = RESULTS[i].solution.replace(/.js$/gi, '');

  // check if solution best time is within 5% of previous
  if (i > 0) {
    if (currentBest * (1 + PERCENT_MARGIN_FOR_TIE / 100) > RESULTS[i].best) {
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
    showPlace ? chalk.cyan(place) : '',
    chalk.green(points[place]) || '',
    chalk.yellow(name),
    RESULTS[i].best.toFixed(3) + 'ms',
    RESULTS[i].average.toFixed(3) + 'ms',
    RESULTS[i].size,
  ];

  PRETTY.push(res);
}

console.log(`\n${chalk.yellow('RANKINGS:')}`);
console.log(table(PRETTY))
console.log('Keeping only best run from each contestant');
console.log(`Using ${PERCENT_MARGIN_FOR_TIE}% margin for determening ties`);
console.log(`\n${chalk.yellow('OMITTED FROM RANKINGS:').padEnd(35, ' ')} ${chalk.green(DISCARDED.join(', '))}`);
console.log(`\n${chalk.yellow('CODEGOLF AWARD:').padEnd(35, ' ')} ${chalk.green(CODEGOLF.join(', '))} with ${MIN_SIZE} bytes`);

if (FAILED.length) {
  console.log(`\n${chalk.yellow('DISQUALIFIED FAILED SOLUTIONS:').padEnd(35, ' ')} ${chalk.green(FAILED.join(', '))}`);
}

console.log(`\n${chalk.yellow('SYSTEM INFO:')}`);
console.log(`NODE: ${process.version}`);
console.log(`ARCH: ${os.arch()}`);
console.log(`PLATFORM: ${os.platform()}`);
console.log(`VERSION: ${os.version()}`);
console.log(`CPUS: ${os.cpus().length}\n${os.cpus().map(cpu => ' - ' + cpu.model).join('\n')}`);

console.log(`\n${chalk.yellow('RAW RESULTS:')}`);
console.table(RAW_RESULTS.map(res => omit(res, 'runTimes', 'failed')));
