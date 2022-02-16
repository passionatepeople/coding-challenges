const { charCodeAt } = String.prototype;
const { fromCharCode } = String;

const whatsMissing = (arr) => {
  const smallest = charCodeAt.call(arr[0]);
  const largest = charCodeAt.call(arr[arr.length - 1]);

  const n = largest - smallest + 1;
  const target = (n * (smallest + largest)) / 2;
  let current = smallest;
  for (let i = 1; i < arr.length; i++) {
    current += charCodeAt.call(arr[i]);
  }

  return fromCharCode(target - current);
};

module.exports = whatsMissing;
