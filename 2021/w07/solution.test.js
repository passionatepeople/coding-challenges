const solution = require('./solution');

test('passes basic predefined tests', () => {
  expect(solution(255, 255, 255)).toBe('#FFFFFF')
  expect(solution(255, 255, 300)).toBe('#FFFFFF')
  expect(solution(0,0,0)).toBe('#000000')
  expect(solution(-20,0,0)).toBe('#000000')
  expect(solution(77, 22, 159)).toBe('#4D169F')
});

