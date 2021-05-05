const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));
  test.each([
    [0, 'zero'],
    [1, 'one'],
    [100, 'one hundred'],
    [200, 'two hundred'],
    [40, 'forty'],
    [420, 'four hundred and twenty'],
    [1234, 'one thousand two hundred and thirty four'],
    [9001, 'it\'s over nine thousand!'],
  ])("%j = %j", (input, result) => {
    expect(evaluate(input)).toBe(result);
  });

  test.each(spec.map(({ inputs, result }) => [inputs[0], result]))(
    "%j = %j",
    (input, result) => {
      expect(evaluate(input)).toEqual(result);
    }
  );

});
