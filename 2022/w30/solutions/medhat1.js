const whatsMyName = (url) => {
  const parts = url.split('/')[2].split('.');

  return parts.length === 3 ? parts[1] : parts[0];
};

module.exports = whatsMyName;