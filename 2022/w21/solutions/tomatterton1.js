module.exports = num => {
    let first = num[0] % 2, second = num[1] % 2, third = num[2] % 2;
    let base = (first + second + third) > 1 ? 1 : 0
    let i = 0

    for (i; i < num.length; i++) {
        if ((num[i] % 2) != base) {
            return num[i];
        }
    }
}