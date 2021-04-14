const parse = (ast) => {
  if (ast.type === 'Literal') {
      return ast.value;
  } else {
      return parseBinaryExpression(ast);
  }
}

const parseBinaryExpression = (ast) => {
  switch (ast.operator) {
      case 'subtract':
          return parse(ast.left) - parse(ast.right);
      case 'add':
          return parse(ast.left) + parse(ast.right);
      case 'multiply':
          return parse(ast.left) * parse(ast.right);
      case 'divide':
          return parse(ast.left) / parse(ast.right);
  }
}

const evaluate = (ast) => {
  return parse(ast);
};

module.exports = evaluate;