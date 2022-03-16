let yearMS = 31557600000;
let parse = Date.parse;

const ageMedian = (birthDates, onDate) => {
  let length = birthDates.length,
    ms = parse(onDate);

  if (length == 1) return ~~((ms - parse(birthDates[0])) / yearMS);

  if (length == 2)
    return (
      (~~((ms - parse(birthDates[0])) / yearMS) +
        ~~((ms - parse(birthDates[1])) / yearMS)) /
      2
    );

  let ages = birthDates.slice().sort(),
    midIndex = ~~(length / 2);

  if (midIndex * 2 == length) {
    return (
      (~~((ms - parse(ages[midIndex])) / yearMS) +
        ~~((ms - parse(ages[midIndex - 1])) / yearMS)) /
      2
    );
  }

  return ~~((ms - parse(ages[midIndex])) / yearMS);
};

module.exports = ageMedian;
