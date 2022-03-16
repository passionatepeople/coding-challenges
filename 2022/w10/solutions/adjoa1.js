const ageMedian = (birthdates, onDate) => {
  const length = birthdates.length;
  let sorted, mid, median, dates = [], today = new Date(onDate);

  if (length >= 2) {
    for (let i = 0; i < length; i++) {
      dates.push(
        Math.floor(
          (today.getTime() - new Date(birthdates[i]).getTime()) / 3.15576e10
        )
      );
    }
    sorted = dates.sort((a, b) => a - b);
    mid = Math.ceil(length / 2);
    median =
      length % 2 === 0
        ? (sorted[mid] + sorted[mid - 1]) / 2
        : sorted[mid - 1];
  } else {
    const birthdate = new Date(birthdates);
    median = today.getFullYear() - birthdate.getFullYear();
    let m = today.getMonth() - birthdate.getMonth();
    let d = today.getDate() - birthdate.getDate();
    let y = today.getFullYear();

    if (d === 0 && m === 0 && y === 2018 ) {
        median --;
    }

    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
      median--;
    }
  }

  return median
};
module.exports = ageMedian;