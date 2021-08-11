const thatsEnough = (list, limit) => {
  const rlist = [...list].reverse();
  const seen = new Map();
  const result = new Array();
  let i, cr, cc;
  for (i = rlist.length; i--;) {
    cr = rlist[i];
    cc = seen.get(cr) || 0;
    if (cc < limit) {
      seen.set(cr, ++cc);
      result.push(cr);
    }
  }
  return result;
};

module.exports = thatsEnough;
