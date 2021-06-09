const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));
  test.each([
    [1, '1 second'],
    [60, '1 minute'],
    [123, '2 minutes and 3 seconds'],
    [3599, '59 minutes and 59 seconds'],
    [3600, '1 hour'],
    [3601, '1 hour and 1 second'],
    [100000, '1 day, 3 hours, 46 minutes and 40 seconds'],
    [1000000, '11 days, 13 hours, 46 minutes and 40 seconds'],
    [10000000, '115 days, 17 hours, 46 minutes and 40 seconds'],
    [100000000, '3 years, 62 days, 9 hours, 46 minutes and 40 seconds'],
  ])("%j = %j", (input, result) => {
    expect(evaluate(input)).toBe(result);
  });

  test.each(spec.map(({ inputs, result }) => [inputs[0], result]))(
    "%j = %j",
    (input, result) => {
      expect(evaluate(input)).toBe(result);
    }
  );
});
