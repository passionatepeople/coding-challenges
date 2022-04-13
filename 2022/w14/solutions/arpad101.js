const cutToTheChase = (directions) => {
  const opposites = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST',
  };

  const n = directions.length;
  const stack = [];

  for (let i = 0; i < n; i++) {
    if (opposites[directions[i]] !== directions[i + 1]) {
      stack.push(directions[i]);
    } else {
      let j = 0;
      while (stack.length > 0 && i + j + 2 < n && stack[stack.length - 1] === opposites[directions[i + j + 2]]) {
        stack.pop();
        j++;
      }
      i += j + 1;
    }
  }

  return stack;
};

module.exports = cutToTheChase;