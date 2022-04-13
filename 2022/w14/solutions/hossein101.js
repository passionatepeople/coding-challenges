var opposites = new Object(null),
  slice = Array.prototype.slice;

opposites.NORTH = "SOUTH";
opposites.SOUTH = "NORTH";
opposites.EAST = "WEST";
opposites.WEST = "EAST";

const cutToTheChase = (directions) => {
  var length = directions.length,
    stack = new Array(length),
    stackPointer = 0,
    prevDirection = directions[0],
    index = 1;

  stack[0] = prevDirection;

  while (index < length) {
    let direction = directions[index++];

    if (direction == opposites[prevDirection])
      prevDirection = stack[--stackPointer];
    else stack[++stackPointer] = prevDirection = direction;
  }

  if (stackPointer < 0) return [];

  return slice.call(stack, 0, stackPointer + 1);
};

module.exports = cutToTheChase;