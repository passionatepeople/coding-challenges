const getAge = (birthDate, onDate) =>
  Math.floor((onDate - new Date(birthDate).getTime()) / 3.15576e10);

const median = (arr) => {
  if (!arr.length) return undefined;
  const s = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? (s[mid - 1] + s[mid]) / 2 : s[mid];
};

const ageMedian = (birthdates, onDate) => {
  let dates = [];
  let fakeToday = new Date(onDate);
  for (let i = 0; i < birthdates.length; i++) {
    dates.push(getAge(birthdates[i], fakeToday));
  }
  return median(dates);
};
module.exports = ageMedian;
