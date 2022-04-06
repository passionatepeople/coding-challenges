const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));
  test.each([
    [[['NORTH']], ['NORTH']],
    [[['NORTH', 'EAST']], ['NORTH', 'EAST']],
    [[['NORTH', 'EAST', 'SOUTH']], ['NORTH', 'EAST', 'SOUTH']],
    [[['NORTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']], ['NORTH', 'WEST']],
    [[['SOUTH', 'NORTH', 'EAST', 'WEST']], []],
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
