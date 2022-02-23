const {slice, sort} = Array.prototype;

module.exports = a => {
  const sorted = sort.call(slice.call(a), (a,b)=> a-b);
  return [sorted[0], sorted[a.length -1]];
};
