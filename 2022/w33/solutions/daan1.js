const sevenAteNine = (numbers) => {
    const newNumber = [];
    for(let i = 0; i < numbers.length; i++){
        newNumber[i] = numbers[i];
        if (numbers[i] === '7' && numbers.substring(i+1, i+3) === '97'){
            i+=1;
        }
    }
    return newNumber.join('');
};

module.exports = sevenAteNine;