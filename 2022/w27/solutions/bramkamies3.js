const H = Array.from({length: 10}, () => [0, 0]);
const I = Array.from({length: 10}, () => [0, 0]);

module.exports = (X) => {
    const IL = X.length;
    for (let i = 0; i < IL; i++) {
        const Xi = X[i], Ii = I[i];
        Ii[0] = Xi[0];
        Ii[1] = Xi[1];
    }
    let Hi = 0;
    let sum = 0;
    for (let i = 0; i < IL; i++) {
        let Ii = I[i], start = Ii[0], end = Ii[1];
        for (let j = 0; j < Hi; j++) {
            const Hj = H[j], prevStart = Hj[0], prevEnd = Hj[1];
            if (start >= prevStart && start < prevEnd) {
                start = prevEnd;
            }
            if (end > prevStart && end <= prevEnd) {
                end = prevStart;
            }
            if (prevStart > start && prevStart < end) {
                if (end > prevEnd) {
                    const repeat = I[i--];
                    repeat[0] = prevEnd;
                    repeat[1] = end;
                }
                end = prevStart;
            }
        }
        if (start < end) {
            const done = H[Hi++];
            done[0] = start;
            done[1] = end;
            sum += end - start;
        }
    }
    return sum;
};