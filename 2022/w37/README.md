# Week 37 challenge

Write a function `ranking` which takes in an array of numbers and returns an array representing their ranks.
Ties are awarded the same rank, but the following ranks take into account how many numbers preceded them. For example
`[1, 2, 3]` results into `[3, 2, 1]`, but `[1, 2, 2, 3]` results into `[4, 2, 2, 1]`



Examples:
```
ranking([1, 2, 3]) // return [3, 2, 1]
ranking([1, 2, 2, 3]) // return [4, 2, 2, 1]
```


## Upload link

You can `/submit` your solution in Slack.

## Results

| Place | Name         | Performance | Codegolf | Vote  | Total points |
|-------|--------------|-------------|----------|-------|--------------|
| 1.    | Bram Kamies  | 25          | 5        | 5     | 35           |
| 2.    | Hossein      | 18          | 5        |       | 23           |
| 3.    | Tom Atterton | 15          |          |       | 15           |
|       | Patrick      | 15          |          |       | 15           |
| 5.    | Lee          | 10          |          |       | 10           |


### Screenshot

![2022 Week 37 podium](./podium.png)

![2022 Week 37 results](./results.png)

### Vote

```
╔═════════╤═════════════╤════════════════════════════════════════╗
║ Name    │ Vote        │ Comment                                ║
╟─────────┼─────────────┼────────────────────────────────────────╢
║ hossein │ bramkamies3 │ almost 1K ;) well done with quick sort ║
╚═════════╧═════════════╧════════════════════════════════════════╝
```


### Full output log
```

EVALUATION STARTED:                 21/09/2022, 12:06:44
EVALUATING CHALLENGE:               2022/w37
FOUND 9 SOLUTIONS:                  bramkamies1.js, bramkamies2.js, bramkamies3.js, hossein1.js, hossein2.js, lee1.js, patrick1.js, patrick2.js,
                          tomatterton1.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 10000 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   21/09/2022, 13:36:49
DURATION:                           1 hour, 30 minutes, 4.365 seconds

RANKINGS:
╔═══════╤════════╤══════════════╤══════════╤══════════╤══════════════╤══════╗
║ Place │ Points │ Name         │ Total    │ Best run │ Best compile │ Size ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║ 1     │ 25     │ bramkamies3  │ 31.029ms │ 30.960ms │ 0.069ms      │ 942  ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║ 2     │ 18     │ hossein2     │ 44.143ms │ 44.083ms │ 0.060ms      │ 495  ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║ 3     │ 15     │ tomatterton1 │ 56.736ms │ 56.686ms │ 0.050ms      │ 241  ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 15     │ patrick2     │ 59.478ms │ 59.425ms │ 0.052ms      │ 186  ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║ 5     │ 10     │ lee1         │ 80.480ms │ 80.418ms │ 0.061ms      │ 360  ║
╚═══════╧════════╧══════════════╧══════════╧══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              patrick1.js, bramkamies1.js, bramkamies2.js, hossein1.js

CODEGOLF AWARD:                     bramkamies2.js, hossein1.js with 53 bytes

SYSTEM INFO:
NODE: v16.14.2
ARCH: x64
PLATFORM: linux
VERSION: #56-Ubuntu SMP Mon Oct 5 14:28:49 UTC 2020
MEMORY: 15.64GB
CPUS: 2 x Intel(R) Xeon(R) Gold 6248 CPU @ 2.50GHz
CPU speed: 2494MHz

RAW RESULTS:
┌─────────┬───────────────────┬────────────────────┬────────────────────┬──────────────────────┬──────┬────────────────┬────────────────────┬──────────────┬────────┬────────────┬──────┐
│ (index) │     solution      │       total        │      bestRun       │     bestCompile      │ size │    compiled    │   validationTime   │ onlyCodegolf │ failed │ failReason │ runs │
├─────────┼───────────────────┼────────────────────┼────────────────────┼──────────────────────┼──────┼────────────────┼────────────────────┼──────────────┼────────┼────────────┼──────┤
│    0    │ 'bramkamies3.js'  │ 31.029182999860495 │ 30.959819999989122 │ 0.06936299987137318  │ 942  │ 'successfully' │ 153.45976000000155 │    false     │ false  │    null    │ 9350 │
│    1    │   'hossein2.js'   │ 44.143226999934996 │ 44.08318099999451  │ 0.06004599994048476  │ 495  │ 'successfully' │  168.119791000001  │    false     │ false  │    null    │ 9350 │
│    2    │ 'tomatterton1.js' │ 56.73603200004436  │ 56.685662999982014 │ 0.05036900006234646  │ 241  │ 'successfully' │ 182.22674600000028 │    false     │ false  │    null    │ 9350 │
│    3    │   'patrick2.js'   │ 59.477764000184834 │ 59.42544599995017  │ 0.052318000234663486 │ 186  │ 'successfully' │ 192.94842099999732 │    false     │ false  │    null    │ 9350 │
│    4    │   'patrick1.js'   │ 59.95422999933362  │ 59.899670999497175 │ 0.054558999836444855 │ 340  │ 'successfully' │ 191.3201740000004  │    false     │ false  │    null    │ 9350 │
│    5    │ 'bramkamies1.js'  │ 61.29865399969276  │  61.2327369999839  │ 0.06591699970886111  │ 446  │ 'successfully' │     207.177463     │    false     │ false  │    null    │ 9350 │
│    6    │ 'bramkamies2.js'  │  66.7069589998573  │ 66.63686299975961  │ 0.07009600009769201  │  53  │ 'successfully' │ 412.1546500000004  │    false     │ false  │    null    │ 9350 │
│    7    │   'hossein1.js'   │ 72.18188400068902  │ 72.11323799999082  │ 0.06864600069820881  │  53  │ 'successfully' │ 407.9879860000001  │    false     │ false  │    null    │ 9350 │
│    8    │     'lee1.js'     │ 80.47986200079322  │ 80.41849600058049  │ 0.06136600021272898  │ 360  │ 'successfully' │ 194.66670100000192 │    false     │ false  │    null    │ 9350 │
└─────────┴───────────────────┴────────────────────┴────────────────────┴──────────────────────┴──────┴────────────────┴────────────────────┴──────────────┴────────┴────────────┴──────┘
```
  