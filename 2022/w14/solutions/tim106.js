const table = new Map([["SOUTH","NORTH"],["NORTH","SOUTH"],["WEST","EAST"],["EAST","WEST"]]);
Object.freeze(table)
const get = Map.prototype.get;

const cutToTheChase = directions => {
    return directions.reduce((e,p)=> {
        const dir = e[e.length-1];
        dir == get.call(table,p) ? e.pop() : e.push(p);
        return e;
    }, [])
}

module.exports = cutToTheChase;