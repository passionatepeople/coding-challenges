module.exports = (number) => {
    number = number.split('');

    let max = Number(number.slice(0, 5).join(''));
    
    while (number.length > 5) {
        number.shift();

        let current = Number(number.slice(0, 5).join(''));
        if (current > max) {
            max = current;
        }
    }
    return max;
};