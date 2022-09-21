const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));
  test.each([
    [[[4, 4, 0, 2]], [8, 2, 0, 0]],
    [[[2, 0, 2, 0]], [4, 0, 0, 0]],
    [[[2, 0, 2, 4]], [4, 4, 0, 0]],
    [[[2, 0, 2, 4, 2, 4, 0, 0, 4]], [4, 4, 2, 8, 0, 0, 0, 0, 0]],
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
