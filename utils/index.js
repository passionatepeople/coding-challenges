const vm = require('vm');
const chalk = require('chalk');
const { sum, sortBy, map, get } = require('lodash');
const fs = require('fs');
const path = require('path');
const { networkInterfaces } = require('os');

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
const RAW_RESULTS = sortBy(Object.values(STATS), 'total');

// keep only the best result from each contestant
const KEPT = [];
const DISCARDED = [];
const RESULTS = RAW_RESULTS.filter(res => {
  if (res.failed || res.onlyCodegolf) return false;

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

  const NORMALIZED = [];

  const PRETTY = [['Place', 'Points', 'Name', 'Total', 'Best run', 'Best compile', 'Size'].map(title => chalk.whiteBright(title))];
  let place = 1;
  let placeIncr = 1;
  let currentBest = 0;
  let showPlace = true;
  for (let i = 0; i < RESULTS.length; i++) {

    const name = RESULTS[i].solution.replace(/.js$/gi, '');

    // check if solution best time is within 5% of previous
    if (i > 0) {
      if (currentBest * (1 + percMargin / 100) > RESULTS[i].total) {
        showPlace = false;
        placeIncr++;
      } else {
        currentBest = RESULTS[i].total;
        place += placeIncr;
        showPlace = true;
        placeIncr = 1;
      }
    } else {
      currentBest = RESULTS[i].total;
    }

    const res = [
      showPlace ? chalk.cyan(place) : '',
      chalk.green(points[place] || ''),
      chalk.yellow(name),
      RESULTS[i].total.toFixed(3) + 'ms',
      RESULTS[i].bestRun.toFixed(3) + 'ms',
      RESULTS[i].bestCompile.toFixed(3) + 'ms',
      RESULTS[i].size,
    ];

    NORMALIZED.push([
      place,
      name,
      RESULTS[i].total.toFixed(3),
      points[place] || '',
      RESULTS[i].bestRun.toFixed(3),
      RESULTS[i].bestCompile.toFixed(3),
      RESULTS[i].size,
    ]);

    PRETTY.push(res);
  }

  return { PRETTY, RAW_RESULTS, DISCARDED, NORMALIZED };
};

const warmUpContext = () => {
  for (let i = 0; i < 3; i ++) {
    const context = { module: { exports: {}}};
    vm.createContext(context);
    vm.runInContext(`module.exports = () => {};`, context);
  }
};

const normDate = date => date.toLocaleString('en-GB', { timeZone: 'Europe/Amsterdam' });

const clearDir = (dir) => new Promise((resolve, reject) => {
  fs.readdir(dir, (err, files) => {
    if (err) reject(err);

    for (const file of files) {
      fs.unlink(path.join(dir, file), err => {
        if (err) throw reject(err);
      });
    }

    resolve();
  });
});

const getLocalIp = () => {
  const ips = Object.values(networkInterfaces())
    .flat()
    .filter(a => a.family === 'IPv4' && !a.internal && a.mac !== '00:00:00:00:00:00');

    return get(ips, '0.address', '');
};

module.exports = {
  stdout,
  stdev,
  wrapAndPad,
  computeResults,
  warmUpContext,
  normDate,
  clearDir,
  getLocalIp,
};