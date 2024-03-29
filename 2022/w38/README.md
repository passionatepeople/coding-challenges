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

| Place | Name        | Performance | Codegolf | Vote  | Total points |
|-------|-------------|-------------|----------|-------|--------------|
| 1.    | Hossein     | 25          | 5        |       | 30           |
| 2.    | Bram Kamies | 18          |          |       | 18           |
| 3.    | Patrick     | 15          |          |       | 15           |
| 4.    | Lee         | 12          |          |       | 12           |


### Screenshot

![2022 Week 38 podium](./podium.png)

![2022 Week 38 results](./results.png)

### Vote

Voting is ongoing. Please `/vote` in Slack.


### Full output log
```

EVALUATION STARTED:                 28/09/2022, 12:06:44
EVALUATING CHALLENGE:               2022/w38
FOUND 10 SOLUTIONS:                 bramkamies1.js, bramkamies2.js, bramkamies3.js, bramkamies4.js, hossein1.js, hossein2.js, hossein3.js, lee1.js,
                          patrick1.js, patrick2.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 10000 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   28/09/2022, 13:36:48
DURATION:                           1 hour, 30 minutes, 3.054 seconds

RANKINGS:
╔═══════╤════════╤═════════════╤═════════╤══════════╤══════════════╤══════╗
║ Place │ Points │ Name        │ Total   │ Best run │ Best compile │ Size ║
╟───────┼────────┼─────────────┼─────────┼──────────┼──────────────┼──────╢
║ 1     │ 25     │ hossein2    │ 1.200ms │ 1.149ms  │ 0.050ms      │ 607  ║
╟───────┼────────┼─────────────┼─────────┼──────────┼──────────────┼──────╢
║ 2     │ 18     │ bramkamies3 │ 1.272ms │ 1.209ms  │ 0.063ms      │ 626  ║
╟───────┼────────┼─────────────┼─────────┼──────────┼──────────────┼──────╢
║ 3     │ 15     │ patrick2    │ 1.858ms │ 1.816ms  │ 0.042ms      │ 160  ║
╟───────┼────────┼─────────────┼─────────┼──────────┼──────────────┼──────╢
║ 4     │ 12     │ lee1        │ 2.046ms │ 1.997ms  │ 0.049ms      │ 617  ║
╚═══════╧════════╧═════════════╧═════════╧══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              patrick1.js, hossein1.js, bramkamies2.js, bramkamies1.js, bramkamies4.js, hossein3.js

CODEGOLF AWARD:                     hossein3.js with 113 bytes

SYSTEM INFO:
NODE: v16.14.2
ARCH: x64
PLATFORM: linux
VERSION: #56-Ubuntu SMP Mon Oct 5 14:28:49 UTC 2020
MEMORY: 15.64GB
CPUS: 2 x Intel(R) Xeon(R) Gold 6248 CPU @ 2.50GHz
CPU speed: 2494MHz

RAW RESULTS:
┌─────────┬──────────────────┬────────────────────┬────────────────────┬──────────────────────┬──────┬────────────────┬────────────────────┬──────────────┬────────┬────────────┬───────┐
│ (index) │     solution     │       total        │      bestRun       │     bestCompile      │ size │    compiled    │   validationTime   │ onlyCodegolf │ failed │ failReason │ runs  │
├─────────┼──────────────────┼────────────────────┼────────────────────┼──────────────────────┼──────┼────────────────┼────────────────────┼──────────────┼────────┼────────────┼───────┤
│    0    │  'hossein2.js'   │ 1.1996680004522204 │ 1.1491820001974702 │ 0.05048600025475025  │ 607  │ 'successfully' │ 33.40030400000251  │    false     │ false  │    null    │ 42350 │
│    1    │ 'bramkamies3.js' │ 1.272041000542231  │ 1.209499999997206  │ 0.06254100054502487  │ 626  │ 'successfully' │ 36.088684999998804 │    false     │ false  │    null    │ 42350 │
│    2    │  'patrick2.js'   │ 1.8584099999425234 │ 1.8164970000070753 │ 0.04191299993544817  │ 160  │ 'successfully' │ 30.610835000003135 │    false     │ false  │    null    │ 42350 │
│    3    │  'patrick1.js'   │ 1.8609670000441838 │ 1.816625000006752  │ 0.04434200003743172  │ 312  │ 'successfully' │ 32.458065999999235 │    false     │ false  │    null    │ 42350 │
│    4    │  'hossein1.js'   │ 1.8701809998601675 │ 1.8207560000009835 │ 0.04942499985918403  │ 523  │ 'successfully' │ 38.04128700000001  │    false     │ false  │    null    │ 42350 │
│    5    │    'lee1.js'     │ 2.0456539993174374 │ 1.9968789997510612 │ 0.04877499956637621  │ 617  │ 'successfully' │ 30.569370999997773 │    false     │ false  │    null    │ 42350 │
│    6    │ 'bramkamies2.js' │ 2.053453000029549  │ 1.9214959999080747 │ 0.13195700012147427  │ 994  │ 'successfully' │ 48.550256000002264 │    false     │ false  │    null    │ 42350 │
│    7    │ 'bramkamies1.js' │ 2.0939049998414703 │ 2.0480519998818636 │ 0.04585299995960668  │ 452  │ 'successfully' │ 64.42453399999795  │    false     │ false  │    null    │ 42350 │
│    8    │ 'bramkamies4.js' │ 2.223348999978043  │  2.18345400004182  │ 0.03989499993622303  │ 114  │ 'successfully' │ 155.2028309999987  │    false     │ false  │    null    │ 42350 │
│    9    │  'hossein3.js'   │  8.74812700007169  │  8.7050040000031   │ 0.043123000068590045 │ 113  │ 'successfully' │ 66.28793600000063  │    false     │ false  │    null    │ 42350 │
└─────────┴──────────────────┴────────────────────┴────────────────────┴──────────────────────┴──────┴────────────────┴────────────────────┴──────────────┴────────┴────────────┴───────┘
```
  