module.exports = (intervals) => {
    const passed = new Set();
    let count = 0;
    for (let j = 0; j < intervals.length; j++) {
        const item = intervals[j];
        const start = item[0];
        const end = item[1];
        for (let i = start; i < end; i++) {
            if (!passed.has(i)) {
                count++;
                passed.add(i);
            }
        }
    }
    return count;
};