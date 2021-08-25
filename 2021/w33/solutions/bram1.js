const buildPyramid = (floors, character = '*') => {
    const result = []

    for (let layer = 1; layer <= floors; layer++) {

        let air = ' '.repeat(floors - layer);

        let floor = character.repeat((layer * 2) - 1);

        result.push(`${air}${floor}${air}`);
    }

    return result;
};

module.exports = buildPyramid;
