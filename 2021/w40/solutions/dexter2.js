const helpJerry = (initialCards, finalCards) => {
  const counts = [...Array(122)].map(_=>0)
  let i = initialCards.length  
  while (i--) {
    counts[initialCards.charCodeAt(i)] ++
    counts[finalCards.charCodeAt(i)] --
  }
  let r=[]
  i = 122  
  while (i--) {
    if (!counts[i]) continue
    if (counts[i]==-1) r[1] = String.fromCharCode(i)
    if (counts[i]==1) r[0] = String.fromCharCode(i)
  }
  return r
};

module.exports = helpJerry;
