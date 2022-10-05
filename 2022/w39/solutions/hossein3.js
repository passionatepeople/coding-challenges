const hashMap = new Array();
const charCodeAt = String.prototype.charCodeAt;
[[35, 5],[101, 11],[105, 15],[99, 9],[97, 7],[120, 15],[100, 10],[107, 6],[115, 10],[122, 7],[102, 12],[110, 6],[121, 16],[119, 14],[112, 7],[103, 13],[106, 6],[117, 12],[111, 6],[118, 13],[108, 6],[98, 8],[114, 9],[104, 14],[113, 8],[109, 6],[116, 11],[88, 13],[71, 11],[85, 10],[65, 5],[90, 5],[80, 5],[68, 8],[75, 4],[74, 4],[69, 9],[86, 11],[67, 7],[73, 13],[76, 4],[66, 6],[84, 9],[81, 6],[72, 12],[82, 7],[78, 4],[89, 14],[79, 4],[83, 8],[70, 10],[77, 4],[87, 12],
].forEach(([c, d]) => (hashMap[c] = d));

const hashedAllTheWay = (code) => {
  let length = code.length,
    sum = 0;
  while (length--) {
    sum += hashMap[charCodeAt.call(code, length)];
  }
  return sum;
};

module.exports = hashedAllTheWay;