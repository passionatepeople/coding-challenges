const get = Map.prototype.get
const del = Map.prototype.delete
const set = Map.prototype.set
const push = Array.prototype.push
module.exports =(initialCards, finalCards)=>{
  const final = new Map()
  for (let i = 0; i < finalCards.length; i++){
    set.call(final, finalCards[i], (get.call(final, finalCards[i]) || 0) + 1)
  }
  const res = [];
  for (let i = 0; i < initialCards.length; i++){
    let v = get.call(final, initialCards[i])
    if (v == 1) {
      del.call(final, initialCards[i])
    } else if (v) {
      set.call(final, initialCards[i], --v)
    } else {
      push.call(res, initialCards[i])
    }
  }
  if (!res.length) return res
  push.call(res, [...final][0][0])
  return res
}