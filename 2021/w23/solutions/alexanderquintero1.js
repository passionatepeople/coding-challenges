const howLong = (seconds) => {
  let units = ['year', 'day', 'hour', 'minute', 'second'];
  const yearInSeconds = 31536000;
  const dayInSeconds = 86400;
  const hourInSeconds = 3600;
  const minuteInSeconds = 60;

  let result = units.reduce((acc, curVal, index) => {
    const formatMe = (unitInSeconds, unit) => {
      const amount = Math.floor(acc.secondsLeft / unitInSeconds);
      acc.results.push(`${amount} ${unit}${amount > 1 ? 's' : ''}`);
      acc.secondsLeft -= unitInSeconds * amount;
    }

    switch (curVal) {
      case 'year':
        if (acc.secondsLeft >= yearInSeconds) {
          formatMe(yearInSeconds, 'year');
        }
        break;
      case 'day':
        if (acc.secondsLeft >= dayInSeconds) {
          formatMe(dayInSeconds, 'day');
        }
        break;
      case 'hour':
        if (acc.secondsLeft >= hourInSeconds) {
          formatMe(hourInSeconds, 'hour');
        }
        break;
      case 'minute':
        if (acc.secondsLeft >= minuteInSeconds) {
          formatMe(minuteInSeconds, 'minute');
        }
        break;
      case 'second':
        if (acc.secondsLeft >= 1) {
          formatMe(1, 'second');
        }
        break;
    }
    return acc;
  }, {
    results: [],
    secondsLeft: seconds
  }).results;
  
  return result.length > 1 ? result.slice(0, -1).join(', ') + ' and ' + result.slice(-1) : result.toString();
}

module.exports = howLong;
