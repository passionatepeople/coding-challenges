const evaluate = (ast) => {
  // your solution here

  if (ast.type === 'Literal') {
      return ast.value;
  }

  if (ast.operator === 'add') {
      return evaluate(ast.left) + evaluate(ast.right);
  }
  if (ast.operator === 'subtract') {
      return evaluate(ast.left) - evaluate(ast.right);
  }
  if (ast.operator === 'multiply') {
      return evaluate(ast.left) * evaluate(ast.right);
  }
  if (ast.operator === 'divide') {
      return evaluate(ast.left) / evaluate(ast.right);
  }
};

module.exports = evaluate;
