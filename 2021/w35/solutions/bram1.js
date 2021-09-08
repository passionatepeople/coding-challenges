const sortItOut = (input) => {
    // Cast number to string.
    const numbers = ""+input;

    // Find the number of zeroes.
    const occurrences = (numbers.match(/0/g) || []).length;

    // Filter the zeroes and paste them at the end of the numbers.
    return +(numbers.replace(/0/g, '') + '0'.repeat(occurrences));
};

module.exports = sortItOut;
