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


- [2021](2021/README.md)

## 2022

| Place | Name           | Week 05 | Week 06 | Week 07 | Week 08 | Week 09 | Week 10 | Week 11 | Week 12 | Week 13 | Week 14 | Week 15 | Week 16 | Week 17 | Week 18 | Week 19 | Week 20 | Week 21 | Week 22 | Week 23 | Week 24 | Week 25 | Week 26 | Week 27 | Week 28 | Week 29 | Week 30 | Week 31 | Week 32 | Week 33 | Week 34 | Week 35 | Week 36 | Week 37 | Total points | Place | Name           |
|-------|----------------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|--------------|-------|----------------|
| 1.    | Hossein        |         | 2       | 30      | 25      | 15      | 15      | 20      | 12      | 23      | 18      | 4       | 10      |         | 20      | 25      | 23      | 25      | 25      | 35      | 6       | 6       | 35      | 25      | 30      | 30      | 30      | 25      | 30      | 10      | 30      | 30      | 30      | 23      | 667          | 1.    | Hossein        |
| 2.    | Varun          | 35      | 25      | 6       |         |         |         | 2       | 20      | 30      |         | 25      | 10      | 8       | 30      | 10      | 12      | 6       | 15      |         | 35      | 15      | 17      | 15      | 15      | 25      | 15      | 15      |         | 18      | 10      | 30      | 15      |         | 459          | 2.    | Varun          |
| 3.    | Lee            | 15      | 25      | 30      | 8       | 25      | 8       | 25      | 6       | 12      | 8       | 4       | 10      | 6       | 10      |         | 6       | 15      | 2       | 4       | 10      | 7       | 6       | 12      | 10      | 10      | 18      | 25      | 12      | 23      | 8       | 30      | 25      | 10      | 425          | 3.    | Lee            |
|       | Aman           | 10      | 25      | 25      | 25      | 25      | 15      | 8       | 25      | 12      | 30      | 12      | 10      | 30      | 25      | 15      | 8       | 20      | 25      | 30      | 10      | 15      | 25      |         |         |         |         |         |         |         |         |         |         |         | 425          |       | Aman           |
| 5.    | Medhat         | 18      | 1       |         | 6       | 25      | 10      | 8       | 10      |         | 1       | 8       | 28      | 25      | 15      | 10      |         | 4       | 4       | 12      |         | 6       | 17      | 15      |         |         | 12      | 12      | 20      | 25      | 25      | 30      | 4       |         | 351          | 5.    | Medhat         |
| 6.    | Bram Kamies    |         |         |         |         |         |         |         |         |         |         |         |         | 10      | 14      | 2       | 4       |         | 25      | 35      | 15      | 35      | 25      | 18      | 25      | 17      |         |         | 18      |         | 12      | 30      | 15      | 30      | 330          | 6.    | Bram Kamies    |
| 7.    | Tom Atterton   |         |         |         |         |         |         |         |         | 6       | 12      | 35      | 15      | 17      | 9       | 6       | 30      | 30      | 16      |         |         |         |         |         |         |         |         |         |         |         |         | 30      | 15      | 15      | 236          | 7.    | Tom Atterton   |
| 8.    | Daan           | 2       | 10      | 7       | 12      |         | 10      | 15      | 4       |         | 6       | 12      | 25      | 15      | 10      | 12      | 10      | 15      | 1       | 8       | 18      | 23      | 9       |         |         |         |         |         |         | 8       |         |         |         |         | 232          | 8.    | Daan           |
| 9.    | Lars           | 15      | 20      | 35      |         | 35      | 35      | 35      | 25      | 18      | 2       |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 220          | 9.    | Lars           |
| 10.   | Irene          |         | 25      |         |         | 8       |         |         |         |         |         |         |         |         |         | 18      | 23      | 15      | 25      | 10      | 12      | 11      | 13      |         |         |         |         |         |         | 12      | 25      |         |         |         | 197          | 10.   | Irene          |
| 11.   | Joseph         | 8       | 10      | 11      | 10      | 4       |         |         | 4       | 4       | 25      | 6       |         |         |         | 12      | 4       | 12      |         |         |         |         |         |         |         |         |         | 11      |         |         |         |         |         |         | 121          | 11.   | Joseph         |
| 12.   | Luc            |         |         | 30      | 25      |         |         | 15      |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 70           | 12.   | Luc            |
| 13.   | Anuradha       | 11      | 10      | 11      |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 10      |         | 10      | 10      |         | 6       |         |         |         |         | 68           | 13.   | Anuradha       |
| 14.   | Tim            |         |         | 5       |         | 4       | 18      |         |         |         | 6       |         |         |         | 6       |         |         |         |         |         |         | 17      |         |         |         |         |         |         |         |         |         |         |         |         | 56           | 14.   | Tim            |
|       | Devin          |         |         |         |         |         |         |         |         |         |         |         | 2       |         | 4       | 4       |         |         |         | 7       |         | 4       |         |         | 12      | 15      |         | 8       |         |         |         |         |         |         | 56           |       | Devin          |
| 16.   | Arpad          |         |         |         |         |         |         |         |         |         | 10      | 15      | 15      |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 40           | 16.   | Arpad          |
| 17.   | Koodal         | 1       |         | 25      |         | 4       |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 30           | 17.   | Koodal         |
| 18.   | Patrick        |         |         | 5       |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 8       | 15      | 28           | 18.   | Patrick        |
| 19.   | Josef          |         |         |         |         |         |         |         | 25      | 2       |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 27           | 19.   | Josef          |
| 20.   | Daan Houweling |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 6       |         | 15      |         |         |         |         |         |         |         |         |         |         |         |         | 21           | 20.   | Daan Houweling |
| 21.   | Adjoa          |         |         |         | 6       | 6       | 4       |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 16           | 21.   | Adjoa          |
| 22.   | Daniel         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 6       | 8       |         | 14           | 22.   | Daniel         |
| 23.   | Peter-Paul     |         |         |         |         |         |         |         |         | 13      |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 13           | 23.   | Peter-Paul     |
| 24.   | Andre Muijen   |         |         |         |         |         | 6       | 4       |         | 1       |         |         | 1       |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 12           | 24.   | Andre Muijen   |
| 25.   | Dexter         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 10      |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 10           | 25.   | Dexter         |
| 26.   | Ji             | 6       |         |         | 2       |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 8            | 26.   | Ji             |
| 27.   | Amine          |         |         |         |         | 4       |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 4            | 27.   | Amine          |
| 28.   | Luuk           |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 2       |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 2            | 28.   | Luuk           |
| 29.   | Matthias       |         | 1       |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         |         | 1            | 29.   | Matthias       |




### September

| Place | Name         | Week 35 | Week 36 | Week 37 | Week 38 | Week 39 | Total points |
|-------|--------------|---------|---------|---------|---------|---------|--------------|
| 1.    | Hossein      | 30      | 30      | 23      |         |         | 83           |
| 2.    | Bram Kamies  | 30      | 15      | 30      |         |         | 75           |
| 3.    | Lee          | 30      | 25      | 10      |         |         | 65           |
| 4.    | Tom Atterton | 30      | 15      | 15      |         |         | 60           |
| 5.    | Varun        | 30      | 15      |         |         |         | 45           |
| 6.    | Medhat       | 30      | 4       |         |         |         | 34           |
| 7.    | Patrick      |         | 8       | 15      |         |         | 23           |
| 8.    | Daniel       | 6       | 8       |         |         |         | 14           |


### August


| Place | Name        | Week 31 | Week 32 | Week 33 | Week 34 | Total points |
|-------|-------------|---------|---------|---------|---------|--------------|
| 1.    | Hossein     | 25      | 30      | 10      | 30      | 95           |
| 2.    | Medhat      | 12      | 20      | 25      | 25      | 82           |
| 3.    | Lee         | 25      | 12      | 23      | 8       | 68           |
| 4.    | Varun       | 15      |         | 18      | 10      | 43           |
| 5.    | Irene       |         |         | 12      | 25      | 37           |
| 6.    | Bram Kamies |         | 18      |         | 12      | 30           |
| 7.    | Anuradha    | 10      |         | 6       |         | 16           |
| 8.    | Joseph      | 11      |         |         |         | 11           |
| 9.    | Devin       | 8       |         |         |         | 8            |
|       | Daan        |         |         | 8       |         | 8            |


### July

| Place | Name        | Week 27 | Week 28 | Week 29 | Week 30 | Total points |
|-------|-------------|---------|---------|---------|---------|--------------|
| 1.    | Hossein     | 25      | 30      | 30      | 30      | 115          |
| 2.    | Varun       | 15      | 15      | 25      | 15      | 70           |
| 3.    | Bram Kamies | 18      | 25      | 17      |         | 60           |
| 4.    | Lee         | 12      | 10      | 10      | 18      | 50           |
| 5.    | Medhat      | 15      |         |         | 12      | 27           |
|       | Devin       |         | 12      | 15      |         | 27           |
| 7.    | Anuradha    |         | 10      |         | 10      | 20           |


### June

| Place | Name           | Week 22 | Week 23 | Week 24 | Week 25 | Week 26 | Total points |
|-------|----------------|---------|---------|---------|---------|---------|--------------|
| 1.    | Bram Kamies    | 25      | 35      | 15      | 35      | 25      | 135          |
| 2.    | Hossein        | 25      | 35      | 6       | 6       | 35      | 107          |
| 3.    | Aman           | 25      | 30      | 10      | 15      | 25      | 105          |
| 4.    | Varun          | 15      |         | 35      | 15      | 17      | 82           |
| 5.    | Irene          | 25      | 10      | 12      | 11      | 13      | 71           |
| 6.    | Daan           | 1       | 8       | 18      | 23      | 9       | 59           |
| 7.    | Medhat         | 4       | 12      |         | 6       | 17      | 39           |
| 8.    | Lee            | 2       | 4       | 10      | 7       | 6       | 29           |
| 9.    | Daan Houweling |         | 6       |         | 15      |         | 21           |
| 10.   | Tim            |         |         |         | 17      |         | 17           |
| 11.   | Tom Atterton   | 16      |         |         |         |         | 16           |
| 12.   | Devin          |         | 7       |         | 4       |         | 11           |
| 13.   | Dexter         | 10      |         |         |         |         | 10           |
| 14.   | Luuk           |         | 2       |         |         |         | 2            |


### May

| Place | Name         | Week 18 | Week 19 | Week 20 | Week 21 | Total points |
|-------|--------------|---------|---------|---------|---------|--------------|
| 1.    | Hossein      | 20      | 25      | 23      | 25      | 93           |
| 2.    | Tom Atterton | 9       | 6       | 30      | 30      | 75           |
| 3.    | Aman         | 25      | 15      | 8       | 15      | 63           |
| 4.    | Varun        | 30      | 10      | 12      | 6       | 58           |
| 5.    | Irene        |         | 18      | 23      | 15      | 56           |
| 6.    | Daan         | 10      | 12      | 10      | 15      | 47           |
| 7.    | Lee          | 10      |         | 6       | 15      | 31           |
| 8.    | Medhat       | 15      | 10      |         | 4       | 29           |
| 9.    | Joseph       |         | 12      | 4       | 7       | 23           |
| 10.   | Bram Kamies  | 14      | 2       | 4       |         | 20           |
| 11.   | Devin        | 4       | 4       |         |         | 8            |
| 12.   | Tim          | 6       |         |         |         | 6            |


### April

| Place | Name         | Week 14 | Week 15 | Week 16 | Week 17 | Total points |
|-------|--------------|---------|---------|---------|---------|--------------|
| 1.    | Aman         | 30      | 12      | 10      | 30      | 82           |
| 2.    | Tom Atterton | 12      | 35      | 15      | 17      | 79           |
| 3.    | Medhat       | 1       | 8       | 28      | 25      | 62           |
| 4.    | Daan         | 6       | 12      | 25      | 15      | 58           |
| 5.    | Varun        |         | 25      | 10      | 8       | 43           |
| 6.    | Arpad        | 10      | 15      | 15      |         | 40           |
| 7.    | Hossein      | 18      | 4       | 10      |         | 32           |
| 8.    | Joseph       | 25      | 6       |         |         | 31           |
| 9.    | Lee          | 8       | 4       | 10      | 6       | 28           |
| 10.   | Bram Kamies  |         |         |         | 10      | 10           |
| 11.   | Tim          | 6       |         |         |         | 6            |
| 12.   | Lars         | 2       |         |         |         | 2            |
|       | Devin        |         |         | 2       |         | 2            |
| 14.   | Andre Muijen |         |         | 1       |         | 1            |

### March

| Place | Name         | Week 09 | Week 10 | Week 11 | Week 12 | Week 13 | Total points |
|-------|--------------|---------|---------|---------|---------|---------|--------------|
| 1.    | Lars         | 35      | 35      | 35      | 25      | 18      | 148          |
| 2.    | Aman         | 25      | 15      | 8       | 25      | 12      | 85           |
|       | Hossein      | 15      | 15      | 20      | 12      | 23      | 85           |
| 4.    | Lee          | 25      | 8       | 25      | 6       | 12      | 76           |
| 5.    | Medhat       | 25      | 10      | 8       | 10      |         | 53           |
| 6.    | Varun        |         |         | 2       | 20      | 30      | 52           |
| 7.    | Daan         |         | 10      | 15      | 4       |         | 29           |
| 8.    | Josef        |         |         |         | 25      | 2       | 27           |
| 9.    | Tim          | 4       | 18      |         |         |         | 22           |
| 10.   | Luc          |         |         | 15      |         |         | 15           |
| 11.   | Peter-Paul   |         |         |         |         | 13      | 13           |
| 12.   | Joseph       | 4       |         |         | 4       | 4       | 12           |
| 13.   | Andre Muijen |         | 6       | 4       |         | 1       | 11           |
| 14.   | Adjoa        | 6       | 4       |         |         |         | 10           |
| 15.   | Irene        | 8       |         |         |         |         | 8            |
| 16.   | Tom Atterton |         |         |         |         | 6       | 6            |
| 17.   | Koodal       | 4       |         |         |         |         | 4            |
|       | Amine        | 4       |         |         |         |         | 4            |


### February

| Place | Name     | Week 05 | Week 06 | Week 07 | Week 08 | Total points |
|-------|----------|---------|---------|---------|---------|--------------|
| 1.    | Aman     | 10      | 25      | 25      | 25      | 85           |
| 2.    | Lee      | 15      | 25      | 30      | 8       | 78           |
| 3.    | Lars     | 15      | 20      | 35      |         | 70           |
| 4.    | Varun    | 35      | 25      | 6       |         | 66           |
| 5.    | Hossein  |         | 2       | 30      | 25      | 57           |
| 6.    | Luc      |         |         | 30      | 25      | 55           |
| 7.    | Joseph   | 8       | 10      | 11      | 10      | 39           |
| 8.    | Anuradha | 11      | 10      | 11      |         | 32           |
| 9.    | Daan     | 2       | 10      | 7       | 12      | 31           |
| 10.   | Koodal   | 1       |         | 25      |         | 26           |
| 11.   | Medhat   | 18      | 1       |         | 6       | 25           |
|       | Irene    |         | 25      |         |         | 25           |
| 13.   | Ji       | 6       |         |         | 2       | 8            |
| 14.   | Adjoa    |         |         |         | 6       | 6            |
| 15.   | Patrick  |         |         | 5       |         | 5            |
|       | Tim      |         |         | 5       |         | 5            |
| 17.   | Matthias |         | 1       |         |         | 1            |
