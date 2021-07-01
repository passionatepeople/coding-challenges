const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const validator = require("./validator");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));
  test.each([
    ["ab", ["ab", "ba"]],
    ["abc", ["abc", "acb", "bac", "bca", "cab", "cba"]],
    ["aac", ["aac", "aca", "caa"]],
  ])("%j = %j", (input, result) => {
    expect(validator(evaluate(input), result)).toBe(true);
  });

  test.each(spec.map(({ inputs, result }) => [inputs[0], result]))(
    "%j = %j",
    (input, result) => {
      expect(validator(evaluate(input), result)).toBe(true);
    }
  );
});
