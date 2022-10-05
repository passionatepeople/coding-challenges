const hash = new Map([["#", 5],["e", 11],["i", 15],["c", 9],["a", 7],["x", 15],["d", 10],["k", 6],["s", 10],["z", 7],["f", 12],["n", 6],["y", 16],["w", 14],["p", 7],["g", 13],["j", 6],["u", 12],["o", 6],["v", 13],["l", 6],["b", 8],["r", 9],["h", 14],["q", 8],["m", 6],["t", 11],["X", 13],["G", 11],["U", 10],["A", 5],["Z", 5],["P", 5],["D", 8],["K", 4],["J", 4],["E", 9],["V", 11],["C", 7],["I", 13],["L", 4],["B", 6],["T", 9],["Q", 6],["H", 12],["R", 7],["N", 4],["Y", 14],["O", 4],["S", 8],["F", 10],["M", 4],["W", 12]]);
const hashedAllTheWay = (code) => {
  let length = code.length,
    sum = 0;
  while (length--) {
    sum += hash.get(code.charAt(length));
  }
  return sum;
};

module.exports = hashedAllTheWay;