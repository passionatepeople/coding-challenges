const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));
  test.each([
    ['n(1, 2, 3)', true],
    ['!)()()', false],
    ['()', true],
    ['())', false],
    ['(()(()))', true],
    [')(()(()))', false],
    ['((777))(((arg)())(...rest))', true],
    ['((777))((...args)())(9))', false],
  ])("%j = %j", (input, result) => {
    expect(evaluate(input)).toBe(result);
  });

  test.each(spec.map(({ inputs, result }) => [inputs[0], result]))(
    "%j = %j",
    (input, result) => {
      expect(evaluate(input)).toBe(result);
    }
  );
});
