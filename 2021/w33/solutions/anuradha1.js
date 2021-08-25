const buildPyramid = (floors, character='*') => {
  const result = [];
  
  for (let i = 1; i <= floors; i++) { 
    let str = ''; 
    for (let j = 1; j <= 2 * floors - 1; j++) { 
      if (j >= floors + 1 - i && j <= floors - 1 + i) {
        str += character;
      } else {
        str += ' '; 
      }
     } 
     result.push(str);
   } 

  return result;
};

module.exports = buildPyramid;