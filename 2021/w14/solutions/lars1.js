const operators = {
  add: (left, right) => left + right,
  subtract: (left, right) => left - right,
  multiply:  (left, right) => left * right,
  divide:  (left, right) => left / right,
}

const evaluate = (node) => {
  if (node.value) {
    return node.value
  }

  return operators[node.operator](evaluate(node.left), evaluate(node.right))
}

module.exports = evaluate