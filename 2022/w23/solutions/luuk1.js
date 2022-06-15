module.exports = (first, second) => {
  let a = ''+first;
  let b = ''+second;
  const result = +(b[0] + a.slice(1)) - +(a[0] + b.slice(1));

  return result < 0 ? -result : result;
};