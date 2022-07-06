const doIReadBothWays = (number) => {
    let n = number, reverse = [], i;
    for(i = 0; n !== 0; i++){
        reverse[i] = n % 10;
        n = (n /10) << 0;
    }
    const length = reverse.length -1;
    for(i = 0; i < reverse.length / 2; i++){
        if(reverse[i] !== reverse[length-i]){
            return false;
        }
    }
    return true;
};

module.exports = doIReadBothWays;