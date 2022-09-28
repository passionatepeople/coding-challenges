const arrays = [Array(4), Array(5), Array(6), Array(7), Array(8), Array(9), Array(10), Array(11), Array(12), Array(13)];

module.exports = (row) => {
    const {length} = row;
    const out = arrays[length - 4];
    let head = 0, prev = 0;
    for (let i = 0; i < length; i++) {
        let current = row[i];
        if (current === 0) {
            continue;
        } else if (current === prev) {
            out[head - 1] *= 2;
            prev = 0;
        } else {
            out[head++] = current;
            prev = current;
        }
    }
    while (head < length) {
        out[head++] = 0;
    }
    return out;
};