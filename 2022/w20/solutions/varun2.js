const map = {
  "-1": -1,
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 4,
  6: 5,
  7: 6,
  8: 7,
  9: 8,
  10: 9,
  20: 18,
  30: 27,
  40: 36,
  50: 44,
  60: 45,
  70: 54,
  80: 63,
  90: 72,
  100: 81,
  200: 162,
  300: 243,
  400: 324,
  500: 404,
  600: 405,
  700: 486,
  800: 567,
  900: 648,
  1000: 729,
  2000: 1458,
  3000: 2187,
  4000: 2916,
  5000: 3644,
  6000: 3645,
  7000: 4374,
  8000: 5103,
  9000: 5832,
  10000: 6561,
}

const withoutFives = (start, end) => {

  const startV = start - 1;

  let endVal = 0

  const e1 = end % 10
  const e10 = (end - end % 10) % 100
  const e100 = (end - end % 100) % 1000
  const e1000 = (end - end % 1000) % 10000

  endVal += map[e1000]
  if (e1000 / 1000 !== 5) {
    endVal += map[e100]
    if (e100 / 100 !== 5) {
      endVal += map[e10]
      if (e10 / 10 !== 5) {
        endVal += map[e1]
      }
    }
  }

  let startVal = 0

  const s1000 = (startV - startV % 1000) % 10000;
  startVal += map[s1000]
  if (~~(s1000 / 1000) !== 5) {
    const s100 = (startV - startV % 100) % 1000;
    startVal += map[s100]
    if (~~(s100 / 100) !== 5) {
      const s10 = (startV - startV % 10) % 100;
      startVal += map[s10]
      if (~~(s10 / 10) !== 5) {
        const s1 = startV % 10;
        startVal += map[s1]
      }
    }
  }

  return endVal - startVal
};

module.exports = withoutFives;