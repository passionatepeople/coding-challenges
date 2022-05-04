const subtract = (left, right) => {
    const ZERO = '0'.charCodeAt(0);

    const WRAP_BOUND = 10;
    const wrap = value => value < 0 ? (value % WRAP_BOUND) + WRAP_BOUND : (value % WRAP_BOUND);

    const negate = buffer => {
        for (let i = 0; i < buffer.length; i++) {
            buffer[i] = (WRAP_BOUND - 1) - buffer[i];
        }
        buffer[buffer.length - 1]++;
        buffer.negative = !buffer.negative;
    };

    const toBuffer = value => {
        const negative = value[0] === '-';
        if (negative) {
            value = value.slice(1);
        }

        const buffer = Buffer.from("0" + value);

        for (let i = 0; i < buffer.length; i++) {
            buffer[i] = wrap(buffer[i] - ZERO);
        }

        if (negative) {
            negate(buffer);
        }

        return buffer;
    };

    let sum = toBuffer(left);
    let car = toBuffer(right);
    negate(car);

    while (sum.length < car.length) {
        sum = Buffer.concat([sum.subarray(0, 1), sum]);
    }
    while (car.length < sum.length) {
        car = Buffer.concat([car.subarray(0, 1), car]);
    }

    for (let i = 0; i < sum.length;) {
        const inc = car[i];
        const value = sum[i];
        const next = value + inc;
        sum.writeUint8((next + WRAP_BOUND) % WRAP_BOUND, i);
        car.writeUint8(0, i);

        if (next >= WRAP_BOUND) {
            if (i > 0) {
                car[--i]++;
            } else {
                i++;
            }
        } else {
            i++;
        }
    }

    const negativeAnswer = sum[0] === 9
    if (negativeAnswer) {
        negate(sum);
        for (let i = sum.length - 1; i >= 0; i--) {
            let last = sum[i];
            if (last >= 10) {
                sum[i] = last % 10;
                if (i > 0) {
                    sum[i-1]++;
                }
            } else {
                break;
            }
        }
    }

    // Back to digits
    let numberStart = 0;
    for (numberStart = 0; numberStart < sum.length - 1; numberStart++) {
        if (sum[numberStart] !== 0) {
            break;
        }
    }

    for (let i = numberStart; i < sum.length; i++) {
        sum[i] = sum[i] + '0'.charCodeAt(0);
    }

    if (negativeAnswer) {
        if (numberStart > 0) {
            numberStart--;
            sum[numberStart] = '-'.charCodeAt(0);
            return sum.toString('utf8', numberStart);
        } else {
            return '-' + sum.toString('utf8', numberStart);
        }
    } else {
        return sum.toString('utf8', numberStart);
    }
};

module.exports = subtract;