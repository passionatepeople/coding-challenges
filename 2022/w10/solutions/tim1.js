const YEAR = 31557600000;

const getAge = (birthday, onDate) =>
  ~~((onDate.getTime() - birthday.getTime()) / YEAR);

const sortFn = (a, b) => a - b;

const median = (ages, len = ages.length) => {
  ages.sort(sortFn);
  const half = ~~(len * 0.5);
  return len % 2 ? ages[half] : (ages[half - 1] + ages[half]) * 0.5;
};

const ageMedian = (birthdates, onDate) => {
  const onDataD = new Date(onDate);
  if (birthdates.length === 1) {
    return getAge(new Date(birthdates[0]), onDataD);
  }
  const ages = new Array(birthdates.length);
  for (let i = 0; i < birthdates.length; i++) {
    ages[i] = getAge(new Date(birthdates[i]), onDataD);
  }
  return median(ages);
};

module.exports = ageMedian;
