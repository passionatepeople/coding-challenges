const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));

  test.each([
    [[[1, 2, 3, 4], [8, 7, 6, 5], 'asc'], [1, 2, 3, 4, 5, 6 ,7, 8]],
    [[[10, 6, 2, 1, -1, -5], [3, 4, 7, 9], 'desc'], [10, 9, 7, 6, 4, 3, 2, 1, -1, -5]],
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

