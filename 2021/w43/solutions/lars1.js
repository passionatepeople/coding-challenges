const charCodeAt = String.prototype.charCodeAt

const hasItAll = (sentence) => {
    let bitSet = 0;
    for(const char of sentence) {
      // position = char.charCodeAt(0) - 'a'.charCodeAt(0);
      let code = charCodeAt.call(char, 0)

      if(code >= 65 && code <= 90) {
        // +32 to go from upper > lower
        // -98 to calculate base
        // -65 total
        bitSet = bitSet | (1 << code - 65);
      } else if (code >= 97 && code <= 122) {
        bitSet = bitSet | (1 << code - 97);
      }
    }

    // End of bitSet 26 letters - 0b11111111111111111111111111 - 2 ** 26 - 1 = 67108863
    return bitSet === 67108863;
};

module.exports = hasItAll;