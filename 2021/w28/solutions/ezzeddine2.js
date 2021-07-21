const largestCommonDivisor = (num1, num2) => {

    if( num1 < 0 ) num1 = -num1;
    if( num2 < 0 ) num2 = -num2;

    while( num2 != 0 ){
        num1 %= num2;
        if( num1 == 0 ) return num2;
        num2 %= num1;
    }
    
    return num1; 
};

module.exports = largestCommonDivisor;
