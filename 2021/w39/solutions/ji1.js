const removeDupes = (s) => {
  const a = s.split("");
  const list = [];
  for (let i = 0; i < a.length; i++) {
    if (i === 0) {
      if (a[i] !== "") {
        list.push(a[i]);
      }
    } else {
      if (
        a[i].toUpperCase() !== a[i - 1].toUpperCase() ||
        !/[a-zA-Z]/.test(a[i])
      ) {
        list.push(a[i]);
      }
    }
  }

  return list.join("");
};

module.exports = removeDupes;