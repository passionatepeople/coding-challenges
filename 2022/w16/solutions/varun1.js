const greed = (arr) => {
  const count = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  };

  let i = 0;
  let len = arr.length;

  for (; i < len; i = i + 1) {
    const val = arr[i];
    count[val] = count[val] + 1
  }
  let total = 0;

  total = total + (~~(count[1] / 3) * 1000)
  total = total + (~~(count[2] / 3) * 200)
  total = total + (~~(count[3] / 3) * 300)
  total = total + (~~(count[4] / 3) * 400)
  total = total + (~~(count[5] / 3) * 500)
  total = total + (~~(count[6] / 3) * 600)
  total = total + ((count[5] % 3) * 50)
  total = total + ((count[1] % 3) * 100)

  return total;
};

module.exports = greed;