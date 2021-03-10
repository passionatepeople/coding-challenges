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

**Note:** Since you can submit multiple solutions, the shortest and most elegant solution will be ranked apart from fastest. E.g. you can submit 3 solutions - one aimed to be fastest, another one to be the shortest and the 3rd one to be most readable. It could very well be that a solution is both elegant and fast. So all correct solutions will be evaluated independently for each award category.


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

We reserve right to update this list or disqualify a solution if we see that it is taking an unfair advantage and/or is unfair to other solutions.
This whole challenge concept is still a MVP and we iterate and improve as we go :) Thank you for your understanding ;)

## Evaluation

Update `evaluate.js` for the right challenge and then run `npm run eval [numRuns]` optionally passing how many runs should each solution be evaluated for (defaults to 1000).


# Results
## 2021

| Place | Name       | Week 09 | Week 10 | ... | Total points |
|-------|------------|---------|---------|-----|--------------|
| 1.    | Peter-Paul | 30      |         |     | 30           |
| 2.    | Lars       | 25      |         |     | 25           |
| 3.    | Edgar      | 15      |         |     | 15           |
| 4.    | Tim        | 12      |         |     | 12           |
| 5.    | Jan        | 10      |         |     | 10           |
|       | Irene      | 10      |         |     | 10           |
| 7.    | Marco      | 6       |         |     | 6            |
| 8.    | Aman       | 4       |         |     | 4            |
|       | Timo       | 4       |         |     | 4            |
| 10.   | Dexter     | 1       |         |     | 1            |

