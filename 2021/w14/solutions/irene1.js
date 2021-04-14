const TYPE = Object.freeze({
  BINARY: 'BinaryExpression',
  LITERAL: 'Literal',
});

const OPERATOR = Object.freeze({
  ADD: 'add',
  SUBTRACT: 'subtract',
  MULTIPLY: 'multiply',
  DIVIDE: 'divide',
});

const evaluate = (ast) => {
  const type = ast.type;
  if (type === TYPE.LITERAL) {
    return ast.value;
  }

  const operator = ast.operator;
  const left = evaluate(ast.left);
  const right = evaluate(ast.right);

  if (operator === OPERATOR.ADD) {
    return left + right;
  }

  if (operator === OPERATOR.SUBTRACT) {
    return left - right;
  }

  if (operator === OPERATOR.MULTIPLY) {
    return left * right;
  }

  if (operator === OPERATOR.DIVIDE) {
    return left / right;
  }

  return undefined;
};

module.exports = evaluate;