const inner = (ast) => {
  const operator = ast.operator;
  const left = ast.left;
  const right = ast.right;
  const a = left.value ?? inner(left);
  const b = right.value ?? inner(right);

  if (operator == 'add') {
      return a + b;
  }
  if (operator == 'subtract') {
      return a - b;
  }
  if (operator == 'divide') {
      return a / b;
  }

  // multiply
  return a * b;
};

const evaluate = (ast) => {
  return ast.value ?? inner(ast);
};

module.exports = evaluate;
