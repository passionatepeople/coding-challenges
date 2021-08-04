module.exports = (o, n) => {
  const needleIsString = typeof n === "string";
  const json = JSON.stringify(o);

  if (json.indexOf("[" + n + "]") !== -1) return true;
  if (json.indexOf("[" + n + ",") !== -1) return true;
  if (json.indexOf("," + n + "]") !== -1) return true;
  if (json.indexOf("," + n + ",") !== -1) return true;
  if (needleIsString && json.indexOf(n) !== -1) return true;
  return false;
};
