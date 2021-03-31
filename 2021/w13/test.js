const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));

  test.each([
    ['0 = 0.0.0.0', 0, '0.0.0.0'],
    ['1 = 0.0.0.1', 1, '0.0.0.1'],
    ['64 = 0.0.0.64', 64, '0.0.0.64'],
    ['255 = 0.0.0.255', 255, '0.0.0.255'],
    ['256 = 0.0.1.0', 256, '0.0.1.0'],
    ['511 = 0.0.1.255', 511, '0.0.1.255'],
    ['512 = 0.0.2.0', 512, '0.0.2.0'],
    ['1000000 = 0.15.66.64', 1000000, '0.15.66.64']
  ])("%s = %d", (expr, input, result) => {
    expect(evaluate(input)).toBe(result);
  });

  test.each(spec)("spec[%#]", ({ inputs, result }) => {
    expect(evaluate(...inputs)).toBe(result);
  });
});

