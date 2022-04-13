const cutToTheChase = (directions) => {
  const modifiedDirections = [];
  for (let i = 0; i < directions.length; i++) {
    if (directions[i] === "SOUTH" && directions[i + 1] === "NORTH" ||
      directions[i] === "NORTH" && directions[i + 1] === "SOUTH" ||
      directions[i] === "EAST" && directions[i + 1] === "WEST" ||
      directions[i] === "WEST" && directions[i + 1] === "EAST") { i++; continue }
    modifiedDirections.push(directions[i]);
  }
  return modifiedDirections.length === directions.length ? directions : cutToTheChase(modifiedDirections);
};

module.exports = cutToTheChase;