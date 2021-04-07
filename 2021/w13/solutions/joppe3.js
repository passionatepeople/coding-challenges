const a = 256;
const b = 65026;
const c = 16581376;

const int2IP = (int32) => {
    // your solution here
    if (int32 < a) {
        return '0.0.0' + int32;
    }

    if (int32 < b) {
        return '0.0.' + (int32 >> 8) + '.' + (int32 & 255);
    }

    if (int32 < c) {
        return (
            '0.' +
            (int32 >> 16) +
            '.' +
            ((int32 >> 8) & 255) +
            '.' +
            (int32 & 255)
        );
    }

    return (
        (int32 >>> 24) +
        '.' +
        ((int32 >> 16) & 255) +
        '.' +
        ((int32 >> 8) & 255) +
        '.' +
        (int32 & 255)
    );
};

module.exports = int2IP;
