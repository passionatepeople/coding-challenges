module.exports = (seconds) => {
  const parts = [];

  const years = Math.floor(seconds / 31536000) % 365;
  if (years) {
    parts.push(years + ' year' + ((years >= 2) ? 's' : ''));
  }

  const days = Math.floor(seconds / 86400) % 365;
  if (days) {
    parts.push(days + ' day' + ((days >= 2) ? 's' : ''));
  }

  const hours = Math.floor(seconds / 3600) % 24;
  if (hours) {
    parts.push(hours + ' hour' + ((hours >= 2) ? 's' : ''));
  }

  const minutes = Math.floor(seconds / 60) % 60;
  if (minutes) {
    parts.push(minutes + ' minute' + ((minutes >= 2) ? 's' : ''));
  }

  const totalSeconds = seconds % 60;
  if (totalSeconds) {
    parts.push(totalSeconds + ' second' + ((totalSeconds >= 2) ? 's' : ''));
  }

  return parts.reduce((acc, part, i) => {
    if (!acc) return part;
    if (i === parts.length -1) return acc + ' and ' + part;
    return acc + ', ' + part;
  }, '');
};
