const balanceMe = (array) => {
  //  Problem: sum of the left of an index, is equal to sum of the right of the index
  // first calculate the sum of all numbers
  // then, for each index, the sum of its right, is the totalsum - (the sum of the numbers on its left + the number that the index represents)
  let totlaSum = 0, leftsum = 0;
  for(let i of array) totlaSum += i;
  for (let i = 0; i < array.length; i++) {
    if (leftsum == totlaSum - leftsum - arr[i]) return i;
        leftsum += array[i];
   }
   return -1;
};

module.exports = balanceMe;
