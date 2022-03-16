const getAge = (birthday, now) => {
  const dob = new Date(birthday);
  const diff = now - dob.getTime();
  return ~~(diff / 31557600000);
};

module.exports = (birthdates, onDate) => {
  const len = birthdates.length;
  const isEven = len % 2 === 0;
  const endDate = new Date(onDate);

  const sorted = [...birthdates].sort();

  return isEven
    ? (getAge(sorted[len / 2 - 1], endDate) +
        getAge(sorted[len / 2], endDate)) /
        2
    : getAge(sorted[(len + 1) / 2 - 1], endDate);
};
