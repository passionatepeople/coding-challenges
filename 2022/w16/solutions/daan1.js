const greed = (arr) => {
  const result = {};
  let score = 0;
  for(let i = 0; i < 5; i++){
    result[arr[i]] = result[arr[i]] ? result[arr[i]] + 1 : 1;
  }
  for(let [diceNumber, count] of Object.entries(result)){
    diceNumber = Number(diceNumber);
    if(count > 2){
      count -= 3;
      switch(diceNumber){
        case 1:
          score += 1000;
          break;
        case 2:
          score += 200;
          break;
        case 3:
          score += 300;
          break;
        case 4:
          score += 400;
          break;
        case 5:
          score += 500;
          break;
        default:
          score += 600;
      }
    }
    if(count > 0){
      if(diceNumber === 1){
        score += 100 * count;
      } else if (diceNumber === 5) {
        score += 50 * count;
      }
    }
  }
  return score;
};

module.exports = greed;