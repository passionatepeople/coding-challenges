const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));

  test.each([
    ["42", 42, { type: "Literal", value: 42 }],
    [
      "42 + 10",
      42,
      {
        type: "BinaryExpression",
        operator: "add",
        left: { type: "Literal", value: 32 },
        right: { type: "Literal", value: 10 },
      },
    ],
    [
      "5 × ⸨ ⸨ 18 ÷ 2 ⸩ − 7 ⸩",
      10,
      {
        type: "BinaryExpression",
        operator: "multiply",
        left: { type: "Literal", value: 5 },
        right: {
          type: "BinaryExpression",
          operator: "subtract",
          left: {
            type: "BinaryExpression",
            operator: "divide",
            left: { type: "Literal", value: 18 },
            right: { type: "Literal", value: 2 },
          },
          right: { type: "Literal", value: 7 },
        },
      },
    ],
  ])("%s = %d", (expression, result, input) => {
    expect(evaluate(input)).toBe(result);
  });

  test.each(spec)("spec[%#]", ({ inputs, result }) => {
    expect(evaluate(...inputs)).toBe(result);
  });
});