const evaluate = (node) => {
  if (node.value) {
    return node.value
  }

  if (node.operator === 'add') {
    return evaluate(node.left) + evaluate(node.right)
  }
  if (node.operator === 'subtract') {
    return evaluate(node.left) - evaluate(node.right)
  }
  if (node.operator === 'multiply') {
    return evaluate(node.left) * evaluate(node.right)
  }

  return evaluate(node.left) / evaluate(node.right)
}

module.exports = evaluate