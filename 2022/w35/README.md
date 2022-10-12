# Week 35 challenge

Write a function `txtEditor` which takes in a string representing text. In this particular format backspace is encoded as `"#"`, so `"abcd##ef"` actually means `"abef"`


Examples:
```
txtEditor('abcd##ef') // return 'abef'
txtEditor('abcd#ef') // return 'abcef'
txtEditor('abcdef') // return 'abcdef'
```


## Upload link

You can `/submit` your solution in Slack.

## Results

| Place | Name         | Performance | Codegolf | Vote  | Total points |
|-------|--------------|-------------|----------|-------|--------------|
| 1.    | Tom Atterton | 25          | 5        |       | 30           |
|       | Varun        | 25          | 5        |       | 30           |
|       | Bram Kamies  | 25          | 5        |       | 30           |
|       | Hossein      | 25          | 5        |       | 30           |
|       | Medhat       | 25          | 5        |       | 30           |
|       | Lee          | 25          | 5        |       | 30           |
| 7.    | Daniel       | 6           |          |       | 6            |


### Screenshot

![2022 Week 35 podium](./podium.png)

![2022 Week 35 results](./results.png)

### Vote

Voting is ongoing. Please `/vote` in Slack.


### Full output log
```

EVALUATION STARTED:                 07/09/2022, 12:06:51
EVALUATING CHALLENGE:               2022/w35
FOUND 17 SOLUTIONS:                 bramkamies1.js, bramkamies2.js, bramkamies3.js, bramkamies4.js, daniel1.js, hossein1.js, lee1.js, lee2.js, medhat1.js,
                          tomatterton1.js, tomatterton2.js, tomatterton3.js, tomatterton4.js, tomatterton5.js, varun1.js, varun2.js, varun3.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 10000 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   07/09/2022, 13:36:56
DURATION:                           1 hour, 30 minutes, 3.375 seconds

RANKINGS:
╔═══════╤════════╤══════════════╤══════════╤══════════╤══════════════╤══════╗
║ Place │ Points │ Name         │ Total    │ Best run │ Best compile │ Size ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║ 1     │ 25     │ tomatterton5 │ 4.986ms  │ 4.948ms  │ 0.038ms      │ 37   ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 25     │ varun3       │ 5.043ms  │ 5.005ms  │ 0.038ms      │ 37   ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 25     │ bramkamies4  │ 5.061ms  │ 5.023ms  │ 0.038ms      │ 37   ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 25     │ hossein1     │ 5.062ms  │ 5.024ms  │ 0.038ms      │ 37   ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 25     │ medhat1      │ 5.070ms  │ 5.033ms  │ 0.038ms      │ 37   ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 25     │ lee2         │ 5.083ms  │ 5.045ms  │ 0.038ms      │ 37   ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║ 7     │ 6      │ daniel1      │ 21.637ms │ 21.581ms │ 0.056ms      │ 250  ║
╚═══════╧════════╧══════════════╧══════════╧══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              tomatterton4.js, lee1.js, bramkamies3.js, tomatterton1.js, varun2.js, bramkamies1.js

ONLY CODEGOLF SOLUTIONS:            bramkamies2.js, tomatterton2.js, tomatterton3.js, varun1.js

CODEGOLF AWARD:                     bramkamies4.js, hossein1.js, lee2.js, medhat1.js, tomatterton5.js, varun3.js with 37 bytes

SYSTEM INFO:
NODE: v16.14.2
ARCH: x64
PLATFORM: linux
VERSION: #56-Ubuntu SMP Mon Oct 5 14:28:49 UTC 2020
MEMORY: 15.64GB
CPUS: 2 x Intel(R) Xeon(R) Gold 6248 CPU @ 2.50GHz
CPU speed: 2494MHz

RAW RESULTS:
┌─────────┬───────────────────┬────────────────────┬────────────────────┬──────────────────────┬──────┬────────────────┬────────────────────┬──────────────┬────────┬────────────┬───────┐
│ (index) │     solution      │       total        │      bestRun       │     bestCompile      │ size │    compiled    │   validationTime   │ onlyCodegolf │ failed │ failReason │ runs  │
├─────────┼───────────────────┼────────────────────┼────────────────────┼──────────────────────┼──────┼────────────────┼────────────────────┼──────────────┼────────┼────────────┼───────┤
│    0    │ 'tomatterton5.js' │ 4.986208999995142  │ 4.948412999976426  │ 0.03779600001871586  │  37  │ 'successfully' │ 16.935842999999295 │    false     │ false  │    null    │ 45300 │
│    1    │    'varun3.js'    │ 5.043300999794155  │ 5.005038999952376  │ 0.03826199984177947  │  37  │ 'successfully' │ 15.88369800000146  │    false     │ false  │    null    │ 45300 │
│    2    │ 'bramkamies4.js'  │ 5.060867000371218  │ 5.023137000389397  │ 0.03772999998182058  │  37  │ 'successfully' │ 21.623622999999498 │    false     │ false  │    null    │ 45300 │
│    3    │   'hossein1.js'   │ 5.0624100000131875 │ 5.024489999981597  │ 0.03792000003159046  │  37  │ 'successfully' │ 15.331788999999844 │    false     │ false  │    null    │ 45300 │
│    4    │   'medhat1.js'    │ 5.070316000084858  │ 5.032664000056684  │ 0.03765200002817437  │  37  │ 'successfully' │ 14.673503999998502 │    false     │ false  │    null    │ 45300 │
│    5    │     'lee2.js'     │  5.08324200019706  │ 5.045280000194907  │ 0.03796200000215322  │  37  │ 'successfully' │ 14.371368000000075 │    false     │ false  │    null    │ 45300 │
│    6    │ 'tomatterton4.js' │ 5.392223000060767  │  5.35489400010556  │ 0.03732899995520711  │  38  │ 'successfully' │ 18.670343000001594 │    false     │ false  │    null    │ 45300 │
│    7    │     'lee1.js'     │  5.46721899977274  │ 5.429301999996824  │ 0.03791699977591634  │  40  │ 'successfully' │ 14.625088000000687 │    false     │ false  │    null    │ 45300 │
│    8    │ 'bramkamies3.js'  │ 6.087932999857003  │ 6.037618999980623  │ 0.05031399987637997  │ 371  │ 'successfully' │ 27.23818499999834  │    false     │ false  │    null    │ 45300 │
│    9    │ 'tomatterton1.js' │ 7.248884000116959  │ 7.190609000157565  │ 0.058274999959394336 │ 442  │ 'successfully' │ 25.021584999998595 │    false     │ false  │    null    │ 45300 │
│   10    │    'varun2.js'    │ 7.300509999971837  │ 7.258411000017077  │ 0.042098999954760075 │  81  │ 'successfully' │ 19.280660999997053 │    false     │ false  │    null    │ 45300 │
│   11    │ 'bramkamies1.js'  │ 8.626627000048757  │ 8.567001999821514  │ 0.05962500022724271  │ 289  │ 'successfully' │ 44.055946999997104 │    false     │ false  │    null    │ 45300 │
│   12    │   'daniel1.js'    │ 21.637142999912612 │ 21.580981999984942 │ 0.056160999927669764 │ 250  │ 'successfully' │ 44.75024100000155  │    false     │ false  │    null    │ 45300 │
│   13    │ 'bramkamies2.js'  │        null        │        null        │         null         │  55  │ 'successfully' │ 69.75005500000043  │     true     │ false  │    null    │   0   │
│   14    │ 'tomatterton2.js' │        null        │        null        │         null         │  56  │ 'successfully' │ 37.941163999999844 │     true     │ false  │    null    │   0   │
│   15    │ 'tomatterton3.js' │        null        │        null        │         null         │  53  │ 'successfully' │ 84.08315500000026  │     true     │ false  │    null    │   0   │
│   16    │    'varun1.js'    │        null        │        null        │         null         │  58  │ 'successfully' │ 54.91076299999986  │     true     │ false  │    null    │   0   │
└─────────┴───────────────────┴────────────────────┴────────────────────┴──────────────────────┴──────┴────────────────┴────────────────────┴──────────────┴────────┴────────────┴───────┘
```
  