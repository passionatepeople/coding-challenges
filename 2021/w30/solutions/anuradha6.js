const findMeDeep = (haystack, needle) =>  haystack.some(el => el === needle || (Array.isArray(el) && findMeDeep(el, needle)));

module.exports = findMeDeep;