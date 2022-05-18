let H = [0, 0, 0, 0, 0];
module.exports = (s) => {
    H[0] = 0;
    let l = s.length - 4;
    let n = Array.from(s, i => Number(i));
    let i = 0;
    let inset = 0;
    let j = 0;
    do {
        j = i;
        inset = 0;
        do {
            const d = n[j];
            let h = H[inset];
            if (d < h) {
                break;
            } else if (d > h) {
                do {
                    H[inset] = n[j++];
                } while (++inset < 5);
                break;
            } else {
                j++;
            }
        } while (++inset < 5);
    } while (++i < l);
    return H[0] * 10000 + H[1] * 1000 + H[2] * 100 + H[3] * 10 + H[4];
};