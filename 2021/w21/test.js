const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));

  test.each([
    [4, [2, 2]],
    [12, [2, 2, 3]],
    [36, [2, 2, 3, 3]],
    [40, [2, 2, 2, 5]],
    [43, [43]],
    [51, [3, 17]],
    [100, [2, 2, 5, 5]],
  ])("%j = %j", (input, result) => {
    expect(evaluate(input)).toEqual(result);
  });

  test.each(spec.map(({ inputs, result }) => [inputs[0], result]))(
    "%j = %j",
    (input, result) => {
      expect(evaluate(input)).toEqual(result);
    }
  );
});
