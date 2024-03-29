# Week 32 challenge

Write a function `popularityContest` which takes in an array of numbers and returns a sorted result with more frequent numbers sorted first. If different numbers have the same frequency lower ones come first.


Examples:
```
popularityContest([1, 2, 1, 7]) // return [1, 1, 2, 7]
popularityContest([5, 8, 4, 2]) // return [2, 4, 5, 8]
```


## Upload link

You can `/submit` your solution in Slack.

## Results

| Place | Name        | Performance | Codegolf | Vote  | Total points |
|-------|-------------|-------------|----------|-------|--------------|
| 1.    | Hossein     | 25          |          | 5     | 30           |
| 2.    | Medhat      | 15          | 5        |       | 20           |
| 3.    | Bram Kamies | 18          |          |       | 18           |
| 4.    | Lee         | 12          |          |       | 12           |


### Screenshot

![2022 Week 32 podium](./podium.png)

![2022 Week 32 results](./results.png)

### Vote

```
╔════════════╤══════════╤════════════════════════════════════╗
║ Name       │ Vote     │ Comment                            ║
╟────────────┼──────────┼────────────────────────────────────╢
║ bramkamies │ hossein1 │ Very nice way to build the output! ║
╚════════════╧══════════╧════════════════════════════════════╝
```


### Full output log
```

EVALUATION STARTED:                 17/08/2022, 12:06:49
EVALUATING CHALLENGE:               2022/w32
FOUND 8 SOLUTIONS:                  bramkamies1.js, bramkamies2.js, bramkamies3.js, hossein1.js, lee1.js, medhat1.js, medhat2.js, medhat3.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 10000 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   17/08/2022, 13:36:51
DURATION:                           1 hour, 30 minutes, 2.552 seconds

RANKINGS:
╔═══════╤════════╤═════════════╤══════════╤══════════╤══════════════╤══════╗
║ Place │ Points │ Name        │ Total    │ Best run │ Best compile │ Size ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 1     │ 25     │ hossein1    │ 5.733ms  │ 5.677ms  │ 0.055ms      │ 531  ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 2     │ 18     │ bramkamies3 │ 6.181ms  │ 6.059ms  │ 0.122ms      │ 1402 ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 3     │ 15     │ medhat3     │ 14.456ms │ 14.405ms │ 0.051ms      │ 401  ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 4     │ 12     │ lee1        │ 19.736ms │ 19.680ms │ 0.057ms      │ 611  ║
╚═══════╧════════╧═════════════╧══════════╧══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              bramkamies2.js, bramkamies1.js, medhat2.js, medhat1.js

CODEGOLF AWARD:                     medhat1.js with 97 bytes

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
│    0    │  'hossein1.js'   │ 5.732599999988452  │ 5.677132999990135  │ 0.05546699999831617  │ 531  │ 'successfully' │ 64.64068899999984  │    false     │ false  │    null    │ 30850 │
│    1    │ 'bramkamies3.js' │ 6.181170000025304  │ 6.058794999989914  │ 0.12237500003539026  │ 1402 │ 'successfully' │ 74.27483800000118  │    false     │ false  │    null    │ 30850 │
│    2    │ 'bramkamies2.js' │ 6.259593000111636  │ 6.140243000118062  │ 0.11934999999357387  │ 1361 │ 'successfully' │ 76.28652199999851  │    false     │ false  │    null    │ 30850 │
│    3    │ 'bramkamies1.js' │ 11.302684000183945 │ 11.190747000000556 │ 0.11193700018338859  │ 754  │ 'successfully' │ 123.36356700000033 │    false     │ false  │    null    │ 30850 │
│    4    │   'medhat3.js'   │ 14.455853999970714 │ 14.405132000014419 │ 0.050721999956294894 │ 401  │ 'successfully' │ 76.38340999999855  │    false     │ false  │    null    │ 30850 │
│    5    │   'medhat2.js'   │ 17.662401000008686 │ 17.607988000003388 │ 0.05441300000529736  │ 404  │ 'successfully' │ 81.67246400000295  │    false     │ false  │    null    │ 30850 │
│    6    │    'lee1.js'     │ 19.73638900014339  │ 19.679527000000235 │ 0.056862000143155456 │ 611  │ 'successfully' │ 81.66429900000003  │    false     │ false  │    null    │ 30850 │
│    7    │   'medhat1.js'   │ 44.007083000011335 │ 43.96112400000129  │ 0.04595900001004338  │  97  │ 'successfully' │ 107.54840499999773 │    false     │ false  │    null    │ 30850 │
└─────────┴──────────────────┴────────────────────┴────────────────────┴──────────────────────┴──────┴────────────────┴────────────────────┴──────────────┴────────┴────────────┴───────┘
```
  