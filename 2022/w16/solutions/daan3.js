const scoreMap = [0,1000,200,300,400,500,600];
const greed = (arr) => {
  const result = [0,0,0,0,0,0,0];
  let score = 0;
  for(let i = 0; i < 5; i++){
    result[arr[i]]++;
    if(result[arr[i]] > 2){
      result[arr[i]] -= 3;
      score += scoreMap[arr[i]];
    }
  }
  return score + 100 * result[1] + 50 * result[5];
};

module.exports = greed;