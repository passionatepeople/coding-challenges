const evaluate = (ast) => {
  // your solution here

  if (ast.type === 'Literal') {
      return ast.value;
  }

  const left = ast.left.value ?? evaluate(ast.left);
  const right = ast.right.value ?? evaluate(ast.right);

  if (ast.operator === 'add') {
      return left + right;
  }
  if (ast.operator === 'subtract') {
      return left - right;
  }
  if (ast.operator === 'multiply') {
      return left * right;
  }
  if (ast.operator === 'divide') {
      return left / right;
  }
};

module.exports = evaluate;
