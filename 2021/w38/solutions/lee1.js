const evaporate = (number) => {
  let count = 0;
  let ongoing = number;
  while (ongoing >= 10) {
    let ongoing2 = ongoing;
    ongoing = 1;
    while (ongoing2 >= 1) {
      ongoing *= ~~(ongoing2 % 10);
      ongoing2 = ongoing2 / 10;
    }

    count++;
  }

  return count;
};

module.exports = evaporate;
