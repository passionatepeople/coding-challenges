const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));

  test.each([
    [[[1, 2, 3], 2], true],
    [[[1, 2, 3], 7], false],
    [[[1, 2, 3, [4], [5, [6, 7]]], 7], true],
  ])("%j = %j", (inputs, result) => {
    expect(evaluate(...inputs)).toEqual(result);
  });

  test.each(spec.map(({ inputs, result }) => [inputs, result]))(
    "%j = %j",
    (inputs, result) => {
      expect(evaluate(...inputs)).toEqual(result);
    }
  );
});
