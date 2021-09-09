# Authoring challenges

Authoring challenges can be fun and creative endeavour. Ideally you should aim to create a challenge that is solvable within max 15-20 min.
Giving enough room for variability of approaches, but not too difficult to require extensive time to get it right.

You can scan through the past challenges and learn from those examples.
All challenges must have at least these 4 files: `README.md`,  `test.js`, `solutions/solution.js` and `test-cases/spec.json`.

## `README.md` file

Here you lay out the challenge and explain what needs to be achieved. Outlining the inputs and expected outputs from the solution.
You should provide at least some examples, so the idea would be more clear.


## `test.js` file

This is the file which will be used to run local jest tests and will let the participant know if their solution is right.
You can pretty much copy this file from other challenges since they are very generic, and only replace a couple of lines to match the examples from `README.md`.


Example `test.js` file (used for 2021/w29 challenge)
```javasript
const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));

  test.each([
    [['abcd'], ["ab", "cd"]],                                         // ^
    [['abcde'], ["ab", "cd", "e_"]],                                  // |
    [['abcdefghijklm', 3], ["abc", "def", "ghi", "jkl", "m__"]],      // | - Only these 4 lines need to be updated to match the example checks
    [['abcdefghij', 7, '*'], ["abcdefg", "hij****"]],                 // v
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
```


## `solutions/solution.js`

This is the initial state of the solution. It should have a descriptive name, specified arguments and a minimal body

```javasript
const yourChallengeFunctionName = (input1, input2, etc) => {
  // your solution here

  return undefined;
};

module.exports = yourChallengeFunctionName;
```

## `test-cases/spec.json` file

This is the file which contains the bulk of test cases. This file is also used during the evaluation.
Typically there are 10000 test cases per challenge, but that number can be smaller to adjust for reasonable running time.

A typical solution shouldn't take more than 150ms to go through these cases.

This file is usually generated with random inputs to cover as large input surface area as possible.

### Example `spec.json` generation script


`test-cases/test-gen.js` file (used for 2021/w20 challenge)
```
const fs = require('fs');

const mergeArrays = (arr1, arr2, direction) => [...arr1, ...arr2].sort((a, b) => direction === 'asc' ? a - b : b -a);

const getArr = () => Array.from({ length: 2 + Math.round(Math.random() * 30 ) }, () => -100 + Math.round(Math.random() * 200 ))
  .sort(Math.random() > .5 ? ((a, b) => a - b) : ((a, b) => b - a));

const testCases = Array.from({ length: 10000 }, () => {

  const inputs = [
    getArr(),
    getArr(),
    Math.random() > .5 ? 'asc' : 'desc'
  ];


  return {
    inputs,
    result: mergeArrays(...inputs),
  };
});

fs.writeFileSync('./spec.json', JSON.stringify(testCases));
```


## `validator.js` file (optional)

Optionally a challenge can have its own custom validation function. Normally the result is expected to be an exact match, but for some challenges it might not apply.
This function should return `true` if solution is considered valid, `false` otherwise.

Example: 2021/w26, because the order of the resulting array was not important
```
const { isEqual } = require('../../utils');

module.exports = (result, expected) => {
  return Array.isArray(result) && Array.isArray(expected) && isEqual([...result].sort(), [...expected].sort());
};
```

*Note:* if using custom validator, the `test.js` file should be adjusted to use it as well. (check 2021/w26 as example)

## `globals.js` file (optional)

Optionally a challenge can add or replace certain global variables.
Example:
```
module.exports = {
  BigInt: () => {},       // this will disable using BigInt in the challenge code
  DATASET: {              // this will allow solution to refer to DATASET global variable in the code
    arbitrary: 'data',
    which: 'can',
    be: 'useful',
    in: 'the challenge',
  },
};

```

