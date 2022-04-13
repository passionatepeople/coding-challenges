const cutToTheChase = (directions) => {
  const map = {
    NORTH: 1,
    EAST: 2,
    SOUTH: -1,
    WEST: -2,
  };
  let temp = [directions[0]];
  for (let i = 1; i < directions.length; i++) {
    if (map[temp[temp.length - 1]] + map[directions[i]] === 0) {
      temp.pop();
      continue;
    }

    temp.push(directions[i]);
  }

  return temp;
};

module.exports = cutToTheChase;