const getAge = (start, end) => {
  const dob = new Date(start);
  const diff = end - dob.getTime();
  return ~~(diff / 31557600000);
};

module.exports = (birth_dates, onDate) => {
  const len = birth_dates.length;
  const endDate = new Date(onDate).getTime();

  if (len <= 2) {
    return len === 2
      ? (getAge(birth_dates[0], endDate) + getAge(birth_dates[1], endDate)) / 2
      : getAge(birth_dates[0], endDate);
  } else {
    const sorted = birth_dates.slice().sort();

    return len % 2 === 0
      ? (getAge(sorted[len / 2 - 1], endDate) +
          getAge(sorted[len / 2], endDate)) /
          2
      : getAge(sorted[(len + 1) / 2 - 1], endDate);
  }
};
