const { join } = require('path')
const { execSync } = require('child_process');
const { readdirSync, statSync } = require('fs')
const { last } = require('lodash');

const dirs = p => readdirSync(p)
  .filter(f => statSync(join(p, f)).isDirectory());

const YEAR = '2021';

const challenges = dirs(YEAR);
const latest = last(challenges.sort());
const testWeek = process.argv[2] || latest;

console.log(`TESTING CHALLENGE: ${YEAR}/${testWeek}\n\n`);

try {
  execSync(`jest --runInBand --rootDir=${YEAR}/${testWeek}`, { stdio: 'inherit' });
} catch (e) {

}
