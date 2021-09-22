const abs = Math.abs;
const wouldEuclidBeHappy = (a, b, c) => {
    return abs(a-b) < c && c < a+b;
}

module.exports = wouldEuclidBeHappy;
