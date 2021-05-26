module.exports = (arr1, arr2, direction) => {
  const
    arr1Len = arr1.length - 1,
    arr2Len = arr2.length - 1,
    isArr1Desc = arr1[0] > arr1[arr1Len],
    isArr2Desc = arr2[0] > arr2[arr2Len],
    arr3 = [],
    mergeDesc = (n, arr, isDesc) => {
      if (isDesc)
        for (const len = arr.length; n < len; n++) arr3.push(arr[n])
      else
        for (; n >= 0; n--) arr3.push(arr[n])
    },
    mergeAsc = (n, arr, isDesc) => {
      if (isDesc)
        for (; n >= 0; n--) arr3.push(arr[n])
      else
        for (const len = arr.length; n < len; n++) arr3.push(arr[n])
    }

  if (direction === 'desc') {
    let i = isArr1Desc ? 0 : arr1Len, j = isArr2Desc ? 0 : arr2Len

    for (; ;)
      if (arr1[i] > arr2[j]) {
        if (arr3.push(arr1[i]), isArr1Desc) {
          if (i++, i > arr1Len) {
            mergeDesc(j, arr2, isArr2Desc)
            break
          }
        } else if (i--, i < 0) {
          mergeDesc(j, arr2, isArr2Desc)
          break
        }
      } else if (arr3.push(arr2[j]), isArr2Desc) {
        if (j++, j > arr2Len) {
          mergeDesc(i, arr1, isArr1Desc)
          break
        }
      } else if (j--, j < 0) {
        mergeDesc(i, arr1, isArr1Desc)
        break
      }

  } else {
    let i = isArr1Desc ? arr1Len : 0, j = isArr2Desc ? arr2Len : 0

    for (; ;)
      if (arr1[i] > arr2[j]) {
        if (arr3.push(arr2[j]), isArr2Desc) {
          if (j--, j < 0) {
            mergeAsc(i, arr1, isArr1Desc)
            break
          }
        } else if (j++, j > arr2Len) {
          mergeAsc(i, arr1, isArr1Desc)
          break
        }
      } else if (arr3.push(arr1[i]), isArr1Desc) {
        if (i--, i < 0) {
          mergeAsc(j, arr2, isArr2Desc)
          break
        }
      } else if (i++, i > arr1Len) {
        mergeAsc(j, arr2, isArr2Desc)
        break
      }
  }

  return arr3
}
