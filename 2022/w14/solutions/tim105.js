const table = new Map([["SOUTH","NORTH"],["NORTH","SOUTH"],["WEST","EAST"],["EAST","WEST"]]);
Object.freeze(table)

const cutToTheChase = directions => {
    return directions.reduce((e,p)=> {
        const dir = e[e.length-1];
        dir !== table.get(p) ? e.push(p) : e.pop();
        return e;
    }, [])
}

module.exports = cutToTheChase;