const { Command } = require('commander');
const program = new Command();
const fs = require('fs');
const os = require('os');
const vm = require('vm');
const chalk = require('chalk');
const { performance } = require('perf_hooks');
const { shuffle, flatten, omit, pick, min } = require('lodash');
const isEqual = require('fast-deep-equal');
const clone = require('rfdc')();
const { table } = require('table');
const humanizeDuration = require('humanize-duration');
const { stdout, wrapAndPad, computeResults, warmUpContext, normDate, clearDir, getLocalIp } = require('./utils');

program.version('1.0.0');

program
  .requiredOption('-c, --challenge <challenge>', 'Challenge to evaluate')
  .option('-d, --duration <duration>', 'Evaluation duration in seconds', 300)
  .option('-mt, --margin-for-ties <marginForTies>', '% margin for ties', 5)
  .option('-vt, --validation-threshold <validationThreshold>', 'seconds to flag codegolf solution', 10)
  .option('-ms, --max-size <maxSize>', 'Max allowed size', 2048)
  .option('-lp, --log-pad <logPad>', 'Log pad', 35)
  .option('--no-stdout', 'Don\t print progress via stdout', false);

program.parse(process.argv);
const OPTIONS = program.opts();

const DURATION = parseInt(OPTIONS.duration, 10);
const CHALLENGE = OPTIONS.challenge;
const PERCENT_MARGIN_FOR_TIE = parseInt(OPTIONS.marginForTies, 10);
const LOG_PAD = parseInt(OPTIONS.logPad, 10);
const MAX_SIZE = parseInt(OPTIONS.maxSize, 10);
const VALIDATION_THRESHOLD = parseInt(OPTIONS.validationThreshold, 10) * 1000;

// don't change these
const SOLUTIONS_DIR = `./${CHALLENGE}/solutions`;

const main = async () => {

  const SOLUTIONS = fs.readdirSync(SOLUTIONS_DIR).filter(file => file.endsWith('.js'));
  const SPEC = require(`./${CHALLENGE}/test-cases/spec.json`)
  const STATS = SOLUTIONS.reduce((acc, sol) => ({
    ...acc,
    [sol]: {
      solution: sol,
      runTimes: [],
      compileTimes: [],
      total: null,
      bestRun: null,
      bestCompile: null,
      code: fs.readFileSync(`${SOLUTIONS_DIR}/${sol}`, { encoding:'utf8', flag: 'r' }),
      size: fs.statSync(`${SOLUTIONS_DIR}/${sol}`).size,
      compiled: 'successfully',
      validationTime: null,
      onlyCodegolf: false,
      failed: false,
      failReason: null,
    }
  }), {});

  warmUpContext();

  const SOLUTION_FNS = SOLUTIONS.reduce((acc, sol) => {
    const code = `(()=>{
      ${STATS[sol].code}
    })()`;
    let fn = () => {};
    const context = { module: { exports: {}}};
    vm.createContext(context);

    try {
      vm.runInContext(code, context);

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

  // check if any fail or last too long
  const FAILED = Object.values(STATS)
    .filter(({ solution, size }) => {
      const fn = SOLUTION_FNS[solution];
      let incorrect = false;
      let mutated = false;

      const start = performance.now();
      const result = STATS[solution].failed = size > MAX_SIZE || shuffle(SPEC).some(({ inputs, result }) => {
        const clonedInputs = clone(inputs)
        const res = fn(...clonedInputs);
        const resultIncorrect = JSON.stringify(res) !== JSON.stringify(result);
        const inputsMutated = !isEqual(clonedInputs, inputs);

        if (resultIncorrect) incorrect = true;
        if (inputsMutated) mutated = true;

        return resultIncorrect || inputsMutated;
      });
      const end = performance.now();
      STATS[solution].validationTime = end - start;

      if (incorrect && mutated) STATS[solution].failReason = 'Incorrect result & mutating inputs';
      else if (incorrect) STATS[solution].failReason = 'Incorrect result';
      else if (mutated) STATS[solution].failReason = 'mutating inputs';

      if (!result && STATS[solution].validationTime > VALIDATION_THRESHOLD) {
        STATS[solution].onlyCodegolf = true;
      }

      return result;
    })
    .map(res => res.solution);

  const ONLY_CODEGOLF = Object.values(STATS).filter(({ onlyCodegolf, failed }) => !failed && onlyCodegolf).map(res => res.solution);
  const NON_EVALUATABLE = [...FAILED, ...ONLY_CODEGOLF];
  const EVALUATABLE_SOLUTIONS = SOLUTIONS.filter(sol => !NON_EVALUATABLE.includes(sol));
  const VALID_FNS = EVALUATABLE_SOLUTIONS.reduce((acc, sol) => ({ ...acc, [sol]: require(`${SOLUTIONS_DIR}/${sol}`) }), {});

  console.log(`\n${chalk.yellow('EVALUATION STARTED:').padEnd(LOG_PAD, ' ')} ${chalk.green(normDate(new Date()))}`);
  console.log(`${chalk.yellow('EVALUATING CHALLENGE:').padEnd(LOG_PAD, ' ')} ${chalk.green(CHALLENGE)}`);
  console.log(`${chalk.yellow(`FOUND ${SOLUTIONS.length} SOLUTIONS:`).padEnd(LOG_PAD, ' ')} ${chalk.green(wrapAndPad(SOLUTIONS, LOG_PAD))}`);
  console.log(`${chalk.yellow('RUNNING EVALUATION FOR:').padEnd(LOG_PAD, ' ')} ${chalk.cyan(DURATION)} ${chalk.yellow('SECONDS WITH')} ${chalk.cyan(SPEC.length)} ${chalk.yellow('TEST CASES IN EACH CYCLE...')}\n`);

  const totalStart = performance.now();

  const TIMES_TO_EVAL_EACH = 50;
  let TOTAL_EVALS = 0;
  let TEST_RUNS;
  let NOW = new Date().getTime() / 1000;
  const END_EVAL = NOW + DURATION;
  while (EVALUATABLE_SOLUTIONS.length > 0 && NOW < END_EVAL && TOTAL_EVALS < 1000000) {
    TEST_RUNS = shuffle(flatten(Array.from({ length: TIMES_TO_EVAL_EACH }, () => EVALUATABLE_SOLUTIONS)));
    TOTAL_EVALS += TIMES_TO_EVAL_EACH;

    TEST_RUNS.forEach((solution) => {
      const fn = VALID_FNS[solution];

      const start = performance.now();
      SPEC.forEach(({ inputs }) => fn(...inputs));
      const end = performance.now();
      STATS[solution].runTimes.push(end - start);

      const context = { module: { exports: {}}};
      vm.createContext(context);
      const code = STATS[solution].code;
      const startCompile = performance.now();
      vm.runInContext(code, context);
      const endCompile = performance.now();
      STATS[solution].compileTimes.push(endCompile - startCompile);

      if (OPTIONS.stdout) {
        stdout(`Running perf checks. ${humanizeDuration(Math.floor((END_EVAL - NOW) * 1000), { maxDecimalPoints: 0 })} remaining...`);
      }
    });

    NOW = new Date().getTime() / 1000;
  }

  if (OPTIONS.stdout) {
    stdout(`Running perf checks 100%... done!`);
  }

  const totalEnd = performance.now();

  console.log(`\n\n${chalk.yellow('EVALUATION ENDED:').padEnd(LOG_PAD, ' ')} ${chalk.green(normDate(new Date()))}`);
  console.log(`${chalk.yellow('DURATION:').padEnd(LOG_PAD, ' ')} ${chalk.green(humanizeDuration(Math.floor(totalEnd - totalStart)))}`);

  // assess stats
  SOLUTIONS.forEach(solution => {
    const evaluated = STATS[solution].runTimes;
    const compiled = STATS[solution].compileTimes;

    STATS[solution].bestRun = evaluated.length ? min(evaluated) : null;
    STATS[solution].bestCompile = compiled.length ? min(compiled) : null;
    STATS[solution].total = evaluated.length && compiled.length ? STATS[solution].bestRun + STATS[solution].bestCompile : null;  
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
  console.table(RAW_RESULTS.map(res => ({ ...omit(res, 'runTimes', 'code', 'compileTimes'), runs: res.runTimes.length })));
};

main();
