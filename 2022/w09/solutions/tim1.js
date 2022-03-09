const ᢕ = (ᦤ) => {
  let ᠲ = ᦤ.length,
    ᚏ = [],
    ᚕ = 1;

  for (; ᚕ < ᠲ; ++ᚕ) {
    ᚏ.push(ᦤ.slice(ᚕ) + ᦤ.slice(0, ᚕ));
  }
  ᚏ.push(ᦤ);

  return ᚏ;
};

module.exports = ᢕ;