const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));
  test.each([
    [[-7, 2, -1, 5, -6, 2], 6],
    [[5, 2, -7, 2, -1, 5, -4, 2, 13, 4], 21],
    [[1, 2, 3, 4], 10],
    [[], 0],
    [[-1, -2, -3], 0],
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
