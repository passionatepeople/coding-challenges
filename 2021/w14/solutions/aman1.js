let evaluate = ast =>
  ast.value ?? (() => {
    let r = evaluate(ast.right), l = evaluate(ast.left), o = ast.operator;
    if (o === 'add')
      return l + r;
    else if (o === 'subtract')
      return l - r;
    else if (o === 'multiply')
      return l * r;
    return l / r;
})();
module.exports = evaluate;
