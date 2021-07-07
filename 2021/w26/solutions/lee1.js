const cache = new Set();

const join = (a) => {
  let b = "";
  let i = 0;
  while (i < a.length) {
    b += a[i];
    i++;
  }
  return b;
};

// Heaps algorithm - thanks stack overflow
function* permute(permutation) {
  var length = permutation.length,
    c = new Uint16Array(length),
    i = 1,
    k,
    p,
    g;

  g = join(permutation);

  if (!cache.has(g)) {
    cache.add(g);
    yield g;
  }
  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      g = join(permutation);
      if (!cache.has(g)) {
        cache.add(g);
        yield g;
      }
    } else {
      c[i] = 0;
      ++i;
    }
  }
}

module.exports = (a) => {
  if (a.length === 1) return [a];
  let ret = [];
  for (let r of permute(a.split(""))) {
    ret.push(r);
  }
  return ret;
};
