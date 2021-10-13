const helpJerry = (init, final) => {
  const res = [];
  let ref = {};

  for (let i = 0; i < init.length; i++) {
    ref[init[i]] = (ref[init[i]] || 0) + 1;
    ref[final[i]] = (ref[final[i]] || 0) - 1;
  }

  let keys = Object.keys(ref);
  for (let i = 0; i < keys.length; i++) {
    let curr = keys[i];
    if (ref[curr] > 0) {
      res[0] = curr;
    } else if (ref[curr] < 0) {
      res[1] = curr;
    }
  }

  return res;
};

module.exports = helpJerry;
