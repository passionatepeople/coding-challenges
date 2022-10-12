# Week 33 challenge

Write a function `sevenAteNine` which takes in a string consisting of numbers and removes every instance of 9 which finds itself between two sevens.


Examples:
```
sevenAteNine('192798') // return '192798'
sevenAteNine('192797') // return '19277'
sevenAteNine('19279797') // return '192777'
```


## Upload link

You can `/submit` your solution in Slack.

## Results

| Place | Name     | Performance | Codegolf | Vote  | Total points |
|-------|----------|-------------|----------|-------|--------------|
| 1.    | Medhat   | 25          |          |       | 25           |
| 2.    | Lee      | 18          | 5        |       | 23           |
| 3.    | Varun    | 18          |          |       | 18           |
| 4.    | Irene    | 12          |          |       | 12           |
| 5.    | Hossein  | 10          |          |       | 10           |
| 6.    | Daan     | 8           |          |       | 8            |
| 7.    | Anuradha | 6           |          |       | 6            |


### Screenshot

![2022 Week 33 podium](./podium.png)

![2022 Week 33 results](./results.png)

### Vote

Voting is ongoing. Please `/vote` in Slack.


### Full output log
```

EVALUATION STARTED:                 24/08/2022, 12:06:49
EVALUATING CHALLENGE:               2022/w33
FOUND 12 SOLUTIONS:                 anuradha1.js, daan1.js, hossein1.js, irene1.js, lee1.js, lee2.js, lee3.js, medhat1.js, medhat2.js, varun1.js, varun2.js,
                          varun3.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 10000 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   24/08/2022, 13:36:52
DURATION:                           1 hour, 30 minutes, 2.958 seconds

RANKINGS:
╔═══════╤════════╤═══════════╤══════════╤══════════╤══════════════╤══════╗
║ Place │ Points │ Name      │ Total    │ Best run │ Best compile │ Size ║
╟───────┼────────┼───────────┼──────────┼──────────┼──────────────┼──────╢
║ 1     │ 25     │ medhat2   │ 5.657ms  │ 5.606ms  │ 0.051ms      │ 434  ║
╟───────┼────────┼───────────┼──────────┼──────────┼──────────────┼──────╢
║ 2     │ 18     │ varun3    │ 6.173ms  │ 6.126ms  │ 0.047ms      │ 276  ║
╟───────┼────────┼───────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 18     │ lee3      │ 6.446ms  │ 6.409ms  │ 0.037ms      │ 46   ║
╟───────┼────────┼───────────┼──────────┼──────────┼──────────────┼──────╢
║ 4     │ 12     │ irene1    │ 6.814ms  │ 6.763ms  │ 0.051ms      │ 444  ║
╟───────┼────────┼───────────┼──────────┼──────────┼──────────────┼──────╢
║ 5     │ 10     │ hossein1  │ 7.774ms  │ 7.715ms  │ 0.059ms      │ 628  ║
╟───────┼────────┼───────────┼──────────┼──────────┼──────────────┼──────╢
║ 6     │ 8      │ daan1     │ 18.718ms │ 18.668ms │ 0.050ms      │ 314  ║
╟───────┼────────┼───────────┼──────────┼──────────┼──────────────┼──────╢
║ 7     │ 6      │ anuradha1 │ 35.686ms │ 35.630ms │ 0.055ms      │ 322  ║
╚═══════╧════════╧═══════════╧══════════╧══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              medhat1.js, varun1.js, varun2.js, lee2.js, lee1.js

CODEGOLF AWARD:                     lee3.js with 46 bytes

SYSTEM INFO:
NODE: v16.14.2
ARCH: x64
PLATFORM: linux
VERSION: #56-Ubuntu SMP Mon Oct 5 14:28:49 UTC 2020
MEMORY: 15.64GB
CPUS: 2 x Intel(R) Xeon(R) Gold 6248 CPU @ 2.50GHz
CPU speed: 2494MHz

RAW RESULTS:
┌─────────┬────────────────┬────────────────────┬────────────────────┬──────────────────────┬──────┬────────────────┬────────────────────┬──────────────┬────────┬────────────┬───────┐
│ (index) │    solution    │       total        │      bestRun       │     bestCompile      │ size │    compiled    │   validationTime   │ onlyCodegolf │ failed │ failReason │ runs  │
├─────────┼────────────────┼────────────────────┼────────────────────┼──────────────────────┼──────┼────────────────┼────────────────────┼──────────────┼────────┼────────────┼───────┤
│    0    │  'medhat2.js'  │ 5.657001000130549  │ 5.605505000101402  │ 0.05149600002914667  │ 434  │ 'successfully' │ 21.367212000001018 │    false     │ false  │    null    │ 28400 │
│    1    │  'varun3.js'   │ 6.172597999669961  │ 6.125767000004998  │ 0.04683099966496229  │ 276  │ 'successfully' │ 23.134641000000556 │    false     │ false  │    null    │ 28400 │
│    2    │  'medhat1.js'  │ 6.174073999980465  │ 6.126089999917895  │ 0.047984000062569976 │ 345  │ 'successfully' │ 22.13438699999824  │    false     │ false  │    null    │ 28400 │
│    3    │   'lee3.js'    │  6.4458759999834   │ 6.408571999985725  │ 0.03730399999767542  │  46  │ 'successfully' │ 19.316202000001795 │    false     │ false  │    null    │ 28400 │
│    4    │  'irene1.js'   │ 6.814332000212744  │  6.76319000008516  │ 0.05114200012758374  │ 444  │ 'successfully' │ 23.958263000000443 │    false     │ false  │    null    │ 28400 │
│    5    │  'varun1.js'   │  7.40100600005826  │ 7.363725000002887  │ 0.037281000055372715 │  47  │ 'successfully' │ 20.896084999996674 │    false     │ false  │    null    │ 28400 │
│    6    │ 'hossein1.js'  │ 7.773549000092316  │  7.71488899999531  │ 0.05866000009700656  │ 628  │ 'successfully' │ 25.474147999997513 │    false     │ false  │    null    │ 28400 │
│    7    │  'varun2.js'   │ 15.072446999896783 │ 15.025679000013042 │ 0.04676799988374114  │ 308  │ 'successfully' │ 23.379679000001488 │    false     │ false  │    null    │ 28400 │
│    8    │   'lee2.js'    │ 17.81392400036566  │ 17.765545000089332 │ 0.04837900027632713  │ 259  │ 'successfully' │ 113.71555799999987 │    false     │ false  │    null    │ 28400 │
│    9    │   'daan1.js'   │ 18.718068999936804 │ 18.66776300012134  │ 0.05030599981546402  │ 314  │ 'successfully' │ 43.53339699999924  │    false     │ false  │    null    │ 28400 │
│   10    │   'lee1.js'    │ 22.657338000135496 │ 22.609708999982104 │ 0.04762900015339255  │ 241  │ 'successfully' │ 29.38489800000025  │    false     │ false  │    null    │ 28400 │
│   11    │ 'anuradha1.js' │ 35.685556999989785 │ 35.63015700003598  │  0.0553999999538064  │ 322  │ 'successfully' │ 81.73501000000033  │    false     │ false  │    null    │ 28400 │
└─────────┴────────────────┴────────────────────┴────────────────────┴──────────────────────┴──────┴────────────────┴────────────────────┴──────────────┴────────┴────────────┴───────┘
```
  