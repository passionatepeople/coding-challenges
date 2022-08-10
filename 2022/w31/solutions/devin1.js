module.exports = (s) => {
  let r = false;
  const n = s.replace(/\d+$/, (m) => {
    r = true;
    const nM = `${+m + 1}`;
    const mL = m.length;
    return nM.length === mL ? nM : nM.padStart(mL, '0');
  });
  return r ? n : `${s}1`;
};