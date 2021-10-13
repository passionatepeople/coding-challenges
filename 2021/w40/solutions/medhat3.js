const indexOf = String.prototype.indexOf;
const substring = String.prototype.substring;

const helpJerry = (init, final) => {
  let removed;
  let len = init.length;

  for (let i = 0; i < len; i++) {
    let curr = init[i];
    let index = indexOf.call(final, curr);
    if (index >= 0) {
      final =
        substring.call(final, 0, index) + substring.call(final, index + 1);
    } else {
      removed = curr;
    }
  }

  return removed ? [removed, final] : [];
};

module.exports = helpJerry;
