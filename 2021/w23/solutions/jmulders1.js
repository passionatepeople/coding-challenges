const SECOND = 1;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const YEAR = 365 * DAY;

const UNIT_LABELS = [' year', ' day', ' hour', ' minute', ' second'];

const howLong = (seconds) =>
  [YEAR, DAY, HOUR, MINUTE, SECOND]
    .map((u, i) => {
      let units = ~~(seconds / u);
      seconds %= u;

      return units && units + UNIT_LABELS[i] + (units > 1 ? 's' : '');
    })
    .filter((u) => Boolean(u))
    .reduce((r, c, i, { length }) => r + (i < length - 1 ? ', ' : ' and ') + c);

module.exports = howLong;