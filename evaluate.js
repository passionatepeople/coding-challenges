const fs = require('fs');
const os = require('os');
const vm = require('vm');
const chalk = require('chalk');
const { performance } = require('perf_hooks');
const { shuffle, flatten, sum, omit } = require('lodash');
const isEqual = require('fast-deep-equal');
const clone = require('rfdc')();
const { table } = require('table');
const humanizeDuration = require('humanize-duration');
const { stdout, stdev, wrapAndPad, computeResults, warmUpContext } = require('./utils');

// update for challenge you wish to evaluate, what is the tie margin and amount of default runs
const CHALLENGE = '2021/w18';
const PERCENT_MARGIN_FOR_TIE = 5;
const TIMES_TO_EVAL_EACH = parseInt(process.argv[2], 10) || 1000;
const LOG_PAD = 35;
const MAX_SIZE = 2048;

// don't change these
const SOLUTIONS_DIR = `./${CHALLENGE}/solutions`;
const SOLUTIONS = fs.readdirSync(SOLUTIONS_DIR).filter(file => file.endsWith('.js'));
const SPEC = require(`./${CHALLENGE}/test-cases/spec.json`)
const STATS = SOLUTIONS.reduce((acc, sol) => ({
  ...acc,
  [sol]: {
    solution: sol,
    runTimes: [],
    failed: false,
    onlyCodegolf: false,
    total: null,
    average: null,
    best: null,
    worst: null,
    stdev: null,
    size: fs.statSync(`${SOLUTIONS_DIR}/${sol}`).size,
    compiled: 'successfully',
    compileTime: null,
  }
}), {});

warmUpContext();

const SOLUTION_FNS = SOLUTIONS.reduce((acc, sol) => {
  const code = fs.readFileSync(`${SOLUTIONS_DIR}/${sol}`, { encoding:'utf8', flag: 'r' });
  let fn = () => {};
  const context = { module: { exports: {}}};
  vm.createContext(context);

  try {
    const start = performance.now();
    vm.runInContext(code, context);
    const end = performance.now();
    STATS[sol].compileTime = end - start;

    if (typeof context?.module?.exports === 'function') {
      fn = context.module.exports;
    } else {
      throw Error('module.exports is not a function');
    }

    if (Object.keys(context).length !== 1) {
      STATS[sol].onlyCodegolf = true;
    }
  } catch (e) {
    STATS[sol].compiled = e.toString();
  }

  return {
    ...acc,
    [sol]: fn,
  };
}, {});

// check if any fail
const FAILED = Object.values(STATS)
  .filter(({ solution, size }) => {
    const fn = SOLUTION_FNS[solution];
    return STATS[solution].failed = size > MAX_SIZE || shuffle(SPEC).some(({ inputs, result }) => {
      const clonedInputs = clone(inputs)
      return !isEqual(fn(...clonedInputs), result) || !isEqual(clonedInputs, inputs)
    });
  })
  .map(res => res.solution);

const ONLY_CODEGOLF = Object.values(STATS).filter(({ onlyCodegolf, failed }) => !failed && onlyCodegolf).map(res => res.solution);
const NON_EVALUATABLE = [...FAILED, ...ONLY_CODEGOLF];
const EVALUATABLE_SOLUTIONS = SOLUTIONS.filter(sol => !NON_EVALUATABLE.includes(sol));
const TEST_RUNS = shuffle(flatten(Array.from({ length: TIMES_TO_EVAL_EACH }, () => EVALUATABLE_SOLUTIONS)));
const VALID_FNS = EVALUATABLE_SOLUTIONS.reduce((acc, sol) => ({ ...acc, [sol]: require(`${SOLUTIONS_DIR}/${sol}`) }), {});

console.log(`\n${chalk.yellow('EVALUATION STARTED:').padEnd(LOG_PAD, ' ')} ${chalk.green(new Date())}`);
console.log(`${chalk.yellow('EVALUATING CHALLENGE:').padEnd(LOG_PAD, ' ')} ${chalk.green(CHALLENGE)}`);
console.log(`${chalk.yellow(`FOUND ${SOLUTIONS.length} SOLUTIONS:`).padEnd(LOG_PAD, ' ')} ${chalk.green(wrapAndPad(SOLUTIONS, LOG_PAD))}`);
console.log(`${chalk.yellow('EVALUATING EACH').padEnd(LOG_PAD, ' ')} ${chalk.cyan(TIMES_TO_EVAL_EACH)} ${chalk.yellow('TIMES WITH')} ${chalk.cyan(SPEC.length)} ${chalk.yellow('TEST CASES...')}\n`);

const totalStart = performance.now();
TEST_RUNS.forEach((solution, idx) => {
  const fn = VALID_FNS[solution];

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
const { PRETTY, RAW_RESULTS, DISCARDED } = computeResults(STATS, PERCENT_MARGIN_FOR_TIE);
const MIN_SIZE = Math.min(...RAW_RESULTS.filter(r => !r.failed).map(r => r.size));
const CODEGOLF = Object.values(STATS).filter(res => !res.failed && res.size === MIN_SIZE).map(res => res.solution);

console.log(`\n${chalk.yellow('RANKINGS:')}`);
console.log(table(PRETTY));
console.log('Keeping only best run from each contestant');
console.log(`Using ${PERCENT_MARGIN_FOR_TIE}% margin for determening ties`);
if (DISCARDED.length) {
  console.log(`\n${chalk.yellow('OMITTED FROM RANKINGS:').padEnd(LOG_PAD, ' ')} ${chalk.green(wrapAndPad(DISCARDED, LOG_PAD))}`);
}
if (ONLY_CODEGOLF.length) {
  console.log(`\n${chalk.yellow('ONLY CODEGOLF SOLUTIONS:').padEnd(LOG_PAD, ' ')} ${chalk.green(wrapAndPad(ONLY_CODEGOLF, LOG_PAD))}`);
}
console.log(`\n${chalk.yellow('CODEGOLF AWARD:').padEnd(LOG_PAD, ' ')} ${chalk.green(CODEGOLF.join(', '))} with ${MIN_SIZE} bytes`);
if (FAILED.length) {
  console.log(`\n${chalk.yellow('FAILED SOLUTIONS:').padEnd(LOG_PAD, ' ')} ${chalk.green(wrapAndPad(FAILED, LOG_PAD))}`);
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
