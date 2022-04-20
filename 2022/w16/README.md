# Week 16 challenge

Write a function `greed` which is a scoring function for a dice game Greed. The game is played with a regular six-sided dices (yielding random values 1-6) by throwing 5 at the same time. Then the throw is scored according to these rules:
```
  Three 1's => 1000 points
  Three 6's =>  600 points
  Three 5's =>  500 points
  Three 4's =>  400 points
  Three 3's =>  300 points
  Three 2's =>  200 points
  One   1   =>  100 points
  One   5   =>   50 point
```

Each digit can be used up only once. E.g. if you have four 3' and one 2 you get 300 points, because 333 gives you 300, but lone 2 and 3 don't award any points.


Examples:
```
greed([1,2,3,4,5]) // returns 150
greed([2,3,4,6,6]) // returns 0
greed([1,1,1,1,1]) // returns 1200
greed([5,5,5,5,5]) // returns 600
```

## Upload link

You can `/submit` your solution in Slack.

## Results

