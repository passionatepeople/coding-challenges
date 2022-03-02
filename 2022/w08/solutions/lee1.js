const supermarket = (arr, tills) => {
  let customerQueue = arr.slice(tills);
  let tillsInUse = arr.slice(0, tills);

  for (let i = 0; i < customerQueue.length; i++) {
    const shortestQueueInUse = Math.min(...tillsInUse);
    const idx = tillsInUse.indexOf(shortestQueueInUse);

    if (idx !== -1) {
      tillsInUse[idx] += customerQueue[i];
    }
  }
  return Math.max(...tillsInUse);
};

module.exports = supermarket;
