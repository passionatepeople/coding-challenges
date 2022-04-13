const cutToTheChase = (directions) => {
    var directionPairs = {
        'NORTH': 'SOUTH',
        'SOUTH': 'NORTH',
        'EAST': 'WEST',
        'WEST': 'EAST'
    },
        directionsLength = directions.length,
        i = 0,
        result = [];

    for (i; i < directionsLength; i++) {
        if(result.length > 0) {
            const currentDirection = directions[i];
            (directionPairs[currentDirection] === result[result.length - 1]) ? result.pop() : result.push(currentDirection);
        } else {
            result.push(directions[i]);
        }
    }

    return result;
};

module.exports = cutToTheChase;