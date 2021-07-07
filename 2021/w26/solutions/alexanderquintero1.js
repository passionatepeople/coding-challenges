const permutateMe = (string) => {
	let l = string.length;
  if (l < 2) {
  	return string;
  }

  var permutations = [];
  for (let i = 0; i < l; i++) {
    let n = string[i];

    if (string.indexOf(n) != i) {
    	continue;
    }
      
    let leftovers = `${string.slice(0, i)}${string.slice(i + 1, l)}`

    for (var x of permutateMe(leftovers))
      permutations.push(n + x)
  }
  return permutations;
}

module.exports = permutateMe;
