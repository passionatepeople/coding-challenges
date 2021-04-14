const add = (left, right ) => left + right
const subtract = (left, right ) => left - right
const multiply = (left, right ) => left * right
const divide = (left, right ) => left / right

const operators = { add, subtract, multiply, divide }

const literal = ({ value }) => value
const binaryExpression = ({ operator, left, right }) =>
  operators[operator](expression(left), expression(right))

const expression = (e) => expressions[e.type](e)
const expressions = {
  BinaryExpression: binaryExpression,
  Literal: literal
}


module.exports = expression;