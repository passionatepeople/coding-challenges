const containsFive = (n) => {
  while(n!==0){
    if(n % 10 === 5){
      return true;
    }
    n = (n / 10)<<0;
  }
  return false;
}

const withoutFives = (start, end) => {
  if(end - start < 1000){
    let count = 0;
    for(let i = start; i <= end; i++){
      if(containsFive(i)){
        count++;
      }
    }
    return end - start - count + 1;
  }
  
  let total = -1, a = start, b = end;
  const factorMap = {100: 9, 1000: 81}, counted = {}, startMod = start % 1000;
  if(startMod > 490 && startMod <= 500){
    total++;
  }
  for(let factor = 10; factor <= 1000; factor*=10){
    const aMod = a%factor;
    if(aMod !== 0){
      a += factor - aMod;
      counted[a] = true;
      if(!containsFive(a-factor)){
        if(factor === 10){
          total += aMod <= 5? (10-aMod)-1:10 - aMod;
          total += containsFive(a) ? 0 : 1;
        } else {
          if(aMod === 50){
            total++;
          }
          total += ((factor-aMod)/(factor/10)) * factorMap[factor];
          total -= factor-aMod >= factor/2 ? factorMap[factor]:0;          
        }
      } else if (!containsFive(a)){
        total++;
      }
    } else if(!counted[a] && !containsFive(a)){
      total++;
      counted[a] = true;
    }

    const bMod = b%factor;
    if(bMod !== 0){
      b-= bMod;
      counted[b] = true;
      if(!containsFive(b)){
        if(factor === 10){
          total += bMod < 5? bMod+1:bMod;
        } else {
          total += bMod/(factor/10) * factorMap[factor];
          total -= bMod > factor/2 ? factorMap[factor]:0;
        }
      }
    } else if(!counted[b] && !containsFive(b)){
      counted[b] = true;
      total++;
    }
  }
  
  for(let i = 0; i < (b-a)/1000; i++){
    if(!containsFive(a + (i* 1000))){
      total += 729;
    }
  }
  return total;
}; 
module.exports = withoutFives;