var slice = Array.prototype.slice;

const cutToTheChase = (directions) => {
  var length = directions.length,
    stack = new Array(length),
    stackPointer = 0,
    prevDirection = directions[0],
    index = 1;

  stack[0] = prevDirection;

  while (index < length) {
    let direction = directions[index++];

    if (
      prevDirection &&
      ((direction == "WEST" && prevDirection == "EAST") ||
        (direction == "EAST" && prevDirection == "WEST") ||
        (direction == "NORTH" && prevDirection == "SOUTH") ||
        (direction == "SOUTH" && prevDirection == "NORTH"))
    )
      prevDirection = stack[--stackPointer];
    else stack[++stackPointer] = prevDirection = direction;
  }

  if (stackPointer < 0) return [];

  return slice.call(stack, 0, stackPointer + 1);
};

module.exports = cutToTheChase;