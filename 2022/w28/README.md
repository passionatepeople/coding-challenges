# Week 28 challenge

Write a function `thingsBetweenUs` which accepts two IP addresses and returns the number of addresses between them.


Examples:
```
thingsBetweenUs('80.50.1.50', '80.50.1.52') // return 1
thingsBetweenUs('80.50.2.0', '80.50.2.100') // return 99
```


## Upload link

You can `/submit` your solution in Slack.

## Results

| Place | Name        | Performance | Codegolf | Vote  | Total points |
|-------|-------------|-------------|----------|-------|--------------|
| 1.    | Hossein     | 25          | 5        |       | 30           |
| 2.    | Bram Kamies | 25          |          |       | 25           |
| 3.    | Varun       | 15          |          |       | 15           |
| 4.    | Devin       | 12          |          |       | 12           |
| 5.    | Lee         | 10          |          |       | 10           |
|       | Anuradha    | 10          |          |       | 10           |


### Screenshot

![2022 Week 28 podium](./podium.png)

![2022 Week 28 results](./results.png)

### Vote

Voting is ongoing. Please `/vote` in Slack.


### Full output log
```
EVALUATION STARTED:                 20/07/2022, 12:06:42
EVALUATING CHALLENGE:               2022/w28
FOUND 9 SOLUTIONS:                  anuradha1.js, bramkamies1.js, bramkamies2.js, bramkamies3.js, devin1.js, hossein1.js, hossein2.js, lee1.js, varun1.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 10000 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   20/07/2022, 13:36:42
DURATION:                           1 hour, 30 minutes, 0.737 seconds

RANKINGS:
╔═══════╤════════╤═════════════╤══════════╤══════════╤══════════════╤══════╗
║ Place │ Points │ Name        │ Total    │ Best run │ Best compile │ Size ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 1     │ 25     │ bramkamies3 │ 1.823ms  │ 1.763ms  │ 0.060ms      │ 962  ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 25     │ hossein1    │ 1.909ms  │ 1.852ms  │ 0.057ms      │ 500  ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 3     │ 15     │ varun1      │ 6.967ms  │ 6.904ms  │ 0.063ms      │ 835  ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 4     │ 12     │ devin1      │ 9.807ms  │ 9.760ms  │ 0.047ms      │ 283  ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 5     │ 10     │ lee1        │ 12.214ms │ 12.161ms │ 0.052ms      │ 225  ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 10     │ anuradha1   │ 12.613ms │ 12.559ms │ 0.054ms      │ 304  ║
╚═══════╧════════╧═════════════╧══════════╧══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              bramkamies2.js, hossein2.js, bramkamies1.js

CODEGOLF AWARD:                     hossein2.js with 75 bytes

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
│    0    │ 'bramkamies3.js' │ 1.8230570005252957 │ 1.762909000273794  │  0.0601480002515018  │ 962  │ 'successfully' │ 12.307240000001912 │    false     │ false  │    null    │ 55850 │
│    1    │  'hossein1.js'   │ 1.9089650000387337 │ 1.8522880000527948 │ 0.05667699998593889  │ 500  │ 'successfully' │ 14.187410000002274 │    false     │ false  │    null    │ 55850 │
│    2    │ 'bramkamies2.js' │  5.71008999994956  │ 5.655430000042543  │ 0.054659999907016754 │ 511  │ 'successfully' │ 13.905037999997148 │    false     │ false  │    null    │ 55850 │
│    3    │   'varun1.js'    │ 6.966848999960348  │ 6.903921999968588  │ 0.06292699999175966  │ 835  │ 'successfully' │ 22.37514299999748  │    false     │ false  │    null    │ 55850 │
│    4    │   'devin1.js'    │ 9.806861999968532  │ 9.759748000011314  │ 0.047113999957218766 │ 283  │ 'successfully' │ 30.32157400000142  │    false     │ false  │    null    │ 55850 │
│    5    │    'lee1.js'     │ 12.213708000141196 │ 12.16137600003276  │ 0.05233200010843575  │ 225  │ 'successfully' │ 23.717263999998977 │    false     │ false  │    null    │ 55850 │
│    6    │  'anuradha1.js'  │ 12.612667000154033 │ 12.558778000064194 │  0.0538890000898391  │ 304  │ 'successfully' │ 39.45522699999856  │    false     │ false  │    null    │ 55850 │
│    7    │  'hossein2.js'   │ 16.107508999994025 │ 16.06300799991004  │ 0.044501000083982944 │  75  │ 'successfully' │ 28.785157999998773 │    false     │ false  │    null    │ 55850 │
│    8    │ 'bramkamies1.js' │ 16.48021900007734  │ 16.43617499998072  │ 0.04404400009661913  │  80  │ 'successfully' │ 53.312825000000885 │    false     │ false  │    null    │ 55850 │
└─────────┴──────────────────┴────────────────────┴────────────────────┴──────────────────────┴──────┴────────────────┴────────────────────┴──────────────┴────────┴────────────┴───────┘
```
  
