const iStandOut = (numbers) => {
  let isEven, isOdd, odd = [], even = [];

  for (let n of numbers) {
    if (n % 2 === 0) {
      if (isEven) continue;
      if (isOdd) return n;
      even.push(n);
      if (even.length > 1) isEven = true;
    } else {
      if (isOdd) continue;
      if (isEven) return n;
      odd.push(n);
      if (odd.length > 1) isOdd = true;
    }
  }

  return isEven ? odd[0] : even[0];
};

module.exports = iStandOut;