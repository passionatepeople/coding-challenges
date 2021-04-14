const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));
  test.each([
    ['one = one', 'one', 'one'],
    ['ONE = one', 'ONE', 'one'],
    ['oneTwoThree = oneTwoThree', 'oneTwoThree', 'oneTwoThree'],
    ['OneTwoThree = oneTwoThree', 'OneTwoThree', 'oneTwoThree'],
    ['One\'TwoThree = one\'TwoThree', 'One\'TwoThree', 'one\'TwoThree'],
    ['OneT\'woThree = oneT\'woThree', 'OneT\'woThree', 'oneT\'woThree'],
    ['one-two-three = oneTwoThree', 'one-two-three', 'oneTwoThree'],
    ['one_two_three = oneTwoThree', 'one_two_three', 'oneTwoThree'],
    ['one_Two_three = oneTwoThree', 'one_Two_three', 'oneTwoThree'],
    ['one_two-three = oneTwoThree', 'one_two-three', 'oneTwoThree'],
    ['one__two__three = oneTwoThree', 'one__two__three', 'oneTwoThree'],
    ['one--two--three = oneTwoThree', 'one--two--three', 'oneTwoThree'],
    ['one__two--three = oneTwoThree', 'one__two--three', 'oneTwoThree'],
    ['ONE_two_THREE = oneTwoThree', 'ONE_two_THREE', 'oneTwoThree'],
    ['ONE_Two--THREE = oneTwoThree', 'ONE_Two--THREE', 'oneTwoThree'],
    ['ONE_Two--THREE = oneTwoThree', 'ONE_Two--THREE', 'oneTwoThree'],
  ])("%s", (expr, input, result) => {
    expect(evaluate(input)).toBe(result);
  });

  test.each(spec)("spec[%#]", ({ inputs, result }) => {
    expect(evaluate(...inputs)).toBe(result);
  });
});
