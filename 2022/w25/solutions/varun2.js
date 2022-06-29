const flat = (arr) => {
  let flatArr = []
  for (let i = 0; i < arr.length; i++) {
    const v = arr[i]
    if (typeof v === "number") {
      flatArr.push(v)
    } else {
      flatArr = flatArr.concat(flat(arr[i]))
    }
  }

  return flatArr
}

module.exports = (arr) => Array.from(Int16Array.from(flat(arr)).sort());