const whatsMyName = (url) => {
  if (url.indexOf('//www.') > -1) return url.match(/\.(.*?)\./)[0].slice(1, -1);

  return url.split('//')[1].split('.')[0];
};

module.exports = whatsMyName;