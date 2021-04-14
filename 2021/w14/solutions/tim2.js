/**
 * Map containing the operators used in ButY
 */
 const OPERATOR_MAP = {
  divide: "/",
  multiply: "*",
  subtract: "-",
  add: "+",
};

/**
 * Converts a ButY expression to a javascript expression
 *
 * @param {Object} ast - Abstract Syntax Tree containing the Buty expression
 * @param {String} result - String containing the complete javascript expression
 * @returns {String|Number} Expression as javascript string or the literal value
 */
const convertButY = (ast, result = "") => {
  if (ast.type == "Literal") {
    return ast.value;
  }

  return result + "("+convertButY(ast.left)+OPERATOR_MAP[ast.operator]+convertButY(ast.right)+")"
};

/**
 * Evaluates the javascript expression returned from the convertButY function
 *
 * @param {Object} ast - Abstract Syntax Tree containing the Buty expression
 * @returns {Number} - Result of the Javascript expression
 */
module.exports = (ast) => eval(convertButY(ast));
