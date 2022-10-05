module.exports = (code) => {
    let sum = 0;
    for (let i = 0; i < code.length; i++) {
        const value = code.charCodeAt(i);

        const num0 = (value & 15);
        const num1 = (value >> 4) & 15;

        if (num0 < 10) {
            sum += num0;
        }
        if (num1 < 10) {
            sum += num1;
        }
    }
    return sum;
};