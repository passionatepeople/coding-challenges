const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));
  test.each([
    [['Victory'], ['ictoryV', 'ctoryVi', 'toryVic', 'oryVict', 'ryVicto', 'yVictor', 'Victory']],
    [['a'], ['a']],
    [['aB'], ['Ba', 'aB']],
    [['teNis'], ['eNist', 'Niste', 'isteN', 'steNi', 'teNis']],
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
