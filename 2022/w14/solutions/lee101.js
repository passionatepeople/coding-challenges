const opposites = {
  NORTH: "SOUTH",
  SOUTH: "NORTH",
  EAST: "WEST",
  WEST: "EAST",
};

const cutToTheChase = (directions) => {
  if (directions.length === 1) return directions;
  let res = [directions[0]];
  for (let i = 1; i < directions.length; i++) {
    if (directions[i] !== opposites[res[res.length - 1]]) {
      res.push(directions[i]);
    } else {
      res.pop();
    }
  }

  return res;
};

module.exports = cutToTheChase;