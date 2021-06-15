const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));

  test.each([
    [['10', '11', '110'], 2],
    [['10', '10', '100'], 2],
    [['22', '1', '22'], 3],
    [['2', '3', '12'], 4],
    [['12', '5', '60'], 10],
    [['4', '17', '68'], 10],
    [['e', '2', '1c'], 16],
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
