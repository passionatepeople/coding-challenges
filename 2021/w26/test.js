const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));
  test.each([
    ['ab', ["ab", "ba"]],
    ['abc', ["abc", "acb", "bac", "bca", "cab", "cba"]],
    ['aac', ["aac", "aca", "caa"]],
  ])("%j = %j", (input, result) => {
    expect(evaluate(input)).toEqual(expect.arrayContaining(result));
  });

  test.each(spec.map(({ inputs, result }) => [inputs[0], result]))(
    "%j = %j",
    (input, result) => {
      expect(evaluate(input)).toEqual(expect.arrayContaining(result));
    }
  );
});
