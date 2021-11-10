# Week 45 challenge

Write a function `maskIt` which accepts a string and a number. The number is converted to binary and used as mask.
The mask determines which letters in the orignal string are case-swapped. 1 - case is swapped, 0 - letter is kept as is.

The mask is teoretically infinite - it keeps repeating as long as you have characters in the original string.

*Note:* Non alphabetic characters are skipped over and kept as is.


## Example

string = 'an.example string!'
number = 27

27 in binary is '11011' which means that every 1st, 2nd, 4th and 5th letter will be swapped. Since mask repeats, then also 6th, 7th, 9th, 10th etc. will be swapped.

| Original | Mask | Result  | Notes |
|----------|------|---------|-------|
| a        | 1    | A       |       |
| n        | 1    | N       |       |
| .        |      | .       | Non alphabetic characters are skipped and mask is not taken into account |
| e        | 0    | e       |       |
| x        | 1    | X       |       |
| a        | 1    | A       |       |
| m        | 1    | M       |       |
| p        | 1    | P       |       |
| l        | 0    | l       |       |
| e        | 1    | E       |       |
| [space]  |      | [space] | Non alphabetic characters are skipped and mask is not taken into account |
| s        | 1    | S       |       |
| t        | 1    | T       |       |
| r        | 1    | R       |       |
| i        | 0    | i       |       |
| n        | 1    | N       |       |
| g        | 1    | G       |       |
| !        |      | !       | Non alphabetic characters are skipped and mask is not taken into account |




Examples:
```
maskIt('an.example string!', 27) // returns 'AN.eXAMPlE STRiNG!'
maskIt('an.example string!', 9) // returns 'An.eXAmpLE stRIng!'
maskIt('aaa!aaa', 1) // returns 'AAA!AAA'
maskIt('aaa!aaa', 2) // returns 'AaA!aAa'
```


## Upload link

[PP Connect](https://connect.passionatepeople.io/code-challenge-submission)

## Results

