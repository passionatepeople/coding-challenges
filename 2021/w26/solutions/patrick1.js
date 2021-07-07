let permutateMe = (a) => {
  if (a.length > 7) return
  if (!!a.length && a.length < 2 ){
    return [a]
  }

  let b = [] 
   
  for (let i = 0; i < a.length; i++){
    let d = a[i]

    if (a.indexOf(d) != i)
    continue

    let c = a.slice(0, i) + a.slice(i + 1, a.length)

    for (let e of permutateMe(c)){
      b.push(d + e) }
  }
  return b
}

module.exports = permutateMe