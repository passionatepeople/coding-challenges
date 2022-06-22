const mkStmt = (r) => `(${r.map(([x, y]) => `board[${x}][${y}]`).join('+')} === 45)`;
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const col = nums.map(g => mkStmt(nums.map(i => [g, i])));
const row = nums.map(g => mkStmt(nums.map(i => [i, g])));
const box = nums.map(g => mkStmt(nums.map(i => [(g % 3) * 3 + i % 3, ~~(g / 3) * 3 + ~~(i / 3)])));
const checks = [...col, ...row, ...box];
const compile = new Function(`return (board) => ${checks.join('&&')};`);
module.exports = compile();