const calculate = (a, b, c, d) => {
  const p1 = a <= 5 ? a * 9**3 : (a - 1) * 9**3;
  const p2 = b <= 5 ? b * 9**2 : (b - 1) * 9**2;
  const p3 = c <= 5 ? c * 9 : (c - 1) * 9;
  const p4 = d <= 5 ? d : d - 1;

  if (a === 5) return p1;
  if (b === 5) return p1 + p2;
  if (c === 5) return p1 + p2 + p3;

  return p1 + p2 + p3 + p4;
};

const withoutFives = (start, end) => {
  const a = ~~(start / 1000);
  const b = ~~(start % 1000 / 100);
  const c = ~~(start % 100 / 10);
  const d = start % 10;

  end++
  const e = ~~(end / 1000);
  const f = ~~(end % 1000 / 100);
  const g = ~~(end % 100 / 10);
  const h = end % 10;

  const startWithout = calculate(a, b, c, d);
  const endWithout = calculate(e, f, g, h);

  return endWithout - startWithout;
};

module.exports = withoutFives;