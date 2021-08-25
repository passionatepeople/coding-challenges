const buildPyramid = (floors, character = '*') => {
  const result = []

  let air = ' '.repeat(floors - 1);

  for (let layer = 1; layer <= floors; layer++) {
    let floor = character.repeat((layer * 2) - 1);

    result.push(`${air}${floor}${air}`);
    
    air = air.slice(0, -1);
  }

  return result;
};

module.exports = buildPyramid;
