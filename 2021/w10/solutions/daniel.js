const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
const reverse = array => array.reverse()
const flatten = array => array.flat()
const map = fn => array => array.map(fn)

const groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

const sortBy = key => array => 
  array.sort((a, b) => a[key] < b[key] ? -1  : 1);

const rankLetters = (input) => {
  const inputAsArray = input.toLowerCase().split('')
  const occurrences = []

  for (let index = 0; index < inputAsArray.length; index++) {
    const value = inputAsArray[index];
    const indexInOccurrences = occurrences.findIndex(({character}) => character === value )
    
    if(indexInOccurrences === -1){
      occurrences.push({character: value, times: 1})
    } else {
      occurrences[indexInOccurrences].times += 1
    }
  }


  return pipe(
    groupBy('times'),
    Object.values,
    reverse,
    map(sortBy('character')),
    flatten,
    map(({character}) => character)
  )(occurrences);
};

module.exports = rankLetters;
