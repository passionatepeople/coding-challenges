const loop = {
  NORTH: 'SOUTH',
  EAST: 'WEST',
  SOUTH: 'NORTH',
  WEST: 'EAST',
}

const cutToTheChase = (directions) => {
  const length = directions.length
  const first = directions[0]
  const result = [first]
  let last = first

  for (let i = 1; i < length;) {
    const direction = directions[i];
    
    if (direction === loop[last]) {
      result.pop()
      last = result[result.length - 1]
      i++
      continue;
    }

    if (directions[i + 1] === loop[direction]) {
      i = i + 2
      continue;
    }

    last = direction
    result.push(direction)
    i++
  }

  return result;
};

module.exports = cutToTheChase;