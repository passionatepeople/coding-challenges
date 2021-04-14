const add = (left, right) => expression(left) + expression(right);
const subtract = (left, right) => expression(left) - expression(right);
const divide = (left, right) => expression(left) / expression(right);
const multiply = (left, right) => expression(left) * expression(right);

function calculate(ast) {
  switch (ast.operator) {
    case "add":
      return add(ast.left, ast.right);
    case "subtract":
      return subtract(ast.left, ast.right);
    case "divide":
      return divide(ast.left, ast.right);
    case "multiply":
      return multiply(ast.left, ast.right);
  }
}

function expression(ast) {
  if (ast.value) {
    return ast.value;
  }

  return calculate(ast);
}

module.exports = expression;
