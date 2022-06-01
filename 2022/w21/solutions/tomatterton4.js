module.exports = num => {
    let i = 0, base = (num[0] % 2 + num[1] % 2 + num[2] % 2) > 1
    for (i; i < num.length; i++) {
        if (base + num[i] & 1) {
            return num[i];
        }
    }
}