const toUpperCase = Array.from({ length: 255 }, (_, i) =>
    String.fromCharCode(i).toUpperCase()
);
const toLowerCase = Array.from({ length: 255 }, (_, i) =>
    String.fromCharCode(i).toLowerCase()
);
const minus = '-'.charCodeAt();
const underscore = '_'.charCodeAt();
const A = 'A'.charCodeAt();
const Z = 'Z'.charCodeAt();
const singleQuote = "'".charCodeAt();

const fixCase = (input) => {
    // your code here
    let output = '';
    let shouldBeUpperCase = false;
    let couldBeUpperCase = false;
    const max = input.length;

    for (let i = 0; i < max; i++) {
        const char = input[i];
        const c = char.charCodeAt();

        if (c === underscore || c === minus) {
            shouldBeUpperCase = true;
            continue;
        }

        if (shouldBeUpperCase) {
            output += toUpperCase[c];
            shouldBeUpperCase = false;
            couldBeUpperCase = false;
            continue;
        }

        if (c === singleQuote) {
            output += char;
            continue;
        }

        if (c >= A && c <= Z) {
            if (couldBeUpperCase) {
                output += char;
                couldBeUpperCase = false;
            } else {
                output += toLowerCase[c];
            }
        } else {
            couldBeUpperCase = true;
            output += char;
        }
    }

    return output;
};

module.exports = fixCase;
