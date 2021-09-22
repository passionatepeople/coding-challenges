# Passionate People Coding Challenges

![Passionate People Coding Challenges](./pp-cc-logo.png)

## Instructions

run `yarn test` to run the latest challenge tests.
Develop your solution in `2021/w<week number>/solution.js` file until all tests pass.
Since you will send the contents of this file as your solution, all your code should be in this 1 file.

**WARNING!!: Do not commit your solution!** as that will disclose your approach to others!
The solution should be submitted via an upload link provided for each solution.

### Evaluation

You can also run the evaluation locally and compare various versions of your solution. This is the same script that is running in the cloud.
It can serve as a rough benchmark for relative performance. However, it might differ on the cloud machine due to different underlying hardware.

Run `node evaluate.js -c [challenge] -d [durationInSeconds]`.

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
- +5 points determined via voting procedure. Ties are also possible.
- challenge creator gets as many points as participants in the challenge. (clamped to min: 10; max: 25)

**Note:** Since you can submit multiple solutions, the shortest and most elegant solution will be ranked apart from fastest. E.g. you can submit 3 solutions - one aimed to be fastest, another one to be the shortest and the 3rd one to be most readable/elegant/novel or otherwise noteworthy for the voting. It could very well be that a solution is both elegant and fast. So all correct solutions will be evaluated independently for each award category.

#### Voting process

Voting commences as soon as official run is completed.
Each Slack member can run `/vote` command and select the best solution of the last week.
The votes are counted after a week - the top one gets 5pts from jury. (ties are possible; then multiple get 5pts).

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

## Tips and Tricks

[List of ideas from our participants](TIPS-AND-TRICKS.md)

## Authoring

If you'd like to contribute and create a challenge, here are instructions for [authoring](AUTHORING.md) one.

# Results
## 2021
### Overall

| Place | Name       | Week 09 | Week 10 | Week 11 | Week 12 | Week 13 | Week 14 | Week 15 | Week 16 | Week 17 | Week 18 | Week 19 | Week 20 | Week 21 | Week 22 | Week 23 | Week 24 | Week 25 | Week 26 | Week 27 | Week 28 | Week 29 | Week 30 | Week 31 | Week 32 | Week 33 | Week 34 | Week 35 | Week 36 | Week 37 | Total points | Place | Name       |
|-------|------------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|--------------|-------|------------|
| 1.    | Peter-Paul | 30      | 25      | 35      | 25      | 30      | 10      | 30      | 30      | 30      | 23      | 23      | 15      | 23      | 17      | 30      | 18      |         |         |         |         |         |         |         |         |         |         |         | 35      | 30      | 459          | 1.    | Peter-Paul |
| 2.    | Irene      | 10      | 10      | 20      | 25      | 23      | 25      | 17      | 35      | 28      | 13      | 2       | 17      | 15      | 18      | 10      |         |         |         |         |         |         | 17      | 18      | 30      | 12      | 23      | 25      | 13      | 30      | 436          | 2.    | Irene      |
| 3.    | Lars       | 25      | 15      | 18      | 30      | 18      | 17      | 17      | 12      |         | 18      | 35      |         | 30      | 23      | 25      | 15      | 18      | 4       | 25      | 30      | 12      | 5       |         |         |         |         |         | 8       | 30      | 430          | 3.    | Lars       |
| 4.    | Aman       | 4       | 18      | 15      | 6       | 18      | 25      | 25      | 25      | 18      | 18      | 10      | 25      | 10      | 25      | 12      | 10      | 17      | 25      |         |         |         |         |         |         |         |         |         | 25      | 25      | 356          | 4.    | Aman       |
| 5.    | Lee        |         |         |         |         |         |         |         |         | 12      | 4       |         | 25      | 8       | 12      | 6       | 35      | 30      | 12      | 1       | 30      | 9       | 17      | 1       | 25      | 15      | 25      | 6       | 2       | 30      | 305          | 5.    | Lee        |
| 6.    | Jan Bart   | 10      | 6       | 4       | 25      | 18      | 8       | 6       | 6       | 4       | 9       | 2       | 4       | 15      | 6       | 8       | 8       | 10      | 10      | 30      | 2       | 5       | 4       | 18      |         |         |         | 35      |         |         | 253          | 6.    | Jan Bart   |
| 7.    | Tim        | 12      | 9       | 6       | 9       | 23      | 17      | 4       |         | 17      | 25      | 15      | 7       | 4       | 10      | 2       | 8       | 18      | 15      |         | 13      |         |         |         |         |         |         |         |         | 30      | 244          | 7.    | Tim        |
| 8.    | Pablo      |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 25      | 30      | 18      | 35      | 23      | 25      | 12      |         | 8       |         | 30      | 206          | 8.    | Pablo      |
| 9.    | Javad      |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 23      | 25      | 25      | 12      | 25      | 30      | 4       |         | 8       |         |         | 30      | 182          | 9.    | Javad      |
| 10.   | Varun      |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 18      | 35      | 30      | 15      | 25      | 25      | 30      | 178          | 10.   | Varun      |
| 11.   | Bram       |         |         |         |         |         | 6       | 1       |         | 1       |         |         |         |         |         |         |         |         |         |         |         | 12      | 12      | 18      | 8       | 30      | 6       | 12      | 25      | 30      | 161          | 11.   | Bram       |
| 12.   | Joppe      | 5       | 2       | 10      | 25      | 18      | 25      | 15      | 8       | 12      | 18      | 10      |         |         | 4       |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 152          | 12.   | Joppe      |
| 13.   | Anuradha   |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 15      | 25      | 8       | 25      | 17      |         | 13      | 12      | 2       | 1       |         | 30      | 148          | 13.   | Anuradha   |
| 14.   | Hossein    |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 2       | 8       | 4       | 30      | 18      | 25      | 12      | 10      | 6       | 2       | 30      | 147          | 14.   | Hossein    |
| 15.   | Mettin     |         | 8       |         | 1       | 23      | 9       | 8       | 4       | 5       | 10      | 6       | 10      |         | 12      | 15      | 8       | 8       | 2       | 1       |         | 4       |         |         |         |         |         |         |         |         | 134          | 15.   | Mettin     |
| 16.   | Dexter     | 1       | 17      | 15      |         | 23      | 2       | 2       | 12      | 4       | 1       | 6       | 6       | 8       | 4       | 6       | 12      |         |         |         |         |         |         |         |         |         |         |         |         |         | 119          | 16.   | Dexter     |
| 17.   | Ezzeddine  |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 11      | 25      | 18      | 1       | 2       |         |         | 12      | 1       |         |         | 70           | 17.   | Ezzeddine  |
| 18.   | Tori       |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 18      | 4       |         |         | 6       | 8       | 25      | 61           | 18.   | Tori       |
| 19.   | Ji         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 25      | 30      | 55           | 19.   | Ji         |
| 20.   | Sander A.  |         |         |         | 25      | 18      |         |         |         |         |         |         |         |         |         |         |         |         |         | 8       |         |         |         |         |         |         |         |         |         |         | 51           | 20.   | Sander A.  |
|       | Gift       |         |         |         |         |         |         |         |         |         |         |         |         | 1       |         |         |         |         |         | 6       | 7       | 12      |         |         |         |         |         |         |         | 25      | 51           |       | Gift       |
| 22.   | Patrick    |         |         |         |         |         |         |         |         |         |         |         |         | 2       |         |         |         |         | 10      |         |         |         |         |         |         |         |         |         |         | 25      | 37           | 22.   | Patrick    |
| 23.   | Edgar      | 15      |         |         |         |         |         |         |         |         |         | 15      |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 30           | 23.   | Edgar      |
| 24.   | Daniel     |         | 1       |         |         | 18      |         |         |         |         |         |         | 8       |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 27           | 24.   | Daniel     |
| 25.   | Oskar      |         |         |         |         |         |         |         |         | 12      | 11      |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 23           | 25.   | Oskar      |
|       | Chris      |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 11      | 12      |         |         | 23           |       | Chris      |
| 27.   | Alexander  |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 6       |         |         |         |         |         |         | 2       |         |         |         |         |         |         |         | 8            | 27.   | Alexander  |
| 28.   | Marco      | 6       |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 6            | 28.   | Marco      |
| 29.   | Timo       | 4       |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 4            | 29.   | Timo       |
| 30.   | Stef       |         |         |         |         |         |         |         |         |         |         |         | 2       | 1       |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 3            | 30.   | Stef       |
| 31.   | Mihai      |         |         | 2       |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 2            | 31.   | Mihai      |
|       | Sander L.  |         |         |         | 2       |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 2            |       | Sander L.  |


### September

| Place | Name       | Week 35 | Week 36 | Week 37 | Week 38 | Week 39 | Total points |
|-------|------------|---------|---------|---------|---------|---------|--------------|
| 1.    | Varun      | 25      | 25      | 30      |         |         | 80           |
| 2.    | Irene      | 25      | 13      | 30      |         |         | 68           |
| 3.    | Bram       | 12      | 25      | 30      |         |         | 67           |
| 4.    | Peter-Paul |         | 35      | 30      |         |         | 65           |
| 5.    | Ji         |         | 25      | 30      |         |         | 55           |
| 6.    | Aman       |         | 25      | 25      |         |         | 50           |
| 7.    | Tori       | 6       | 8       | 25      |         |         | 39           |
| 8.    | Pablo      | 8       |         | 30      |         |         | 38           |
|       | Hossein    | 6       | 2       | 30      |         |         | 38           |
|       | Lee        | 6       | 2       | 30      |         |         | 38           |
|       | Lars       |         | 8       | 30      |         |         | 38           |
| 12.   | Jan Bart   | 35      |         |         |         |         | 35           |
| 13.   | Anuradha   | 1       |         | 30      |         |         | 31           |
| 14.   | Javad      |         |         | 30      |         |         | 30           |
|       | Tim        |         |         | 30      |         |         | 30           |
| 16.   | Patrick    |         |         | 25      |         |         | 25           |
|       | Gift       |         |         | 25      |         |         | 25           |
| 18.   | Chris      | 12      |         |         |         |         | 12           |
| 19.   | Ezzeddine  | 1       |         |         |         |         | 1            |


### August

| Place | Name      | Week 31 | Week 32 | Week 33 | Week 34 | Total points |
|-------|-----------|---------|---------|---------|---------|--------------|
| 1.    | Varun     | 18      | 35      | 30      | 15      | 98           |
| 2.    | Irene     | 18      | 30      | 12      | 23      | 83           |
| 3.    | Lee       | 1       | 25      | 15      | 25      | 66           |
| 4.    | Hossein   | 18      | 25      | 12      | 10      | 65           |
| 5.    | Bram      | 18      | 8       | 30      | 6       | 62           |
| 6.    | Pablo     | 23      | 25      | 12      |         | 60           |
| 7.    | Javad     | 30      | 4       |         | 8       | 42           |
| 8.    | Anuradha  |         | 13      | 12      | 2       | 27           |
| 9.    | Tori      | 18      | 4       |         |         | 22           |
| 10.   | Jan Bart  | 18      |         |         |         | 18           |
| 11.   | Ezzeddine | 2       |         |         | 12      | 14           |
| 12.   | Chris     |         |         |         | 11      | 11           |


### July

| Place | Name        | Week 26 | Week 27  | Week 28  | Week 29  | Week 30  | Total points|
|-------|-------------|---------|----------|----------|----------|----------|-------------|
| 1.    | Javad       | 23      | 25       | 25       | 12       | 25       | 110         |
| 2.    | Pablo       |         | 25       | 30       | 18       | 35       | 108         |
| 3.    | Anuradha    | 15      | 25       | 8        | 25       | 17       | 90          |
| 4.    | Lars        | 4       | 25       | 30       | 12       | 5        | 76          |
| 5.    | Lee         | 12      | 1        | 30       | 9        | 17       | 69          |
| 6.    | Ezzedine    |         | 11       | 25       | 18       | 1        | 55          |
| 7.    | Jan Bart    | 10      | 30       | 2        | 5        | 4        | 51          |
| 8.    | Hossein     |         | 2        | 8        | 4        | 30       | 44          |
| 9.    | Tim         | 15      |          | 13       |          |          | 28          |
| 10.   | Aman        | 25      |          |          |          |          | 25          |
|       | Gift        |         | 6        | 7        | 12       |          | 25          |
| 12.   | Bram        |         |          |          | 12       | 12       | 24          |
| 13.   | Irene       |         |          |          |          | 17       | 17          |
| 14.   | Patrick     | 10      |          |          |          |          | 10          |
| 15.   | Sander      |         | 8        |          |          |          | 8           |
| 16.   | Mettin      | 2       | 1        |          | 4        |          | 7           |
| 17.   | Alexander   |         |          |          |          | 2        | 2           |

### June

| Place | Name       | Week 22 | Week 23 | Week 24 | Week 25 | Total points |
| ------|------------|---------|---------|---------|---------|------------- |
| 1.    | Lee        | 12      | 6       | 35      | 30      | 83           |
| 2.    | Lars       | 23      | 25      | 15      | 18      | 81           |
| 3.    | Peter-Paul | 17      | 30      | 18      |         | 65           |
| 4.    | Aman       | 25      | 12      | 10      | 17      | 64           |
| 5.    | Mettin     | 12      | 15      | 8       | 8       | 43           |
| 6.    | Tim        | 10      | 2       | 8       | 18      | 38           |
| 7.    | Jan Bart   | 6       | 8       | 8       | 10      | 32           |
| 8.    | Irene      | 18      | 10      |         |         | 28           |
| 9.    | Dexter     | 4       | 6       | 12      |         | 22           |
| 10.   | Alexander  |         | 6       |         |         | 6            |
| 11.   | Joppe      | 4       |         |         |         | 4            |
### May

| Place | Name        | Week 18 | Week 19  | Week 20  | Week 21  | Total points|
|-------|-------------|---------|----------|----------|----------|-------------|
| 1.    | Peter-Paul  | 23      | 23       | 15       | 23       | 84          |
| 2.    | Lars        | 18      | 35       |          | 30       | 83          |
| 3.    | Aman        | 18      | 10       | 25       | 10       | 63          |
| 4.    | Tim         | 25      | 15       | 7        | 4        | 51          |
| 5.    | Irene       | 13      | 2        | 17       | 15       | 47          |
| 6.    | Lee         | 4       |          | 25       | 8        | 37          |
| 7.    | Jan Bart    | 9       | 2        | 4        | 15       | 30          |
| 8.    | Joppe       | 18      | 10       |          |          | 28          |
| 9.    | Mettin      | 10      | 6        | 10       |          | 26          |
| 10.   | Dexter      | 1       | 6        | 6        | 8        | 21          |
| 11.   | Edgar       |         | 15       |          |          | 15          |
| 12.   | Oskar       | 11      |          |          |          | 11          |
| 13.   | Daniel      |         |          | 8        |          | 8           |
| 14.   | Stef        |         |          | 2        | 1        | 3           |
| 15.   | Patrick     |         |          |          | 2        | 2           |
| 16.   | Gift        |         |          |          | 1        | 1           |


### April

| Place | Name       | Week 13 | Week 14 | Week 15 | Week 16 | Week 17 | Total points |
|-------|------------|---------|---------|---------|---------|---------|--------------|
| 1.    | Peter-Paul | 30      | 10      | 30      | 30      | 30      | 130          |
| 2.    | Irene      | 23      | 25      | 17      | 35      | 28      | 128          |
| 3.    | Aman       | 18      | 25      | 25      | 25      | 18      | 111          |
| 4.    | Joppe      | 18      | 25      | 15      | 8       | 12      | 78           |
| 5.    | Lars       | 18      | 17      | 17      | 12      |         | 64           |
| 6.    | Tim        | 23      | 17      | 4       |         | 17      | 61           |
| 7.    | Mettin     | 23      | 9       | 8       | 4       | 5       | 49           |
| 8.    | Dexter     | 23      | 2       | 2       | 12      | 4       | 43           |
| 9.    | Jan Bart   | 18      | 8       | 6       | 6       | 4       | 42           |
| 10.   | Sander A.  | 18      |         |         |         |         | 18           |
|       | Daniel     | 18      |         |         |         |         | 18           |
| 12.   | Oskar      |         |         |         |         | 12      | 12           |
|       | Lee        |         |         |         |         | 12      | 12           |
| 14.   | Bram       |         | 6       | 1       |         | 1       | 8            |


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
