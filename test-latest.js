const { join } = require('path')
const { execSync } = require('child_process');
const { readdirSync, statSync } = require('fs')
const { last } = require('lodash');

const dirs = p => readdirSync(p)
  .filter(f => statSync(join(p, f)).isDirectory());

const YEAR = '2021';

const challenges = dirs(YEAR);
const latest = last(challenges.sort());

console.log(`TESTING CHALLENGE: ${YEAR}/${latest}\n\n`);

try {
  execSync(`jest --runInBand --rootDir=${YEAR}/${latest}`, { stdio: 'inherit' });
} catch (e) {

}
