const SECONDS_IN_A_MINUTE = 60;
const MINUTES_IN_A_HOUR = 60;
const HOURS_IN_A_DAY = 24;
const DAYS_IN_A_YEAR = 365;

const getPart = ({ parts, seconds, word, limit, max }) => {
  let amount = limit ? Math.floor(seconds / limit) : seconds;
  if (max) {
    amount = amount % max;
  }

  if (amount) {
    if (amount < 2) {
      parts.push(`${amount} ${word}`);
    } else  {
      parts.push(`${amount} ${word}s`);
    }
  }
}

module.exports = (seconds) => {
  const parts = [];

  getPart({parts, seconds, word: 'year', max: DAYS_IN_A_YEAR, limit: DAYS_IN_A_YEAR * HOURS_IN_A_DAY * MINUTES_IN_A_HOUR * SECONDS_IN_A_MINUTE});
  getPart({parts, seconds, word: 'day', max: DAYS_IN_A_YEAR, limit: HOURS_IN_A_DAY * MINUTES_IN_A_HOUR * SECONDS_IN_A_MINUTE});
  getPart({parts, seconds, word: 'hour', max: HOURS_IN_A_DAY, limit: MINUTES_IN_A_HOUR * SECONDS_IN_A_MINUTE});
  getPart({parts, seconds, word: 'minute', max: MINUTES_IN_A_HOUR, limit: SECONDS_IN_A_MINUTE});
  getPart({parts, seconds, word: 'second', max: SECONDS_IN_A_MINUTE});

  const { length } = parts;
  if (length === 1) {
    return parts[0];
  }
  if (length === 2) {
    return parts.join(' and ');
  }
  return [parts.slice(0, length - 1).join(', '), parts.slice(-1)].join(' and ');
};
