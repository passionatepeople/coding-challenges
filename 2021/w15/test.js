const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));
  test.each([
    ["one", "one"],
    ["ONE", "one"],
    ["oneTwoThree", "oneTwoThree"],
    ["OneTwoThree", "oneTwoThree"],
    ["One'TwoThree", "one'TwoThree"],
    ["OneT'woThree", "oneT'woThree"],
    ["one-two-three", "oneTwoThree"],
    ["one_two_three", "oneTwoThree"],
    ["one_Two_three", "oneTwoThree"],
    ["one_two-three", "oneTwoThree"],
    ["one__two__three", "oneTwoThree"],
    ["one--two--three", "oneTwoThree"],
    ["one__two--three", "oneTwoThree"],
    ["ONE_two_THREE", "oneTwoThree"],
    ["ONE_Two--THREE", "oneTwoThree"],
    ["ONE_Two--THREE", "oneTwoThree"],
    ["ONE_Two--THR'EE", "oneTwoThr'ee"],
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
