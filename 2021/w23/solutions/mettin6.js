module.exports = (seconds) => {
  let response = '';
  const years = Math.floor(seconds / 31536000) % 365;
  const days = Math.floor(seconds / 86400) % 365;
  const hours = Math.floor(seconds / 3600) % 24;
  const minutes = Math.floor(seconds / 60) % 60;
  const totalSeconds = seconds % 60;

  if (years) {
    response = years + ' year' + ((years >= 2) ? 's' : '');
  }

  if (days) {
    response = response + (response ? hours || minutes || totalSeconds ? ', '
      : ' and ' : '') + days + ' day' + ((days >= 2) ? 's' : '');
  }
  if (hours) {
    response = response + (response ? minutes || totalSeconds ? ', ' : ' and ' :
      '') + hours + ' hour' + ((hours >= 2) ? 's' : '');
  }
  if (minutes) {
    response = response + (response ? totalSeconds ? ', ' : ' and ' : '') +
      minutes + ' minute' + ((minutes >= 2) ? 's' : '');
  }
  if (totalSeconds) {
    response = response + (response ? ' and ' : '') + totalSeconds + ' second' +
      ((totalSeconds >= 2) ? 's' : '');
  }
  return response;
};
