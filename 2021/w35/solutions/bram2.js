const sortItOut = (input) => {
    // Cast number to string.
    const numbers = ""+input;

    // Find the number of zeroes.
    const stripped = numbers.replace(/0/g, '');

    // Multiply the stripped number by a number of zeroes.
    return Number(stripped) * (10 ** (numbers.length - stripped.length));
};

module.exports = sortItOut;
