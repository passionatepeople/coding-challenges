const ExpressionType = {
  Binary: 'BinaryExpression',
  Literal: 'Literal'
};
const Operator = {
  Add: 'add',
  Subtract: 'subtract',
  Multiply: 'multiply',
  Divide: 'divide'
};

const evaluate = (expression) => {
  if (expression.type === ExpressionType.Literal) {
    return expression.value;
  }

  const l = evaluate(expression.left);
  const r = evaluate(expression.right);

  switch (expression.operator) {
    case Operator.Multiply:
      return l * r;
    case Operator.Divide:
      return l / r;
    case Operator.Add:
      return l + r;
    case Operator.Subtract:
      return l - r;
    default:
      throw `Operator "${expression.operator}" not supported`;
  }
};

module.exports = evaluate;