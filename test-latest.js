const { join } = require("path");
const { execSync } = require("child_process");
const { readdirSync, statSync } = require("fs");
const { last } = require("lodash");

const dirs = (p) =>
  readdirSync(p).filter((f) => statSync(join(p, f)).isDirectory());

const YEAR = "2021";

const challenges = dirs(YEAR);
const latest = last(challenges.sort());
const testWeek =
  process.argv.filter((e, i) => i > 1 && e.startsWith('w'))[0] || latest;

console.log(`TESTING CHALLENGE: ${YEAR}/${testWeek}\n\n`);

try {
  const args = ["--runInBand", `--rootDir=${YEAR}/${testWeek}`];

  if (process.argv.includes("--watch")) args.push("--watch");

  execSync(`jest ${args.join(" ")}`, { stdio: "inherit" });
} catch (e) {
  console.error(e);
}
