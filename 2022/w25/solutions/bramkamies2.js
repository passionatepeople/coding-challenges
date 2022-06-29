function makeLoop(ns, inner) {
    const input = `next${ns-1}`;
    const i = `i${ns}`;
    const next = `next${ns}`;
    inner = inner ?? `throw new Error('no inner');`;
    return `
for (let ${i} = 0; ${i} < ${input}.length; ${i}++) {
    const ${next} = ${input}[${i}];
    if (typeof ${next} === 'number') {
        counts[${next}]++;
        total++;
    } else {
        ${inner}
    }
}`;
}
const compile = new Function(`
const counts = new Array(100).fill(0);
return (next0) => {
    counts.fill(0);
    let total = 0;
    ${makeLoop(1, makeLoop(2, makeLoop(3, makeLoop(4, makeLoop(5)))))}
    const result = new Array(total);
    let index = 0;
    for (let i = 0; i < 100; i++) {
        const count = counts[i];
        for (let j = 0; j < count; j++) {
            result[index++] = i;
        }
    }
    return result;
};`);
module.exports = compile();