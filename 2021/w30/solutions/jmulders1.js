const { isArray, prototype: { pop, push } } = Array;

const findMeDeep = (haystack, needle) => {
  const stack = [...haystack];
  
  let cur;

  while(stack.length) {
    cur = pop.call(stack);

    if(cur === needle) {
      return true
    } 

    if(isArray(cur)) {
      push.call(stack, ...cur);
    }
  }

  return false;
}

module.exports = findMeDeep;

