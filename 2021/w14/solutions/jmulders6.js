const evaluate = (expression) => {
  if (expression.value) {
    return expression.value;
  }

  const l = evaluate(expression.left);
  const r = evaluate(expression.right);

  switch (expression.operator) {
    case 'add':
      return l + r;
    case 'divide':
      return l / r;
    case 'subtract':
      return l - r;
    default:
      return l * r;
  }
};

module.exports = evaluate;