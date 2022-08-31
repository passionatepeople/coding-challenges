const amIHollow = (numbers) => {
    const { length } = numbers;
    const middle = Math.floor(length / 2);

    if (length % 2 !== 0) {
        if (numbers[middle] !== 0) return false;
        if (numbers[middle - 1] !== 0) return false;
        if (numbers[middle + 1] !== 0) return false;
    
        for (let i = 2; i <= middle; i++) {
            const left = numbers[middle - i]
            const right = numbers[middle + i]
    
            if (left === 0 && right === 0) continue;
            if (left === 0 || right === 0) return false;
        }
    } else {
        for (let i = middle; i < length; i++) {
            const left = numbers[i];
            const right = numbers[length - i - 1];
  
            if (i < middle + 2) {
                if (left !== 0 || right !== 0) return false
            } else {
                if (left === 0 && right === 0) continue;
                if (left === 0 || right === 0) return false;
            }
        }
    };

    return true;
};

module.exports = amIHollow;