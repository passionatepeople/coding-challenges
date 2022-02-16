const {indexOf, toLowerCase} = String.prototype;
const join = Array.prototype.join;

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphabetCAPS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const whatsMissing = (arr) => {
  const lowerCase = toLowerCase.call(join.call(arr, ""));
  for(let i = 0; i < arr.length; i ++){
      const current = indexOf.call(alphabet, lowerCase[i]) +1;
      if(current !== indexOf.call(alphabet, lowerCase[i+1])){
          return arr[0] === toLowerCase.call(arr[0]) ? alphabet[current] : alphabetCAPS[current];
      }
  }
};

module.exports = whatsMissing;