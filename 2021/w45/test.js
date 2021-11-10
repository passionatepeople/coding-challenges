const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));
  test.each([
    [['an.example string!', 27], 'AN.eXAMPlE STRiNG!'],
    [['an.example string!', 9], 'An.eXAmpLE stRIng!'],
    [['aaa!aaa', 1], 'AAA!AAA'],
    [['aaa!aaa', 2], 'AaA!aAa'],
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
