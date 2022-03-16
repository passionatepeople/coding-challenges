const YEAR = 31557600000;

const getAge = (birthday, onDate) => {
  const millies = onDate - birthday;
  let years = ~~(millies / YEAR);
  return years;
};

const sortFn = (a, b) => a - b;

const median = (ages, len = ages.length) => {
  ages.sort(sortFn);

  const half = ~~(len * .5);

  return (len % 2) ? ages[half] : (ages[half - 1] + ages[half]) * .5;
};

const ageMedian = (birthdates, onDate) => {
  const onDataD = Date.parse(onDate);
  if (birthdates.length === 1) {
    return getAge(Date.parse(birthdates[0]), onDataD);
  }

  const ages = birthdates.map((birthdate) =>
    getAge(Date.parse(birthdate), onDataD)
  );
  return median(ages);
};

module.exports = ageMedian;
