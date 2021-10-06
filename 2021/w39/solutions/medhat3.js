const removeDupes = (string) => {
  return string
    .split("")
    .reverse()
    .join("")
    .replace(/^[^[a-zA-Z]]|([a-zA-Z])(?=\1)/gi, "")
    .split("")
    .reverse()
    .join("");
};

module.exports = removeDupes;
