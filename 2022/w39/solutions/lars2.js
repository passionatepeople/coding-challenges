const base={"a":7,"b":8,"c":9,"d":10,"e":11,"f":12,"g":13,"h":14,"i":15,"j":6,"k":6,"l":6,"m":6,"n":6,"o":6,"p":7,"q":8,"r":9,"s":10,"t":11,"u":12,"v":13,"w":14,"x":15,"y":16,"z":7,"A":5,"B":6,"C":7,"D":8,"E":9,"F":10,"G":11,"H":12,"I":13,"J":4,"K":4,"L":4,"M":4,"N":4,"O":4,"P":5,"Q":6,"R":7,"S":8,"T":9,"U":10,"V":11,"W":12,"X":13,"Y":14,"Z":5,"#":5};
const lookup = new Uint8Array(123)
Object.entries(base).forEach(([key,val]) => {
    lookup[key.charCodeAt()] = val
})
const charCodeAt = String.prototype.charCodeAt;

const hashedAllTheWay = (code) => {
    let result = 0,
        length = code.length,
        i = 0
    for (; i < length; i++) {
        result = result + lookup[charCodeAt.call(code[i])]
    }

    return result
};

module.exports = hashedAllTheWay;