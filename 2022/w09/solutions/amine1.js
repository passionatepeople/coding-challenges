const goAround = (str) => ([...str].map((__, index) => `${str.slice(index + 1)}${str.slice(0, index + 1)}`));
module.exports = goAround;