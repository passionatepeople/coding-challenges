# Week 29 challenge

Write a function `isThisABook` which accepts a string representing a [ISBN](https://en.wikipedia.org/wiki/ISBN) code. Your task is to return if this is a valid ISBN code.

For the purpose of this challenge a valid ISBN code consists of 10 digits, with 'X' denoting 10.
A valid ISBN code is divisable by 11 when each digit is multiplied with it's positional number and then summed.
Also, X can only appear as the last digit which typically is used as a checksum of error detection digit.


For example, 7873312984 is a valid ISBN number because:
```
Digit:      7 8 7 3 3 1 2 9 8 4
Position:   1 2 3 4 5 6 7 8 9 10

(7 * 1) + (8 * 2) + (7 * 3) + (3 * 4) + (3 * 5) + (1 * 6) + (2 * 7) + (9 * 8) + (8 * 9) + (4 * 10) == 275

275 % 11 = 0
```

Examples:
```
isThisABook('7873312984') // return true
isThisABook('724496814X') // return false
```


## Upload link

You can `/submit` your solution in Slack.

## Results

