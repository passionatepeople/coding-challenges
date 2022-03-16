const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));
  test.each([
    [[[1, 2, 3, 4]], 5],
    [[[1, 1, 2, 3, 4]], 6],
    [[[1, 2, 3, 4, 4]], 9],
    [[[1, 1, 2, 3, 4, 4]], 10],
    [[[]], 0],
    [[[1]], 0],
    [[[1, 1]], 0],
    [[[1, 4]], 0],
    [[[1, 4, 6, 8, 12, -4]], 19],
  ])("%j = %j", (inputs, result) => {
    expect(evaluate(...inputs)).toStrictEqual(result);
  });

  test.each(spec.map(({ inputs, result }) => [inputs, result]))(
    "%j = %j",
    (inputs, result) => {
      expect(evaluate(...inputs)).toStrictEqual(result);
    }
  );
});
