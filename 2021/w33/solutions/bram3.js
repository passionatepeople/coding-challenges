const buildPyramid = (floors, character = '*') => {
    const result = []

    let air = ' '.repeat(floors - 1);
    let floor = character;

    for (let layer = 1; layer <= floors; layer++) {

        result.push(`${air}${floor}${air}`);

        air = air.slice(0, -1);
        floor = `${character}${character}${floor}`
    }

    return result;
};

module.exports = buildPyramid;
