const SECOND = 1;
const MINUTE = 60;
const HOUR = 3600;
const DAY = 86400;
const YEAR = 31536000;

const howLong = (seconds, parts = []) => {
  if (seconds >= YEAR) {
    const number = seconds / YEAR >> 0;
    const word = number === 1 ? 'year' : 'years';
    parts.push(`${number} ${word}`);
    return howLong(seconds % YEAR, parts);
  }

  if (seconds >= DAY) {
    const number = seconds / DAY >> 0;
    const word = number === 1 ? 'day' : 'days';
    parts.push(`${number} ${word}`);
    return howLong(seconds % DAY, parts);
  }

  if (seconds >= HOUR) {
    const number = seconds / HOUR >> 0;
    const word = number === 1 ? 'hour' : 'hours';
    parts.push(`${number} ${word}`);
    return howLong(seconds % HOUR, parts);
  }

  if (seconds >= MINUTE) {
    const number = seconds / MINUTE >> 0;
    const word = number === 1 ? 'minute' : 'minutes';
    parts.push(`${number} ${word}`);
    return howLong(seconds % MINUTE, parts);
  }

  if (seconds >= SECOND) {
    const number = seconds / SECOND >> 0;
    const word = number === 1 ? 'second' : 'seconds';
    parts.push(`${number} ${word}`);
    return howLong(seconds % SECOND, parts);
  }

  if (parts.length === 1) {
    return parts[0];
  }

  let result = '';
  const { length } = parts;
  for(let i = 0; i < length - 2; i++) {
    result += parts[i] + ', '
  }

  return result + parts[length - 2] + ' and ' + parts[length - 1];
};

module.exports = howLong;