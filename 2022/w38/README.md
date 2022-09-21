# Week 38 challenge

Write a function `leftSwipe2048row` which implements [2048 game](https://en.wikipedia.org/wiki/2048_(video_game)) logic of swiping one single row to the left.
* In this case empty cells are represented as 0
* Tiles can me merged only once
* For the purpose of this challenge, you should be able to handle rows of varying lengths



Examples:
```
leftSwipe2048row([4, 4, 0, 2]) // return [8, 2, 0, 0]
leftSwipe2048row([2, 0, 2, 0]) // return [4, 0, 0, 0]
leftSwipe2048row([2, 0, 2, 4]) // return [4, 4, 0, 0]
leftSwipe2048row([2, 0, 2, 4, 2, 4, 0, 0, 4]) // return [4, 4, 2, 8, 0, 0, 0, 0, 0]
```


## Upload link

You can `/submit` your solution in Slack.

## Results

