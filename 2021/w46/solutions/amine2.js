const wheatFromTheChaff = (data) => Math.max(...data.split(/([0-9]+)/).filter(a => Number.isFinite(Number(a))));
module.exports = wheatFromTheChaff;