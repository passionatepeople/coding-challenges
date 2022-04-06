# Week 14 challenge

You are dealing with an archaic navigation system that sends you around the city by making you follow 4 cardinal directions: North, East, South, West.
You soon realise that this system sends you for a loop by making you needlesly travel up and then down, first left and then right etc.

Write a function `cutToTheChase` which accepts an array of directions, cancels out the immediate opposing directions and then returns only the ones you should follow.

*Note:* You should cancel out immediatelly following opposing directions, like North-South-West is just West. But North-West-South is still North-West-South;


Examples:
```
cutToTheChase(['NORTH']) // returns ['NORTH']
cutToTheChase(['NORTH', 'EAST']) // returns ['NORTH', 'EAST']
cutToTheChase(['NORTH', 'EAST', 'SOUTH']) // returns ['NORTH', 'EAST', 'SOUTH']
cutToTheChase(['NORTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']) // returns ['NORTH', 'WEST']
cutToTheChase(['SOUTH', 'NORTH', 'EAST', 'WEST']) // returns []
```


## Upload link

You can `/submit` your solution in Slack.

## Results

