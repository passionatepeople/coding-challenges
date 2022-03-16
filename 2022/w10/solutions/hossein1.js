let yearMS = 31557600000;
let parse = Date.parse;

const ageMedian = (birthDates, onDate) => {
  let length = birthDates.length,
    ages = new Array(length),
    midIndex = ~~(length / 2),
    ms = parse(onDate);

  if (length == 1) return ~~((ms - parse(birthDates[0])) / yearMS);

  if (length == 2)
    return (
      (~~((ms - parse(birthDates[0])) / yearMS) +
        ~~((ms - parse(birthDates[1])) / yearMS)) /
      2
    );

  for (let i = 0; i < length; i++) {
    ages[i] = ~~((ms - parse(birthDates[i])) / yearMS);
  }

  ages.sort((a, b) => a - b);

  if (midIndex * 2 == length) {
    return (ages[midIndex] + ages[midIndex - 1]) / 2;
  }

  return ages[midIndex];
};

module.exports = ageMedian;
