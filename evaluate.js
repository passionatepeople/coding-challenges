const fs = require('fs');
const { performance } = require('perf_hooks');
const { shuffle , flatten, sum, sortBy } = require('lodash');

// update for challenge you wish to evaluate and how many times
const CHALLENGE = '2021/w09';
const TIMES_TO_EVAL_EACH = 1000;

// don't change these
const SOLUTIONS_DIR = `./${CHALLENGE}/solutions`;
const SOLUTIONS = fs.readdirSync(SOLUTIONS_DIR).filter(file => file.endsWith('.js'));
const SOLUTION_FNS = SOLUTIONS.reduce((acc, sol) => ({ ...acc, [sol]: require(`${SOLUTIONS_DIR}/${sol}`) }), {});
const SPEC = require(`./${CHALLENGE}/test-cases/spec.json`)
const TEST_RUNS = shuffle(flatten(Array.from({ length: TIMES_TO_EVAL_EACH }, () => SOLUTIONS)));
const STATS = SOLUTIONS.reduce((acc, sol) => ({ ...acc, [sol]: { solution: sol, runTimes: [], failed: false, total: null, average: null } }), {})


console.log(`\n\nEVALUATING CHALLENGE: ${CHALLENGE}\n\n`);
console.log(`FOUND ${SOLUTIONS.length} SOLUTIONS: ${SOLUTIONS.join(', ')}\n`);
console.log(`EVALUATING EACH ${TIMES_TO_EVAL_EACH} TIMES WITH ${SPEC.length} TEST CASES...\n\n`);

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
  const evaluated = STATS[solution].runTimes.slice(Math.floor(TIMES_TO_EVAL_EACH / 10));

  STATS[solution].total = sum(evaluated);
  STATS[solution].average = STATS[solution].total / evaluated.length;
});

const RESULTS = sortBy(Object.values(STATS).filter(res => !res.failed), 'average');
const FAILED = Object.values(STATS).filter(res => res.failed).map(res => res.solution);



RESULTS.forEach(({ solution, average, runTimes, failed, total }, idx) => {
  console.log(`${((idx + 1) + '.').padEnd(3, ' ')} ${solution.padEnd(30, ' ')} AVG=${average}ms  TOTAL=${total}`);
});


if (FAILED.length) {
  console.log(`\n\nDISQUALIFIED FAILED SOLUTIONS: ${FAILED.join(', ')}\n\n`);
}

