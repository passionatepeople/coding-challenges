# Week 34 challenge

Write a function `amIHollow` which takes in an array of numbers and returns if that array can be considered "hollow". For this challenge a "hollow" array is one which has at least three zeros in the middle, and on both sides equal amount of non-zero numbers.


Examples:
```
amIHollow([1,1,1]) // return false
amIHollow([1,0,0,0,1]) // return true
amIHollow([7,0,0,0,-9]) // return true
amIHollow([7,0,0,0,-9,5]) // return false
amIHollow([7,0,0,-9]) // return false
amIHollow([0,0,0]) // return true
```


## Upload link

You can `/submit` your solution in Slack.

## Results

| Place | Name        | Performance | Codegolf | Vote  | Total points |
|-------|-------------|-------------|----------|-------|--------------|
| 1.    | Hossein     | 25          | 5        |       | 30           |
| 2.    | Irene       | 25          |          |       | 25           |
|       | Medhat      | 25          |          |       | 25           |
| 4.    | Bram Kamies | 12          |          |       | 12           |
| 5.    | Varun       | 10          |          |       | 10           |
| 6.    | Lee         | 8           |          |       | 8            |


### Screenshot

![2022 Week 34 podium](./podium.png)

![2022 Week 34 results](./results.png)

### Vote

Voting is ongoing. Please `/vote` in Slack.


### Full output log
```

EVALUATION STARTED:                 31/08/2022, 12:06:50
EVALUATING CHALLENGE:               2022/w34
FOUND 10 SOLUTIONS:                 bramkamies1.js, bramkamies2.js, hossein1.js, hossein2.js, irene1.js, lee1.js, lee2.js, medhat1.js, medhat2.js, varun1.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 10000 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   31/08/2022, 13:36:50
DURATION:                           1 hour, 29 minutes, 59.206 seconds

RANKINGS:
╔═══════╤════════╤═════════════╤═════════╤══════════╤══════════════╤══════╗
║ Place │ Points │ Name        │ Total   │ Best run │ Best compile │ Size ║
╟───────┼────────┼─────────────┼─────────┼──────────┼──────────────┼──────╢
║ 1     │ 25     │ irene1      │ 0.905ms │ 0.850ms  │ 0.055ms      │ 1022 ║
╟───────┼────────┼─────────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 25     │ medhat2     │ 0.908ms │ 0.858ms  │ 0.050ms      │ 609  ║
╟───────┼────────┼─────────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 25     │ hossein1    │ 0.927ms │ 0.878ms  │ 0.049ms      │ 607  ║
╟───────┼────────┼─────────────┼─────────┼──────────┼──────────────┼──────╢
║ 4     │ 12     │ bramkamies2 │ 0.957ms │ 0.908ms  │ 0.049ms      │ 688  ║
╟───────┼────────┼─────────────┼─────────┼──────────┼──────────────┼──────╢
║ 5     │ 10     │ varun1      │ 1.552ms │ 1.502ms  │ 0.050ms      │ 573  ║
╟───────┼────────┼─────────────┼─────────┼──────────┼──────────────┼──────╢
║ 6     │ 8      │ lee2        │ 2.018ms │ 1.976ms  │ 0.042ms      │ 341  ║
╚═══════╧════════╧═════════════╧═════════╧══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              medhat1.js, bramkamies1.js, lee1.js, hossein2.js

CODEGOLF AWARD:                     hossein2.js with 61 bytes

SYSTEM INFO:
NODE: v16.14.2
ARCH: x64
PLATFORM: linux
VERSION: #56-Ubuntu SMP Mon Oct 5 14:28:49 UTC 2020
MEMORY: 15.64GB
CPUS: 2 x Intel(R) Xeon(R) Gold 6248 CPU @ 2.50GHz
CPU speed: 2494MHz

RAW RESULTS:
┌─────────┬──────────────────┬────────────────────┬────────────────────┬──────────────────────┬──────┬────────────────┬────────────────────┬──────────────┬────────┬────────────┬────────┐
│ (index) │     solution     │       total        │      bestRun       │     bestCompile      │ size │    compiled    │   validationTime   │ onlyCodegolf │ failed │ failReason │  runs  │
├─────────┼──────────────────┼────────────────────┼────────────────────┼──────────────────────┼──────┼────────────────┼────────────────────┼──────────────┼────────┼────────────┼────────┤
│    0    │   'irene1.js'    │  0.90534300004947  │ 0.8503150000469759 │ 0.05502800000249408  │ 1022 │ 'successfully' │ 64.53420199999891  │    false     │ false  │    null    │ 179400 │
│    1    │   'medhat2.js'   │ 0.908439000020735  │ 0.858183000003919  │ 0.05025600001681596  │ 609  │ 'successfully' │  59.0490690000006  │    false     │ false  │    null    │ 179400 │
│    2    │  'hossein1.js'   │ 0.9273549999343231 │ 0.8780059999553487 │ 0.04934899997897446  │ 607  │ 'successfully' │ 61.18758499999967  │    false     │ false  │    null    │ 179400 │
│    3    │   'medhat1.js'   │ 0.9437790000229143 │ 0.8958540000021458 │ 0.04792500002076849  │ 472  │ 'successfully' │ 57.61492100000032  │    false     │ false  │    null    │ 179400 │
│    4    │ 'bramkamies2.js' │ 0.9568159999325871 │  0.90763299993705  │  0.0491829999955371  │ 688  │ 'successfully' │ 73.72636000000057  │    false     │ false  │    null    │ 179400 │
│    5    │ 'bramkamies1.js' │ 0.9663379999110475 │ 0.9199350000126287 │ 0.046402999898418784 │ 526  │ 'successfully' │ 104.16970599999695 │    false     │ false  │    null    │ 179400 │
│    6    │   'varun1.js'    │ 1.551614000054542  │ 1.5016040000482462 │ 0.05001000000629574  │ 573  │ 'successfully' │ 57.136138999998366 │    false     │ false  │    null    │ 179400 │
│    7    │    'lee2.js'     │ 2.0183719999622554 │ 1.9760640000458807 │ 0.04230799991637468  │ 341  │ 'successfully' │ 57.010668999999325 │    false     │ false  │    null    │ 179400 │
│    8    │    'lee1.js'     │ 2.0207719999889378 │ 1.983313000004273  │ 0.03745899998466484  │ 102  │ 'successfully' │ 72.66700800000035  │    false     │ false  │    null    │ 179400 │
│    9    │  'hossein2.js'   │ 9.973875000025146  │  9.93797299999278  │ 0.03590200003236532  │  61  │ 'successfully' │ 79.48372899999958  │    false     │ false  │    null    │ 179400 │
└─────────┴──────────────────┴────────────────────┴────────────────────┴──────────────────────┴──────┴────────────────┴────────────────────┴──────────────┴────────┴────────────┴────────┘
```
  