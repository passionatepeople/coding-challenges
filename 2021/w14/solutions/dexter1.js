const Literal = ({ value }) => value
const BinaryExpression = ({ operator, left, right }) => ({
  add: (left, right ) => left + right,
  subtract: (left, right ) => left - right,
  multiply: (left, right ) => left * right,
  divide: (left, right ) => left / right,
}[operator](Expression(left), Expression(right)))
const Expression = ({ type, ...rest }) => ({
  BinaryExpression, Literal
}[type](rest))

module.exports = Expression;