module.exports = (row) => {
    const {length} = row;
    const out = new Array(length).fill(0);
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
    return out;
};