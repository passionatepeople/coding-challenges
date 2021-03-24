const solution = require('./solution');
const testCases = require('./test-cases/spec.json');

test('passes basic predefined tests', () => {
  expect(solution(432)).toBe(18);
  expect(solution(123)).toBe(-18);
  expect(solution(55)).toBe(0);
  expect(solution(212)).toBe(0);
  expect(solution(45200)).toBe(27);
});

test('passes pregenerated random test cases', () => {
  testCases.forEach(({ inputs, result }) => expect(solution(...inputs)).toBe(result));
});

