function findMeDeep (haystack, needle) {
    return haystack.some(el => el === needle || (Array.isArray(el) && findMeDeep(el, needle)));
} 
module.exports = findMeDeep;
