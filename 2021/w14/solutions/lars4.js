const lookup = (table) => {
  switch (table.operator) {
    case 'multiply':
      return (table.left.value || lookup(table.left)) * (table.right.value || lookup(table.right))
    case 'divide':
      return (table.left.value || lookup(table.left)) / (table.right.value || lookup(table.right))
    case 'add':
      return (table.left.value || lookup(table.left)) + (table.right.value || lookup(table.right))
    case 'subtract':
      return (table.left.value || lookup(table.left)) - (table.right.value || lookup(table.right))
    default:
      return table.value
  }
}

module.exports = (ast) => ast.value ? ast.value : lookup(ast)