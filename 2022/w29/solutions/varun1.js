const isThisABook = (isbn) => {
    if (isbn.length !== 10) return false;

    let result = 0;

    result += +isbn[0]
    result += +isbn[1]*2
    result += +isbn[2]*3
    result += +isbn[3]*4
    result += +isbn[4]*5
    result += +isbn[5]*6
    result += +isbn[6]*7
    result += +isbn[7]*8
    result += +isbn[8]*9
    result += +isbn[9]*10

    return result % 11 == 0;
};

module.exports = isThisABook;