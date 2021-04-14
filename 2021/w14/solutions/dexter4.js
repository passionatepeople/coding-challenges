const add = (left, right ) => left + right
const subtract = (left, right ) => left - right
const multiply = (left, right ) => left * right
const divide = (left, right ) => left / right

const operators = { add, subtract, multiply, divide }

const expression = ({ value, operator, left, right}) => value ?? operators[operator](expression(left), expression(right))

module.exports = expression;