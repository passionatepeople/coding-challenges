const H = new Array(10).fill(0);

module.exports = (I) => {
    I = I.slice();
    const IL = I.length;
    let Hi = 0;
    let sum = 0;
    for (let i = 0; i < IL; i++) {
        let [start, end] = I[i];
        for (let j = 0; j < Hi; j++) {
            const [os, oe] = H[j];
            // current inside previous
            if (start >= os && start < oe) {
                start = oe;
            }
            if (end > os && end <= oe) {
                end = os;
            }
            // previous inside current
            if (os > start && os < end) {
                // os .. end
                if (end > oe) {
                    I[i--] = [oe, end];
                }
                // clamp to other start
                end = os;
            }
        }
        // bounds ready
        if (start < end) {
            H[Hi++] = [start, end];
            sum += end - start;
        }
    }
    return sum;
};