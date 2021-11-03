const { fromCharCode } = String;
module.exports = n => {
  const lower = n.toLowerCase();
  for (let i = 97; i <= 122; i++) {
    if (!lower.includes(fromCharCode(i))) {
      return false;
    }
  }
  return true;
}
