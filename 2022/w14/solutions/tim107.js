const table = new Map([["SOUTH","NORTH"],["NORTH","SOUTH"],["WEST","EAST"],["EAST","WEST"]]);
Object.freeze(table);

const { prototype: { reduce, pop, push } } = Array;
const get = Map.prototype.get;

const cutToTheChase = directions => {
    return reduce.call(directions,(e,p)=> {
        const dir = e[e.length-1];
        dir == get.call(table, p) ? pop.call(e) : push.call(e,p);
        return e;
    }, [])
}

module.exports = cutToTheChase;