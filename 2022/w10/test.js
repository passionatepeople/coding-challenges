const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));
  test.each([
    [[["1979-01-30","2007-02-11","1992-04-23","1992-06-30","2001-06-01","2002-02-04","2009-03-26","1998-04-19"],"2011-01-12"], 10.5],
    [[["1975-12-22","1975-02-14","1985-01-26"],"1987-12-18"], 11],
    [[["1978-01-10","1979-11-04","1976-08-27","1975-03-01","1972-10-16","1970-10-22","1971-02-06","1973-03-27","1974-04-30"],"1982-12-29"], 8],
    [[["1990-01-01"],"2022-01-01"], 32],
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
