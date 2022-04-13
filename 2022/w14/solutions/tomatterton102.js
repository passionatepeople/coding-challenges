const pop = Array.prototype.pop;
const push = Array.prototype.push;

let opposites = {NORTH: 'SOUTH', EAST: 'WEST', SOUTH: 'NORTH', WEST: 'EAST'};

module.exports = (dir) => {
    let result = [];

    for (let i = 0; i < dir.length; i++) {
        let resLength = result.length
        if (resLength == 0) {
            push.call(result, dir[i]);
        } else {
            if (result[resLength - 1] !== opposites[dir[i]]) {
                push.call(result, dir[i]);
            } else {
                pop.call(result);
            }
        }
    }
    return result;
};