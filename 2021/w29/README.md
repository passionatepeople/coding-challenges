# Week 29 challenge

Write a function `chopMeUp` which takes in a string (1st argument) and splits it in `N` (2nd argument) sized chunks (defaults to `2`).
If the last chunk is shorter than `N`, then fill the missing characters with symbol `S` (3rd argument, which defaults to `_`).


Examples:
```
chopMeUp('abcd') // returns ["ab", "cd"]
chopMeUp('abcde') // returns ["ab", "cd", "e_"]
chopMeUp('abcdefghijklm', 3) // returns ["abc", "def", "ghi", "jkl", "m__"]
chopMeUp('abcdefghij', 7, '*') // returns ["abcdefg", "hij****"]
```

## Upload link

[PP Connect](https://connect.passionatepeople.io/code-challenge-submission)

## Results

