const swappedDiff = (first, second) => {
  let firstDecimal = 1e5,
    secondDecimal = 1e5,
    result = first - second;

  while (first < firstDecimal) firstDecimal /= 10;
  while (second < secondDecimal) secondDecimal /= 10;

  result += (firstDecimal + secondDecimal) * (~~(second / secondDecimal) - ~~(first / firstDecimal));
  return result > 0 ? result : 0 - result;
};

module.exports = swappedDiff;