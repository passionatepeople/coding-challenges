const fs = require('fs');
const os = require('os');
const chalk = require('chalk');
const { performance } = require('perf_hooks');
const { shuffle, flatten, sum, sortBy, omit, map } = require('lodash');
const { table } = require('table');
const humanizeDuration = require('humanize-duration');

// update for challenge you wish to evaluate, what is the tie margin and amount of default runs
const CHALLENGE = '2021/w09';
const PERCENT_MARGIN_FOR_TIE = 5;
const TIMES_TO_EVAL_EACH = parseInt(process.argv[2], 10) || 1000;
const LOG_PAD = 35;

// don't change these
const SOLUTIONS_DIR = `./${CHALLENGE}/solutions`;
const SOLUTIONS = fs.readdirSync(SOLUTIONS_DIR).filter(file => file.endsWith('.js'));
const SOLUTION_FNS = SOLUTIONS.reduce((acc, sol) => ({ ...acc, [sol]: require(`${SOLUTIONS_DIR}/${sol}`) }), {});
const SPEC = require(`./${CHALLENGE}/test-cases/spec.json`)
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
    stdev: null,
    size: fs.statSync(`${SOLUTIONS_DIR}/${sol}`).size,
  }
}), {});

const stdout = (progress) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(progress);
}

const stdev = (array) => {
  const avg = sum(array) / array.length;
  return Math.sqrt(sum(map(array, (i) => Math.pow((i - avg), 2))) / array.length);
};

const wrapAndPad = (names) => {
  const maxPerLine = 120;
  let inLine = 0;

  return names.reduce((acc, name, id) => {
    const joiner = id > 0 ? ', ' : '';
    const toAdd = `${joiner}${name}`;

    if (inLine + toAdd.length > maxPerLine) {
      inLine = name.length;
      return `${acc},\n${' '.repeat(LOG_PAD - 9)}${name}`;

    } else {
      inLine += toAdd.length;
      return `${acc}${toAdd}`;
    }
  }, '');
};

// check if any fail
const FAILED = Object.values(STATS)
  .filter(({ solution }) => {
    const fn = SOLUTION_FNS[solution];
    SPEC.forEach(({ inputs, result }) => {
      if (fn(...inputs) !== result) {
        STATS[solution].failed = true;
      }
    });

    return STATS[solution].failed;
  })
  .map(res => res.solution);

const VALID_SOLUTIONS = SOLUTIONS.filter(sol => !FAILED.includes(sol));
const TEST_RUNS = shuffle(flatten(Array.from({ length: TIMES_TO_EVAL_EACH }, () => VALID_SOLUTIONS)));

console.log(`\n${chalk.yellow('EVALUATION STARTED:').padEnd(LOG_PAD, ' ')} ${chalk.green(new Date())}`);
console.log(`${chalk.yellow('EVALUATING CHALLENGE:').padEnd(LOG_PAD, ' ')} ${chalk.green(CHALLENGE)}`);
console.log(`${chalk.yellow(`FOUND ${SOLUTIONS.length} SOLUTIONS:`).padEnd(LOG_PAD, ' ')} ${chalk.green(wrapAndPad(SOLUTIONS))}`);
console.log(`${chalk.yellow('EVALUATING EACH').padEnd(LOG_PAD, ' ')} ${chalk.cyan(TIMES_TO_EVAL_EACH)} ${chalk.yellow('TIMES WITH')} ${chalk.cyan(SPEC.length)} ${chalk.yellow('TEST CASES...')}\n`);

const totalStart = performance.now();
TEST_RUNS.forEach((solution, idx) => {
  const fn = SOLUTION_FNS[solution];

  const start = performance.now();
  SPEC.forEach(({ inputs }) => fn(...inputs));
  const end = performance.now();

  STATS[solution].runTimes.push(end - start);
  stdout(`Running perf checks ${(100 * idx / TEST_RUNS.length).toFixed(1)}%...`);
});
stdout(`Running perf checks 100%... done!`);

const totalEnd = performance.now();

console.log(`\n\n${chalk.yellow('EVALUATION ENDED:').padEnd(LOG_PAD, ' ')} ${chalk.green(new Date())}`);
console.log(`${chalk.yellow('DURATION:').padEnd(LOG_PAD, ' ')} ${chalk.green(humanizeDuration(Math.floor(totalEnd - totalStart)))}`);

// assess stats
SOLUTIONS.forEach(solution => {
  const evaluated = STATS[solution].runTimes;

  STATS[solution].best = evaluated.length ? Math.min(...evaluated) : null;
  STATS[solution].worst = evaluated.length ? Math.max(...evaluated) : null;
  STATS[solution].total = sum(evaluated);
  STATS[solution].average = evaluated.length ? (STATS[solution].total / evaluated.length) : null;
  STATS[solution].stdev = evaluated.length ? stdev(evaluated) : null;
});

// assemble stats and results
const RAW_RESULTS = sortBy(Object.values(STATS), 'best');
const MIN_SIZE = Math.min(...RAW_RESULTS.filter(r => !r.failed).map(r => r.size));
const CODEGOLF = Object.values(STATS).filter(res => res.size === MIN_SIZE).map(res => res.solution);
// keep only the best result from each contestant
const KEPT = [];
const DISCARDED = [];
const RESULTS = RAW_RESULTS.filter(res => {
  if (res.failed) return false;

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

const PRETTY = [['Place', 'Points', 'Name', 'Best', 'Average', 'St dev', 'Size (bytes)'].map(title => chalk.whiteBright(title))];
let place = 1;
let placeIncr = 1;
let currentBest = 0;
let showPlace = true;
for (let i = 0; i < RESULTS.length; i++) {

  const name = RESULTS[i].solution.replace(/.js$/gi, '');

  // check if solution best time is within 5% of previous
  if (i > 0) {
    if (currentBest * (1 + PERCENT_MARGIN_FOR_TIE / 100) > RESULTS[i].best) {
      showPlace = false;
      placeIncr++;
    } else {
      currentBest = RESULTS[i].best;
      place += placeIncr;
      showPlace = true;
      placeIncr = 1;
    }
  } else {
    currentBest = RESULTS[i].best;
  }

  const res = [
    showPlace ? chalk.cyan(place) : '',
    chalk.green(points[place] || ''),
    chalk.yellow(name),
    RESULTS[i].best.toFixed(3) + 'ms',
    RESULTS[i].average.toFixed(3) + 'ms',
    RESULTS[i].stdev.toFixed(3) + 'ms',
    RESULTS[i].size,
  ];

  PRETTY.push(res);
}

console.log(`\n${chalk.yellow('RANKINGS:')}`);
console.log(table(PRETTY))
console.log('Keeping only best run from each contestant');
console.log(`Using ${PERCENT_MARGIN_FOR_TIE}% margin for determening ties`);
console.log(`\n${chalk.yellow('OMITTED FROM RANKINGS:').padEnd(LOG_PAD, ' ')} ${chalk.green(wrapAndPad(DISCARDED))}`);
console.log(`\n${chalk.yellow('CODEGOLF AWARD:').padEnd(LOG_PAD, ' ')} ${chalk.green(CODEGOLF.join(', '))} with ${MIN_SIZE} bytes`);

if (FAILED.length) {
  console.log(`\n${chalk.yellow('FAILED SOLUTIONS:').padEnd(LOG_PAD, ' ')} ${chalk.green(wrapAndPad(FAILED))}`);
}

console.log(`\n${chalk.yellow('SYSTEM INFO:')}`);
console.log(`NODE: ${process.version}`);
console.log(`ARCH: ${os.arch()}`);
console.log(`PLATFORM: ${os.platform()}`);
console.log(`VERSION: ${os.version()}`);
console.log(`MEMORY: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)}GB`);
console.log(`CPUS: ${os.cpus().length} x ${os.cpus().map(cpu => cpu.model)[0]}`);
console.log(`CPU speed: ${os.cpus().map(cpu => cpu.speed)[0]}MHz`);

console.log(`\n${chalk.yellow('RAW RESULTS:')}`);
console.table(RAW_RESULTS.map(res => ({ ...omit(res, 'runTimes'), runs: res.runTimes.length })));
