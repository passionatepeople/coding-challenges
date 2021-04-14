const inner = (ast) => {
  const operator = ast.operator;
  const left = ast.left.value ?? inner(ast.left);
  const right = ast.right.value ?? inner(ast.right);

  if (operator === 'add') {
      return left + right;
  }
  if (operator == 'subtract') {
      return left - right;
  }
  if (operator == 'divide') {
      return left / right;
  }

  // multiply
  return left * right;
};

const evaluate = (ast) => {
  // your solution here

  if (ast.type === 'Literal') {
      return ast.value;
  }

  return inner(ast);
};

module.exports = evaluate;