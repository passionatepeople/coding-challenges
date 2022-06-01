const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));
  test.each([
    [[2], 4],
    [[13], 19],
    [[123], 149],
    [[567], 253649],
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
