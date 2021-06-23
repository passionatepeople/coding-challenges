const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));
  test.each([
    [0, 'zero'],
    [5, 'five'],
    [-7, 'minus seven'],
    [27, 'twenty-seven'],
    [205, 'two hundred five'],
    [-752, 'minus seven hundred fifty-two'],
    [17346, 'seventeen thousand three hundred forty-six'],
    [654321, 'six hundred fifty-four thousand three hundred twenty-one'],
    [-123456, 'minus one hundred twenty-three thousand four hundred fifty-six'],
    [999999, 'nine hundred ninety-nine thousand nine hundred ninety-nine'],
    [-999999, 'minus nine hundred ninety-nine thousand nine hundred ninety-nine'],
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
