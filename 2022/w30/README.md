# Week 30 challenge

Write a function `whatsMyName` which takes in a full URL and returns just the domain name. 

Examples:
```
whatsMyName('http://amazon.com/foo/bar') // return "amazon"
whatsMyName('http://www.tasty-foods.com') // return "tasty-foods"
whatsMyName('https://www.zombo.com/') // return "zombo"
```


## Upload link

You can `/submit` your solution in Slack.

## Results

| Place | Name     | Performance | Codegolf | Vote  | Total points |
|-------|----------|-------------|----------|-------|--------------|
| 1.    | Hossein  | 25          | 5        |       | 30           |
| 2.    | Lee      | 18          |          |       | 18           |
| 3.    | Varun    | 15          |          |       | 15           |
| 4.    | Medhat   | 12          |          |       | 12           |
| 5.    | Anuradha | 10          |          |       | 10           |


### Screenshot

![2022 Week 30 podium](./podium.png)

![2022 Week 30 results](./results.png)

### Vote

Voting is ongoing. Please `/vote` in Slack.


### Full output log
```

EVALUATION STARTED:                 03/08/2022, 12:06:51
EVALUATING CHALLENGE:               2022/w30
FOUND 10 SOLUTIONS:                 anuradha1.js, anuradha2.js, anuradha3.js, hossein1.js, hossein2.js, lee1.js, medhat1.js, medhat2.js, medhat3.js,
                          varun1.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 10000 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   03/08/2022, 13:36:54
DURATION:                           1 hour, 30 minutes, 1.868 seconds

RANKINGS:
╔═══════╤════════╤═══════════╤═════════╤══════════╤══════════════╤══════╗
║ Place │ Points │ Name      │ Total   │ Best run │ Best compile │ Size ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║ 1     │ 25     │ hossein1  │ 1.584ms │ 1.532ms  │ 0.052ms      │ 478  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║ 2     │ 18     │ lee1      │ 1.858ms │ 1.812ms  │ 0.045ms      │ 351  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║ 3     │ 15     │ varun1    │ 2.349ms │ 2.295ms  │ 0.054ms      │ 530  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║ 4     │ 12     │ medhat3   │ 6.847ms │ 6.804ms  │ 0.043ms      │ 175  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║ 5     │ 10     │ anuradha2 │ 8.122ms │ 8.073ms  │ 0.050ms      │ 300  ║
╚═══════╧════════╧═══════════╧═════════╧══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              medhat2.js, anuradha1.js, anuradha3.js, medhat1.js, hossein2.js

CODEGOLF AWARD:                     hossein2.js with 56 bytes

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
│    0    │ 'hossein1.js'  │ 1.5841999999247491 │ 1.5317400000058115 │ 0.05245999991893768  │ 478  │ 'successfully' │ 10.245234000001801 │    false     │ false  │    null    │ 70100 │
│    1    │   'lee1.js'    │ 1.8575279998476617 │ 1.8124139999854378 │ 0.045113999862223864 │ 351  │ 'successfully' │ 11.531296999997721 │    false     │ false  │    null    │ 70100 │
│    2    │  'varun1.js'   │ 2.348557000281289  │ 2.294977000216022  │ 0.053580000065267086 │ 530  │ 'successfully' │ 9.152840999999171  │    false     │ false  │    null    │ 70100 │
│    3    │  'medhat3.js'  │ 6.846810999792069  │ 6.804310000035912  │  0.0425009997561574  │ 175  │ 'successfully' │ 14.467814999999973 │    false     │ false  │    null    │ 70100 │
│    4    │  'medhat2.js'  │ 6.862528000725433  │ 6.819929999997839  │  0.0425980007275939  │ 189  │ 'successfully' │ 15.493875000000116 │    false     │ false  │    null    │ 70100 │
│    5    │ 'anuradha2.js' │ 8.122303000185639  │ 8.072759000118822  │ 0.04954400006681681  │ 300  │ 'successfully' │ 25.323803000002954 │    false     │ false  │    null    │ 70100 │
│    6    │ 'anuradha1.js' │ 8.273078999714926  │ 8.229384999955073  │ 0.043693999759852886 │ 245  │ 'successfully' │ 28.98523700000078  │    false     │ false  │    null    │ 70100 │
│    7    │ 'anuradha3.js' │ 8.685732000041753  │ 8.645579000003636  │ 0.04015300003811717  │  77  │ 'successfully' │ 27.37406899999769  │    false     │ false  │    null    │ 70100 │
│    8    │  'medhat1.js'  │  8.87402300001122  │ 8.830482000019401  │ 0.04354099999181926  │ 162  │ 'successfully' │ 22.99432799999704  │    false     │ false  │    null    │ 70100 │
│    9    │ 'hossein2.js'  │ 10.231047000037506 │ 10.19274999992922  │ 0.03829700010828674  │  56  │ 'successfully' │ 17.18254700000034  │    false     │ false  │    null    │ 70100 │
└─────────┴────────────────┴────────────────────┴────────────────────┴──────────────────────┴──────┴────────────────┴────────────────────┴──────────────┴────────┴────────────┴───────┘
```
  