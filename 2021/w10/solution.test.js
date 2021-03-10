const solution = require('./solution');
const testCases = require('./test-cases/spec.json');

test('passes basic predefined tests', () => {
  expect(solution('abcd')).toStrictEqual(['a', 'b', 'c', 'd']);
  expect(solution('dbca')).toStrictEqual(['a', 'b', 'c', 'd']);
  expect(solution('dbbccca')).toStrictEqual(['c', 'b', 'a', 'd']);

  expect(solution('Passionate People')).toStrictEqual(['e', 'p', 'a', 'o', 's', ' ', 'i', 'l', 'n', 't']);
  expect(solution('Amsterdam')).toStrictEqual(['a', 'm', 'd', 'e', 'r', 's', 't']);
  expect(solution('The quick brown fox jumps over the lazy dog')).toStrictEqual([' ', 'o', 'e', 'h', 'r', 't', 'u', 'a', 'b', 'c', 'd', 'f', 'g', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 's', 'v', 'w', 'x', 'y', 'z']);
  expect(solution(`$jQuery('#app').boot().forEach((something) => console.log('@app ' + something + 'has booted!!!'));`)).toStrictEqual(['o', ' ', '\'', 'e', '(', ')', 'a', 'h', 'p', 's', 't', '!', '.', 'g', 'n', '+', 'b', 'c', 'i', 'l', 'm', 'r', '#', '$', ';', '=', '>', '@', 'd', 'f', 'j', 'q', 'u', 'y']);

});


test('passes pregenerated random test cases', () => {
  testCases.forEach(({ inputs, result }) => expect(solution(...inputs)).toStrictEqual(result));
});

