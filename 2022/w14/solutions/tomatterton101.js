const cutToTheChase = (directions) => {
    let arr = [];
    for (let i = 0; i < directions.length; i++) {
        if (
            (arr[arr.length - 1] === 'NORTH' && directions[i] === 'SOUTH') ||
            (arr[arr.length - 1] === 'SOUTH' && directions[i] === 'NORTH') ||
            (arr[arr.length - 1] === 'EAST' && directions[i] === 'WEST') ||
            (arr[arr.length - 1] === 'WEST' && directions[i] === 'EAST')
        ) {
            arr.pop();
        } else {
            arr.push(directions[i]);
        }
    }

    return arr;
};

module.exports = cutToTheChase;