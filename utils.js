const vm = require('vm');
const chalk = require('chalk');
const { sum, sortBy, map } = require('lodash');

const stdout = (progress) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(progress);
}

const stdev = (array) => {
  const avg = sum(array) / array.length;
  return Math.sqrt(sum(map(array, (i) => Math.pow((i - avg), 2))) / array.length);
};

const wrapAndPad = (names, logPad = 35) => {
  const maxPerLine = 120;
  let inLine = 0;

  return names.reduce((acc, name, id) => {
    const joiner = id > 0 ? ', ' : '';
    const toAdd = `${joiner}${name}`;

    if (inLine + toAdd.length > maxPerLine) {
      inLine = name.length;
      return `${acc},\n${' '.repeat(logPad - 9)}${name}`;

    } else {
      inLine += toAdd.length;
      return `${acc}${toAdd}`;
    }
  }, '');
};

const computeResults = (STATS, percMargin) => {

// assemble stats and results
const RAW_RESULTS = sortBy(Object.values(STATS), 'best');
const COMPILE_TIMES = Object.values(STATS).map(s => s.compileTime).filter(ct => Number.isFinite(ct));

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

  const PRETTY = [['Place', 'Points', 'Name', 'Best', 'Average', 'σ (st dev)', 'Size (bytes)', 'Compile time'].map(title => chalk.whiteBright(title))];
  let place = 1;
  let placeIncr = 1;
  let currentBest = 0;
  let showPlace = true;
  for (let i = 0; i < RESULTS.length; i++) {

    const name = RESULTS[i].solution.replace(/.js$/gi, '');

    // check if solution best time is within 5% of previous
    if (i > 0) {
      if (currentBest * (1 + percMargin / 100) > RESULTS[i].best) {
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

    let compileTime = '';
    if (RESULTS[i].compileTime) {
      const ct = RESULTS[i].compileTime;
      const icon = ct === Math.max(...COMPILE_TIMES) ? ' 🐢' : ct === Math.min(...COMPILE_TIMES) ? ' 🐇' : '';
      compileTime = `${ct.toFixed(3)} ms${icon}`;
    }

    const res = [
      showPlace ? chalk.cyan(place) : '',
      chalk.green(points[place] || ''),
      chalk.yellow(name),
      RESULTS[i].best.toFixed(3) + 'ms' + ` (${(Math.abs(RESULTS[i].average - RESULTS[i].best) / RESULTS[i].stdev).toFixed(1)}σ)`,
      RESULTS[i].average.toFixed(3) + 'ms',
      RESULTS[i].stdev.toFixed(3) + 'ms' + ` (${(100 * RESULTS[i].stdev / RESULTS[i].average).toFixed(1)}%)`,
      RESULTS[i].size,
      compileTime,
    ];

    PRETTY.push(res);
  }

  return { PRETTY, RAW_RESULTS, DISCARDED};
};

const warmUpContext = () => {
  for (let i = 0; i < 3; i ++) {
    const context = { module: { exports: {}}};
    vm.createContext(context);
    vm.runInContext(`module.exports = () => {};`, context);
  }
};

module.exports = {
  stdout,
  stdev,
  wrapAndPad,
  computeResults,
  warmUpContext,
};