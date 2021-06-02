const cheats = [2,3,5,7,13,17,11,19,29,31,37,43,53,47,71,23,61,67,89,107,109,113,167,179,443,1091,59,73,149,151,157,163,199,227,229,251,557,277,463,499,571,577,587,593,599,643,709,751,811,827,859,971,1033,1153,1229,1289,1531,1601,1613,1619,1997,2137,2503,2741,2797,2843,2851,2861,2963,3491,3761,4127,4201,4801,5101,5801,5849,6121,6529,6581,7103,7121,11329,12421,14683,14923,15173,15823,16811,18397,30449,36781,40897,46523,55207,55997,56333,56393,59159,72161,72763,74713,87179,106627,121001,189407,220151,225161,229681,241817,242057,249397,304049,475283,733141,1048361,1125857,1200083,1224473,1306157,2381339,2424553,3035969,3583241,3859511,4878593,5184593,8725999,9120971,9159061];

const getPrimeFactors = (number) => {
  const factors = [];
  let remainder = number;

  while (remainder > 1) {
    let factor = 0;
    for (let i = 0; i < cheats.length; i++) {
      if (remainder % cheats[i] == 0) {
        factor = cheats[i];
        break;
      }
    }
    // If the cheats didn't work, fall back to a factorization wheel
    // with basis [2, 3, 5] and coprimes [7, 11, 13, 17, 19, 23, 29, 31]
    if (!factor) {
      const max = Math.sqrt(remainder);
      while (factor <= max) {
        if (remainder % (factor += 7) == 0) break;
        if (remainder % (factor += 4) == 0) break;
        if (remainder % (factor += 2) == 0) break;
        if (remainder % (factor += 4) == 0) break;
        if (remainder % (factor += 2) == 0) break;
        if (remainder % (factor += 4) == 0) break;
        if (remainder % (factor += 6) == 0) break;
        if (remainder % (factor += 2) == 0) break;
        factor--;
      }
      if (factor > max) factor = remainder;
    }
    factors.push(factor);
    remainder /= factor;
  }

  return factors;
};

module.exports = getPrimeFactors;