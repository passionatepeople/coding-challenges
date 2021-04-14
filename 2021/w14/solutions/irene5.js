const getL = ast => evaluate(ast.left);
const getR = ast => evaluate(ast.right);

const evaluate = (ast) => {
  const { operator } = ast;
  if (operator === undefined) return ast.value;

  const l = getL(ast);
  const r = getR(ast);

  switch(operator) {
    case 'add': return l + r;
    case 'subtract': return l - r;
    case 'multiply': return l * r;
    default: return l / r;
  }
};

module.exports = evaluate;