const { isEqual } = require('../../utils');

module.exports = (result, expected) => {
  return Array.isArray(result) && Array.isArray(expected) && isEqual([...result].sort(), [...expected].sort());
};
