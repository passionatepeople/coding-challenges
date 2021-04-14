const expression = ast => {
  if (ast.value) {
    return ast.value;
  }

  switch (ast.operator) {
    case "add":
      return (expression(ast.left) + expression(ast.right));
    case "subtract":
      return (expression(ast.left) - expression(ast.right));
    case "divide":
      return (expression(ast.left) / expression(ast.right));
    case "multiply":
      return (expression(ast.left) * expression(ast.right));
  }
};

module.exports = expression;
