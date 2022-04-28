const greed = (arr) => {
  const result = [0,0,0,0,0,0,0];
  let score = 0;
  result[arr[0]]=1;
  result[arr[1]]++;
  for(let i = 2;i < 5; i++){
    result[arr[i]]++;
    if(result[arr[i]] > 2){
      result[arr[i]] -= 3;
      score += arr[i] === 1? 1000 : arr[i] * 100;
    }
  }
  return score + 100 * result[1] + 50 * result[5];
};

module.exports = greed;