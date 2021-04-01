# Passionate People coding challenges
## Instructions

run `yarn test` to run the latest challenge tests.
Develop your solution in `2021/w<week number>/solution.js` file until all tests pass.
Since you will send the contents of this file as your solution, all your code should be in this 1 file.

**WARNING!!: Do not commit your solution!** as that will disclose your approach to others!
The solution should be submitted via an upload link provided for each solution.

## Libraries

These are the util libs available to be required and used in your solution, shall you need them.

- date-fns
- immer
- lodash
- moment
- ramda
- rxjs

Expansion of this util lib list is possible, but should be discussed and then will be added in future challenges.


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

In principle solution should rely only on JavaScript features to come up with correct solution inside the function that is being exported from the solutions file.
If using require, it should be to include one of the libraries (listed above). Using built in Node API's is allowed as long as it doesn't meddle with execution of tests or evaluation, or takes unfair advantage in any other way.

Prohibited approaches include
- requiring or meddling with test spec cases
- meddling how tests are run and evaluated
- meddling with how performance is evaluated
- meddling with or overwriting node internals (module, require, etc.)
- meddling with other solutions
- running npm commands as child process etc.
- using fs module to read/write other files/directories
- mapping inputs directly to results, so that consequent evaluation cases would simply return ready result from map (doesn't apply to simple pregeneration of all possible inputs)
- doing system calls or web requests to extenal services/servers (unless it's part of challenge)
- mutating function inputs

We reserve right to update this list or disqualify a solution if we see that it is taking an unfair advantage and/or is unfair to other solutions.
This whole challenge concept is still a MVP and we iterate and improve as we go :) Thank you for your understanding ;)

#### Practical size limits

Since challenges are intended to be relatively small, solvable in short time and withhout excessive coding, there's a practical limit of max 2048 bytes per solution.
This also prevents taking advantage and precoding responses to the test spec.

## Evaluation

Update `evaluate.js` for the right challenge and then run `npm run eval [numRuns]` optionally passing how many runs should each solution be evaluated for (defaults to 1000).


# Results
## 2021

| Place | Name       | Week 09 | Week 10 | Week 11 | Week 12   | ...       | Total points |
|-------|------------|---------|---------|---------|-----------|-----------|--------------|
| 1.    | Peter-Paul | 30      | 25      | 35      | 25        |           | 115          |
| 2.    | Lars       | 25      | 15      | 18      | 30        |           | 88           |
| 3.    | Irene      | 10      | 10      | 20      | 25        |           | 65           |
| 4.    | Jan        | 10      | 6       | 4       | 25        |           | 45           |
| 5.    | Aman       | 4       | 18      | 15      | 6         |           | 43           |
| 6.    | Joppe      | 5       | 2       | 10      | 25        |           | 42           |
| 7.    | Tim        | 12      | 9       | 6       | 9         |           | 36           |
| 8.    | Dexter     | 1       | 17      | 15      |           |           | 33           |
| 9.    | Sander A.  |         |         |         | 25        |           | 25           |
| 10.   | Edgar      | 15      |         |         |           |           | 15           |
| 11.   | Mettin     |         | 8       |         | 1         |           | 9            |
| 12.   | Marco      | 6       |         |         |           |           | 6            |
| 13.   | Timo       | 4       |         |         |           |           | 4            |
| 14.   | Mihai      |         |         | 2       |           |           | 2            |
|       | Sander L.  |         |         |         | 2         |           | 2            |
| 16.   | Daniel     |         | 1       |         |           |           | 1            |
