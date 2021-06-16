/*

       ___                       ___
      /\  \          ___        /\__\
      \:\  \        /\  \      /::|  |
       \:\  \       \:\  \    /:|:|  |
       /::\  \      /::\__\  /:/|:|__|__
      /:/\:\__\  __/:/\/__/ /:/ |::::\__\
     /:/  \/__/ /\/:/  /    \/__/~~/:/  /
    /:/  /      \::/__/           /:/  /
    \/__/        \:\__\          /:/  /
                  \/__/         /:/  /
                                \/__/

*/

const addValue = (result, value, part) => {
  if (value > 1) {
    result.push(value + " " + part + "s");
  } else if (value === 1) {
    result.push("1 " + part);
  }
};

const addPart = (result, part, amount, timer) => {
  const value = ~~(timer.seconds / amount);
  addValue(result, value, part);

  timer.seconds -= amount * value;
};

const howLong = (seconds) => {
  // your solution here
  const result = [];
  let timer = { seconds };

  addPart(result, "year", 3600 * 24 * 365, timer);
  addPart(result, "day", 3600 * 24, timer);
  addPart(result, "hour", 60 * 60, timer);
  addPart(result, "minute", 60, timer);

  const numSeconds = timer.seconds % 60;
  if (numSeconds) {
    addValue(result, numSeconds, "second");
  }

  if (result.length === 1) {
    return result[0];
  } else if (result.length === 2) {
    return result.join(" and ");
  }
  return result.slice(0, -1).join(", ") + " and " + result.pop();
};

module.exports = howLong;
