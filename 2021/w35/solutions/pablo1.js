const sortItOut = (number) => {
  const string = '' + number;
  const count = (string.match(/0/g) || []).length;

  return count ? +(string.replace(/0/g, '') + '0'.repeat(count)) : number;
};

module.exports = sortItOut;
