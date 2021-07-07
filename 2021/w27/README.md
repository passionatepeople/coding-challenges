# Week 27 challenge

The chalenge is to write function `balanceMe`, which takes in an array of numbers and finds the index at which sum of the numbers to the left and right are equal.
If such index is not found, it returns `-1`

For example, in the array `[1, -5, 7, -2, -2]`, such index is `2` because `1 - 5 == -2 - 2`;


**Notes:**
- take into account a special case, like `[12, -3, 4, -1]`, where the correct index is `0` because on the left, there are no numbers (thus the sum is `0`) and on the right side the sum is also `0`;
- you don't have to consider a case of an empty array


Examples:
```
balanceMe([1, 1, 1, 7, 3]) // returns 3
balanceMe([1, -5, 7, -2, -2]) // returns 2
balanceMe([12, -3, 4, -1]) // returns 0
balanceMe([2, 2, 2, 2]) // returns -1
```

## Upload link

[PP Connect](https://connect.passionatepeople.io/code-challenge-submission)

## Results

