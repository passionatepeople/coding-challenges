module.exports = (board) => {
  let row, col, v, i = 0, j = 0

  for (; i < 9; i++) {
    row = new Array(10), col = new Array(10)

    for (j = 0; j < 9; j++) {
      v = board[i][j]
      if (v < 1) return false

      if (row[v]) return false
      else row[v] = true

      v = board[j][i]
      if (v < 1) return false
      
      if (col[v]) return false
      else col[v] = true
    }
  } 

  return true
}