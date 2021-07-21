const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));

  test.each([
    [['abcd'], ["ab", "cd"]],
    [['abcde'], ["ab", "cd", "e_"]],
    [['abcdefghijklm', 3], ["abc", "def", "ghi", "jkl", "m__"]],
    [['abcdefghij', 7, '*'], ["abcdefg", "hij****"]],
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
