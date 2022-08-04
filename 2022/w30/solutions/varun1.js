const slice = String.prototype.slice
const indexOf = String.prototype.indexOf
const lastIndexOf = String.prototype.lastIndexOf

module.exports = (url) => {
  let response = slice.call(url, indexOf.call(url, '//') + 2)

  const sIndex = indexOf.call(response, '/');
  if (sIndex > -1) response = slice.call(response, 0, sIndex)

  response = slice.call(response, 0, lastIndexOf.call(response, '.'))

  const fIndex = indexOf.call(response, '.');
  if (fIndex > -1) response = slice.call(response, fIndex + 1)

  return response;
};