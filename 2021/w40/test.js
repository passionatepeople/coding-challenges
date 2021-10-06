const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));
  test.each([
    [['aysllash', 'haasslyh'], ['l', 'h']],
    [['iermnerw', 'eenrmwri'], []],
    [['abbcse', 'bcaedb'], ['s', 'd']],
    [['rcjVnbgFkKlRAdhCakABwNdnsSjanDHkEe', 'hjRgkaHkeNKnEBFckanjAsAdrjVdDbCnlw'], ['S', 'j']],
    [['QEEKFUpHRBNAWHBYUwKqVJBBKJ', 'UpKFBUQHJVKEPNqBYKEBABRWwH'], ['J', 'P']],
  ])("%j = %j", (inputs, result) => {
    expect(evaluate(...inputs)).toEqual(result);
  });

  test.each(spec.map(({ inputs, result }) => [inputs, result]))(
    "%j = %j",
    (inputs, result) => {
      expect(evaluate(...inputs)).toEqual(result);
    }
  );
});
