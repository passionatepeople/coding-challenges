const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));
  test.each([
    [[[
      [4,1,7,2,3,8,5,6,9],
      [6,5,3,1,4,9,7,2,8],
      [8,2,9,6,5,7,1,3,4],
      [3,8,2,5,9,4,6,1,7],
      [9,7,4,3,6,1,2,8,5],
      [1,6,5,8,7,2,9,4,3],
      [2,9,6,4,8,5,3,7,1],
      [7,3,8,9,1,6,4,5,2],
      [5,4,1,7,2,3,8,9,6]
    ]], true],
    [[[
      [6,7,8,4,5,3,2,1,9],
      [3,4,9,2,6,1,8,5,7],
      [1,5,2,7,9,8,4,2,6],
      [8,6,1,3,4,2,7,9,5],
      [3,9,5,8,7,6,3,2,1],
      [7,2,3,5,1,9,6,8,4],
      [2,1,7,6,7,5,9,4,8],
      [5,8,4,9,2,7,1,6,3],
      [9,3,6,1,8,4,5,7,2]
    ]], false],
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
