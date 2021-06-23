const { isEqual } = require('./index');

describe('isEqual', () => {
  it.each([
    [1, 1],
    ["a", "a"],
    [true, true],
    [false, false],
    [[1,"a",true], [1,"a",true]],
    [{a:1,b:true}, {a:1,b:true}],
    [{a:1,b:true}, {b:true,a:1}],
  ])('%j == %j', (a, b) => {
    expect(isEqual(a,b)).toBe(true);
  });

  it.each([
    [1,2],
    ["a","b"],
    [true,false],
    [[true,"a",1],[1,"a",true]],
    [[1,"a",true], [1,"a"]],
    [[1,"a",true], [1,"a",true,1]],
  ])('%j != %j', (a, b) => {
    expect(isEqual(a,b)).toBe(false);
  });
})
