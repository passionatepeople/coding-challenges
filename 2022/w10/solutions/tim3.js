const YEAR = 31557600000;

const map = {};

const parseDate = (str) => map[str] || (map[str] = Date.parse(str));

const getAge = (birthday, onDate) => ~~((onDate - birthday) / YEAR);

const sortFn = (a, b) => a - b;

const median = (ages, len = ages.length) => {
  ages.sort(sortFn);
  const half = ~~(len * 0.5);
  return len % 2 ? ages[half] : (ages[half - 1] + ages[half]) * 0.5;
};

const ageMedian = (birthdates, onDate) => {
  const onDataD = parseDate(onDate);
  const ages = birthdates.map((birthdate) =>
    getAge(parseDate(birthdate), onDataD)
  );
  return median(ages);
};

module.exports = ageMedian;
