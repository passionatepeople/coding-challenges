const evaluate = (ast) => {
  if (ast.type === 'Literal') {
    return ast.value;
  }

  const { operator, left, right } = ast;
  const l = evaluate(left);
  const r = evaluate(right);
 
  return operator === 'add' ? l + r :
    operator === 'subtract' ? l - r :
    operator === 'multiply' ? l * r :
    l / r;
};

module.exports = evaluate;