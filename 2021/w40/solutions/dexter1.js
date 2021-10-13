const initial = Object.fromEntries([..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"].map(c => ([c,0])))

const helpJerry = (initialCards, finalCards) => {
  const counts = Object.create(initial)
  let removed, added

  for (let c in initialCards) {
    counts[initialCards[c]] ++
    counts[finalCards[c]] --
  }
  for ([c, v] of Object.entries(counts)) {
    if (v === 0) continue
    if (v === -1) removed = c
    if (v === 1) added = c
  }

  return removed ? [added, removed] : []
};

module.exports = helpJerry;
