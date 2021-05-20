# Passionate People Coding Challenges

![Passionate People Coding Challenges](./pp-cc-logo.png)

## Instructions

run `yarn test` to run the latest challenge tests.
Develop your solution in `2021/w<week number>/solution.js` file until all tests pass.
Since you will send the contents of this file as your solution, all your code should be in this 1 file.

**WARNING!!: Do not commit your solution!** as that will disclose your approach to others!
The solution should be submitted via an upload link provided for each solution.

## Ranking
Only correct solutions count. Failing at least 1 test case immediately disqualifies the solution.
So you should make sure the solution works with the provided tests before submitting it.
You can submit multiple versions of your solutions. At the end, only the fastest will be taken into account.

Ranking is based on performance. Fastest execution time (accross multiple tries) wins. F1 style points are awarded for each week.
- 1st place: 25 points
- 2nd place: 18 points
- 3rd: 15
- 4th: 12
- 5th: 10
- 6th: 8
- 7th: 6
- 8th: 4
- 9th: 2
- 10th: 1

### Extra points

- +5 points for the shortest solution (codegolf). Judged by the number of bytes your solution file has. If tied, both (or more) get awarded 5 points.
- +5 points for the most elegant and readable code. Judged by a jury (TBD). Ties are possible.

**Note:** Since you can submit multiple solutions, the shortest and most elegant solution will be ranked apart from fastest. E.g. you can submit 3 solutions - one aimed to be fastest, another one to be the shortest and the 3rd one to be most readable/elegant/novel or otherwise noteworthy for the judges. It could very well be that a solution is both elegant and fast. So all correct solutions will be evaluated independently for each award category.

#### Jury process

Jury consists of 3 judges: David, Israel and Harijs (or whoever is available that week).
Each picks 3 favourite solutions and ranks them. (most favourite gets 3pts, 2nd - 2, 3rd - 1).
Then sum the points together - the top one gets 5pts from jury. (ties are possible; then multiple get 5pts).

### Proxibited solutions

- mutating function inputs
- caching inputs directly to results, so that consequent evaluation cases would simply return ready result from map

Example:
```
const cache = {};

module.exports = (input) {
  if (cache[input]) return cache[input];

  // expensive computation
  const result = ....

  cache[input] = result;

  return result;
}
```

*Note:* Caching is disallowed for mapping inputs directly to results! Caching _intermediary_ results is not disallowed.

#### Fair play principles

In principle solution should rely only on JavaScript features to come up with correct solution inside the function that is being exported from the solutions file.
Using built in Node API's is allowed as long as it doesn't meddle with execution of tests or evaluation, or takes unfair advantage in any other way.

Prohibited approaches include
- requiring or meddling with test spec cases
- meddling how tests are run and evaluated
- meddling with how performance is evaluated
- meddling with or overwriting node internals (module, require, etc.)
- meddling with other solutions
- running npm commands as child process etc.
- using fs module to read/write other files/directories
- doing system calls or web requests to extenal services/servers (unless it's part of challenge)

We reserve right to update this list or disqualify a solution if we see that it is taking an unfair advantage and/or is unfair to other solutions.
This whole challenge concept is still a MVP and we iterate and improve as we go :) Thank you for your understanding ;)

#### Practical size limits

Since challenges are intended to be relatively small, solvable in short time and withhout excessive coding, there's a practical limit of max 2048 bytes per solution.
This also prevents taking advantage and precoding responses to the test spec.

## Evaluation

Run `node evaluate.js -c [challenge] -d [durationInSeconds]`.


# Results
## 2021
### Overall

| Place | Name       | Week 09 | Week 10 | Week 11 | Week 12   | Week 13   | Week 14  | Week 15  | Week 16 | Week 17 | Week 18 | Week 19 | Total points |
|-------|------------|---------|---------|---------|-----------|-----------|----------|----------|---------|---------|---------|---------|--------------|
| 1.    | Peter-Paul | 30      | 25      | 35      | 25        | 30        |          | 30       | 30      | 30      | 23      | 23      | 281          |
| 2.    | Irene      | 10      | 10      | 20      | 25        | 23        | 25       | 17       | 35      | 28      | 13      | 2       | 208          |
| 3.    | Lars       | 25      | 15      | 18      | 30        | 18        | 17       | 17       | 12      |         | 18      | 30      | 200          |
| 4.    | Aman       | 4       | 18      | 15      | 6         | 18        | 25       | 25       | 25      | 18      | 18      | 10      | 182          |
| 5.    | Joppe      | 5       | 2       | 10      | 25        | 18        | 25       | 15       | 8       | 12      | 18      | 10      | 148          |
| 6.    | Tim        | 12      | 9       | 6       | 9         | 23        | 17       | 4        |         | 17      | 25      | 15      | 137          |
| 7.    | Jan Bart   | 10      | 6       | 4       | 25        | 18        | 8        | 6        | 6       | 4       | 9       | 2       | 98           |
| 8.    | Dexter     | 1       | 17      | 15      |           | 23        | 2        | 2        | 12      | 4       | 1       | 6       | 83           |
| 9.    | Mettin     |         | 8       |         | 1         | 23        | 9        | 8        | 4       | 5       |         | 6       | 64           |
| 10.   | Sander A.  |         |         |         | 25        | 18        |          |          |         |         |         |         | 43           |
| 11.   | Edgar      | 15      |         |         |           |           |          |          |         |         |         | 15      | 30           |
| 12.   | Oskar      |         |         |         |           |           |          |          |         | 12      | 11      |         | 23           |
| 13.   | Daniel     |         | 1       |         |           | 18        |          |          |         |         |         |         | 19           |
| 14.   | Lee        |         |         |         |           |           |          |          |         | 12      | 4       |         | 16           |
| 15.   | Bram       |         |         |         |           |           | 6        | 1        |         | 1       |         |         | 8            |
| 16.   | Marco      | 6       |         |         |           |           |          |          |         |         |         |         | 6            |
| 17.   | Timo       | 4       |         |         |           |           |          |          |         |         |         |         | 4            |
| 18.   | Mihai      |         |         | 2       |           |           |          |          |         |         |         |         | 2            |
|       | Sander L.  |         |         |         | 2         |           |          |          |         |         |         |         | 2            |


### May

| Place | Name        | Week 18 | Week 19  | Week 20  | Week 21  | Total points|
|-------|-------------|---------|----------|----------|----------|-------------|
| 1.    | Lars        | 18      | 30       |          |          | 48          |
| 2.    | Peter-Paul  | 23      | 23       |          |          | 46          |
| 3.    | Tim         | 25      | 15       |          |          | 40          |
| 4.    | Joppe       | 18      | 10       |          |          | 28          |
|       | Aman        | 18      | 10       |          |          | 28          |
| 6.    | Irene       | 13      | 2        |          |          | 15          |
|       | Edgar       |         | 15       |          |          | 15          |
| 8.    | Oskar       | 11      |          |          |          | 11          |
|       | Jan Bart    | 9       | 2        |          |          | 11          |
| 10.   | Lee         | 4       |          |          |          | 4           |
| 11.   | Dexter      | 1       | 6        |          |          | 7           |
| 12.   | Mettin      |         | 6        |          |          | 6           |


### April


| Place | Name        | Week 13     | Week 14  | Week 15  | Week 16 | Week 17 | Total points |
|-------|-------------|-------------|----------|----------|---------|---------|--------------|
| 1.    | Irene       | 23          | 25       | 17       | 35      | 28      | 128          |
| 2.    | Peter-Paul  | 30          |          | 30       | 30      | 30      | 120          |
| 3.    | Aman        | 18          | 25       | 25       | 25      | 18      | 111          |
| 4.    | Joppe       | 18          | 25       | 15       | 8       | 12      | 88           |
| 5.    | Lars        | 18          | 17       | 17       | 12      |         | 64           |
| 6.    | Tim         | 23          | 17       | 4        |         | 17      | 61           |
| 7.    | Mettin      | 23          | 9        | 8        | 4       | 5       | 49           |
| 8.    | Dexter      | 23          | 2        | 2        | 12      | 4       | 43           |
| 9.    | Jan Bart    | 18          | 8        | 6        | 6       | 4       | 42           |
| 10.   | Sander A.   | 18          |          |          |         |         | 18           |
|       | Daniel      | 18          |          |          |         |         | 18           |
| 12.   | Oskar       |             |          |          |         | 12      | 12           |
|       | Lee         |             |          |          |         | 12      | 12           |
| 14.   | Bram        |             | 6        | 1        |         | 1       | 8            |


### March

| Place | Name       | Week 09 | Week 10 | Week 11 | Week 12   | Total points |
|-------|------------|---------|---------|---------|-----------|--------------|
| 1.    | Peter-Paul | 30      | 25      | 35      | 25        | 115          |
| 2.    | Lars       | 25      | 15      | 18      | 30        | 88           |
| 3.    | Irene      | 10      | 10      | 20      | 25        | 65           |
| 4.    | Jan Bart   | 10      | 6       | 4       | 25        | 45           |
| 5.    | Aman       | 4       | 18      | 15      | 6         | 43           |
| 6.    | Joppe      | 5       | 2       | 10      | 25        | 42           |
| 7.    | Tim        | 12      | 9       | 6       | 9         | 36           |
| 8.    | Dexter     | 1       | 17      | 15      |           | 33           |
| 9.    | Sander A.  |         |         |         | 25        | 25           |
| 10.   | Edgar      | 15      |         |         |           | 15           |
| 11.   | Mettin     |         | 8       |         | 1         | 9            |
| 12.   | Marco      | 6       |         |         |           | 6            |
| 13.   | Timo       | 4       |         |         |           | 4            |
| 14.   | Mihai      |         |         | 2       |           | 2            |
|       | Sander L.  |         |         |         | 2         | 2            |
| 16.   | Daniel     |         | 1       |         |           | 1            |
