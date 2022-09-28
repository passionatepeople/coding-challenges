const gen = (length) => new Function(`
const out = [${new Array(length).fill('0').join(',')}];
return row => {
    out.fill(0); let head = 0, prev = 0;
    ${(Array.from({length}, (_, i) => `
let ${`cur${i}`} = row[${i}];
if (${`cur${i}`} != 0)
if (${`cur${i}`} === prev) {out[head - 1] *= 2;prev = 0;}
else {out[head++] = ${`cur${i}`};prev = ${`cur${i}`};}
`).join('\n'))}
    return out;
};
`)();
const four = gen(4);
module.exports = (row) => {
    const {length} = row;
    if (length === 4) {
        return four(row);
    } else {
        const out = new Array(length).fill(0);
        let head = 0, prev = 0;
        for (let i = 0; i < length; i++) {
            let current = row[i];
            if (current !== 0)
                if (current === prev) {
                    out[head - 1] *= 2;
                    prev = 0;
                } else {
                    out[head++] = current;
                    prev = current;
                }
        }
        return out;
    }
};