const evaluate = ({type, operator, left, right, value}) => {
  if (type === 'Literal') {
    return value;
  }
  if (operator === 'add') {
    return evaluate(left) + evaluate(right);
  }
  if (operator === 'multiply') {
    return evaluate(left) * evaluate(right);
  }
  if (operator === 'subtract') {
    return evaluate(left) - evaluate(right);
  }
  if (operator === 'divide') {
    return evaluate(left) / evaluate(right);
  }
};

module.exports = evaluate;
