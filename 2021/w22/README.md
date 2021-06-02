# Week 22 challenge

Write a function `getStandings` which takes in an array of soccer matches. Each match has 3 properties: `home`, `away` & `result`.
Home and away are the team names, result is a string in the format `homeGoals-awayGoals`.
The result is a list of teams where the team with the most points is at the top.
The list is odered first by points. If they're equal then by goal difference. Finally by team name.

For example: `{"away":"Barcelona","result":"2-2","home":"Real Madrid"}`

In this example both teams receive 1 point because of a draw.
A winning team receives *3* points and a loser get *0* points.

The result is an array containing objects with the properties: `team`, `matches`, `points`, `goals`.
Goals contains: `for`, `against`, `difference`.


**Note:**
- The order of properies in a match is not always the same.
- The input arrays should not be mutated!
- The result should always be a new array.

## Examples

Input of:
```
[
    { home: "Barcelona", away: "Real Madrid", result: "3-1" },
    { away: "Barcelona", home: "Real Madrid", result: "1-1" },
    { away: "Atletico Madrid", result: "1-0", home: "Villareal" }
]
```

Results in:
```
[
    {
        team: "Barcelona",
        matches: 2,
        points: 4,
        goals: { for: 4, against: 2, difference: 2 }
    },
    {
        team: "Villareal",
        matches: 1,
        points: 3,
        goals: { for: 1, against: 0, difference: 1 }
    },
    {
        team: "Real Madrid",
        matches: 2,
        points: 1,
        goals: { for: 2, against: 4, difference: -2 }
    },
    {
        team: "Atletico Madrid",
        matches: 1,
        points: 0,
        goals: { for: 0, against: 1, difference: -1 }
    }
]
```
Input of

```
[
    { home: "PSV", away: "Ajax", result: "0-0" },
    { away: "PSV", home: "Ajax", result: "0-0" }
]
```
Results in:
```
[
    {
        team: "Ajax",
        matches: 2,
        points: 2,
        goals: { for: 0, against: 0, difference: 0 }
    },
    {
        team: "PSV",
        matches: 2,
        points: 2,
        goals: { for: 0, against: 0, difference: 0 }
    }
]
```

## Author

Tim

## Upload link

[PP Connect](https://connect.passionatepeople.io/code-challenge-submission)

## Results

