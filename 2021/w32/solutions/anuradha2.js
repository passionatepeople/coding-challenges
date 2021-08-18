function imSpecial (a) {
  let [a0, a1, a2] = a;
  if (a0 === a1) {
    return a0 === a2 ? a.find(l => l !== a0) : a2;
  } else {
    return a0 === a2 ? a1 : a0;
  }
}

module.exports = imSpecial;