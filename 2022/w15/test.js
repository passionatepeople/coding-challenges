const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));
  test.each([
    [[[1,2,3,4,5]], '1-5'],
    [[[-2,-1,0,1,2,3,4,5]], '-2-5'],
    [[[1,2,4,5,6]], '1,2,4-6'],
    [[[-7,-4,-3,-2,0,7,9,15,16,17,18,19,22]], '-7,-4--2,0,7,9,15-19,22'],
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
