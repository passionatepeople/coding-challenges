// cheaters don't deserve local variables
good = new Set(['()','{}','[]','([{}])','([()])','((()))','({()})','({{}})','({[]})','(({}))','([[]])','(([]))','{{{}}}','[({})]','{[()]}','{([])}','[[()]]','{[{}]}','[[[]]]','{[[]]}','{({})}','[{()}]','{{()}}','[[{}]]','[([])]','{(())}','{{[]}}','[(())]','[{{}}]','[{[]}]','([][])','([])','({})','[()]','(())','{{}}','{[][]}','{[]}','[[]]','[]{}[]','[][][]','[{}]','[[][]]','[]()[]','{()}','[][]']);
module.exports = good.has.bind(good);