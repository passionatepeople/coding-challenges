module.exports = (numbers) => {
  if (!numbers.includes('797')) return numbers;

  let res = numbers[0];
  for (let i = 1; i < numbers.length - 1; i++) {
    const n = numbers[i];

    if (n === '9' && numbers[i - 1] === '7' && numbers[i + 1] === '7') {
      continue;
    }

    res += n;
  }

  return (res += numbers[numbers.length - 1]);
};