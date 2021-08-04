const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));

  test.each([
    [[[5, 5, 1, 5, 1, 7], 2], [5, 5, 1, 1, 7]],
    [[[5, 5, 1, 5, 1, 7], 1], [5, 1, 7]],
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
