const R = require('ramda');

const expression = (ast) => {
  return ast.value || (R[ast.operator](expression(ast.left), expression(ast.right)));
}

module.exports = expression;
