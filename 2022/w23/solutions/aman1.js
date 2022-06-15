const abs = Math.abs

module.exports =  (first, second) => {
  let a, aMul, b, bMul

  first < 1E2
    ? (a = (first / 1E1 << 0), first = first % 1E1, aMul = 10)
    : first < 1E3
      ? (a = (first / 1E2 << 0), first = first % 1E2, aMul = 1E2)
      : first < 1E4
        ? (a = (first / 1E3 << 0), first = first % 1E3, aMul = 1E3)
        : first < 1E5
          ? (a = (first / 1E4 << 0), first = first % 1E4, aMul = 1E4)
          : (a = (first / 1E5 << 0), first = first % 1E5, aMul = 1E5)

  second < 1E2 
    ? (b = (second / 1E1 << 0), second = second % 1E1, bMul = 10)
    : second < 1E3
      ? (b = (second / 1E2 << 0), second = second % 1E2, bMul = 1E2)
      : second < 1E4
        ? (b = (second / 1E3 << 0), second = second % 1E3, bMul = 1E3)
        : second < 1E5
          ? (b = (second / 1E4 << 0), second = second % 1E4, bMul = 1E4)
          : (b = (second / 1E5 << 0), second = second % 1E5, bMul = 1E5)
  
  return abs(b * aMul + first - (a * bMul + second))
}