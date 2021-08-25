const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));
  test.each([
    [['The quick brown fox jumps over the lazy dog'], 'jumps'],
    [['The quick jUmPs brown fox jumps over the lazy dog'], 'jUmPs'],
    [['Jackdaws love my big sphinx of quartz'], 'quartz'],
    [['You go tell that vapid existentialist quack Freddy Nietzsche that he can just bite me twice'], 'existentialist'],
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
