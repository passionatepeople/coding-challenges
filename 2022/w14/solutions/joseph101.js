const cutToTheChase = (directions) => {
    const result = [];

    const directionPairs = {
        'NORTH': 'SOUTH',
        'SOUTH': 'NORTH',
        'EAST': 'WEST',
        'WEST': 'EAST'
    }

    function backtrack(index) {
        const lastDirection = result[result.length - 1];
        const currentDirection = directions[index];

        if (!currentDirection || directionPairs[lastDirection] !== currentDirection) return index;

        result.pop()
        index++;

        return backtrack(index)
    }

    const directionsLength = directions.length;
    let i = 0;

    while (i < directionsLength) {
        const currentDirection = directions[i];
        const nextDirection = directions[i + 1];

        if (directionPairs[currentDirection] === nextDirection) {
            i = i + 2;
            i = backtrack(i);
        } else {
            result.push(currentDirection);
            i++;
        }
    }

    return result;
};

module.exports = cutToTheChase;