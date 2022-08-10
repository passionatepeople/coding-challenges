# Week 31 challenge

Write a function `bumpMe` which takes in a string and if it finds a number at its end, it increases the count by 1. If not, then it adds number 1 at the end.

Note: It also takes into account any prepended zeros.


Examples:
```
bumpMe('foobar4') // return 'foobar5'
bumpMe('bazbar') // return 'bazbar1'
bumpMe('barbaz0051') // return 'barbaz0052'
```


## Upload link

You can `/submit` your solution in Slack.

## Results

| Place | Name     | Performance | Codegolf | Vote  | Total points |
|-------|----------|-------------|----------|-------|--------------|
| 1.    | Hossein  | 25          |          |       | 25           |
|       | Lee      | 25          |          |       | 25           |
| 3.    | Varun    | 15          |          |       | 15           |
| 4.    | Medhat   | 12          |          |       | 12           |
| 5.    | Joseph   | 6           | 5        |       | 11           |
| 6.    | Anuradha | 10          |          |       | 10           |
| 7.    | Devin    | 8           |          |       | 8            |


### Screenshot

![2022 Week 31 podium](./podium.png)

![2022 Week 31 results](./results.png)

### Vote

Voting is ongoing. Please `/vote` in Slack.


### Full output log
```

EVALUATION STARTED:                 10/08/2022, 12:06:55
EVALUATING CHALLENGE:               2022/w31
FOUND 10 SOLUTIONS:                 anuradha1.js, devin1.js, hossein1.js, hossein2.js, joseph1.js, lee1.js, lee2.js, medhat1.js, varun1.js, varun2.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 10000 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   10/08/2022, 13:36:56
DURATION:                           1 hour, 30 minutes, 1.303 seconds

RANKINGS:
╔═══════╤════════╤═══════════╤═════════╤══════════╤══════════════╤══════╗
║ Place │ Points │ Name      │ Total   │ Best run │ Best compile │ Size ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║ 1     │ 25     │ hossein1  │ 1.211ms │ 1.156ms  │ 0.055ms      │ 531  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 25     │ lee2      │ 1.240ms │ 1.181ms  │ 0.059ms      │ 689  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║ 3     │ 15     │ varun1    │ 1.484ms │ 1.437ms  │ 0.047ms      │ 284  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║ 4     │ 12     │ medhat1   │ 3.061ms │ 3.019ms  │ 0.042ms      │ 112  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║ 5     │ 10     │ anuradha1 │ 4.715ms │ 4.658ms  │ 0.058ms      │ 638  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║ 6     │ 8      │ devin1    │ 5.735ms │ 5.688ms  │ 0.047ms      │ 240  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║ 7     │ 6      │ joseph1   │ 6.469ms │ 6.430ms  │ 0.040ms      │ 54   ║
╚═══════╧════════╧═══════════╧═════════╧══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              lee1.js, hossein2.js

ONLY CODEGOLF SOLUTIONS:            varun2.js

CODEGOLF AWARD:                     joseph1.js with 54 bytes

SYSTEM INFO:
NODE: v16.14.2
ARCH: x64
PLATFORM: linux
VERSION: #56-Ubuntu SMP Mon Oct 5 14:28:49 UTC 2020
MEMORY: 15.64GB
CPUS: 2 x Intel(R) Xeon(R) Gold 6248 CPU @ 2.50GHz
CPU speed: 2494MHz

RAW RESULTS:
┌─────────┬────────────────┬────────────────────┬────────────────────┬──────────────────────┬──────┬────────────────┬────────────────────┬──────────────┬────────┬────────────┬────────┐
│ (index) │    solution    │       total        │      bestRun       │     bestCompile      │ size │    compiled    │   validationTime   │ onlyCodegolf │ failed │ failReason │  runs  │
├─────────┼────────────────┼────────────────────┼────────────────────┼──────────────────────┼──────┼────────────────┼────────────────────┼──────────────┼────────┼────────────┼────────┤
│    0    │ 'hossein1.js'  │ 1.2107989995274693 │ 1.1557779998984188 │ 0.05502099962905049  │ 531  │ 'successfully' │ 18.99292300000161  │    false     │ false  │    null    │ 122850 │
│    1    │   'lee2.js'    │ 1.2395620001479983 │ 1.1810010001063347 │ 0.05856100004166365  │ 689  │ 'successfully' │ 13.585978999999497 │    false     │ false  │    null    │ 122850 │
│    2    │  'varun1.js'   │ 1.4844899997115135 │ 1.4373739995062351 │  0.0471160002052784  │ 284  │ 'successfully' │ 9.340556999999535  │    false     │ false  │    null    │ 122850 │
│    3    │   'lee1.js'    │ 1.5458410001956508 │ 1.4948580001946539 │ 0.05098300000099698  │ 533  │ 'successfully' │ 16.576947000001383 │    false     │ false  │    null    │ 122850 │
│    4    │  'medhat1.js'  │ 3.0611139999018633 │ 3.0188529998995364 │ 0.04226100000232691  │ 112  │ 'successfully' │ 20.268063999999868 │    false     │ false  │    null    │ 122850 │
│    5    │ 'anuradha1.js' │ 4.715383999486221  │ 4.657618999481201  │ 0.05776500000501983  │ 638  │ 'successfully' │ 50.42254800000228  │    false     │ false  │    null    │ 122850 │
│    6    │  'devin1.js'   │ 5.735010999720544  │ 5.688031999859959  │ 0.046978999860584736 │ 240  │ 'successfully' │ 34.452141999998275 │    false     │ false  │    null    │ 122850 │
│    7    │  'joseph1.js'  │ 6.4694189998772345 │ 6.429836999996041  │ 0.03958199988119304  │  54  │ 'successfully' │ 21.03453300000183  │    false     │ false  │    null    │ 122850 │
│    8    │ 'hossein2.js'  │  6.81047900026897  │  6.77198400022462  │ 0.03849500004434958  │  63  │ 'successfully' │ 17.090001999997185 │    false     │ false  │    null    │ 122850 │
│    9    │  'varun2.js'   │        null        │        null        │         null         │  99  │ 'successfully' │ 8.976040999998077  │     true     │ false  │    null    │   0    │
└─────────┴────────────────┴────────────────────┴────────────────────┴──────────────────────┴──────┴────────────────┴────────────────────┴──────────────┴────────┴────────────┴────────┘
```
  