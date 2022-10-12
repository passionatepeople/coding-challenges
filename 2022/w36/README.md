# Week 36 challenge

Write a function `simplify` which takes in a fraction in the form [a, b] representing a/b. Your task is to return a simplified version, so that `[50, 70]` becomes `[5, 7]`


Examples:
```
simplify([50, 70]) // return [5,7]
simplify([150, 450]) // return [1,3]
simplify([150, 30]) // return [5,1]
```


## Upload link

You can `/submit` your solution in Slack.

## Results

| Place | Name         | Performance | Codegolf | Vote  | Total points |
|-------|--------------|-------------|----------|-------|--------------|
| 1.    | Hossein      | 25          | 5        |       | 30           |
| 2.    | Lee          | 25          |          |       | 25           |
| 3.    | Tom Atterton | 15          |          |       | 15           |
|       | Bram Kamies  | 15          |          |       | 15           |
|       | Varun        | 15          |          |       | 15           |
| 6.    | Daniel       | 8           |          |       | 8            |
|       | Patrick      | 8           |          |       | 8            |
| 8.    | Medhat       | 4           |          |       | 4            |


### Screenshot

![2022 Week 36 podium](./podium.png)

![2022 Week 36 results](./results.png)

### Vote

Voting is ongoing. Please `/vote` in Slack.


### Full output log
```

EVALUATION STARTED:                 14/09/2022, 12:07:01
EVALUATING CHALLENGE:               2022/w36
FOUND 15 SOLUTIONS:                 bramkamies1.js, bramkamies2.js, daniel1.js, daniel2.js, hossein1.js, hossein2.js, lee1.js, lee2.js, lee3.js, medhat1.js,
                          patrick1.js, tomatterton1.js, tomatterton2.js, varun1.js, varun2.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 10000 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   14/09/2022, 13:37:02
DURATION:                           1 hour, 30 minutes, 0.43 seconds

RANKINGS:
╔═══════╤════════╤══════════════╤═════════╤══════════╤══════════════╤══════╗
║ Place │ Points │ Name         │ Total   │ Best run │ Best compile │ Size ║
╟───────┼────────┼──────────────┼─────────┼──────────┼──────────────┼──────╢
║ 1     │ 25     │ hossein1     │ 1.368ms │ 1.324ms  │ 0.044ms      │ 217  ║
╟───────┼────────┼──────────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 25     │ lee2         │ 1.412ms │ 1.365ms  │ 0.048ms      │ 139  ║
╟───────┼────────┼──────────────┼─────────┼──────────┼──────────────┼──────╢
║ 3     │ 15     │ tomatterton2 │ 1.485ms │ 1.440ms  │ 0.045ms      │ 294  ║
╟───────┼────────┼──────────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 15     │ bramkamies1  │ 1.486ms │ 1.428ms  │ 0.058ms      │ 730  ║
╟───────┼────────┼──────────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 15     │ varun1       │ 1.532ms │ 1.487ms  │ 0.046ms      │ 162  ║
╟───────┼────────┼──────────────┼─────────┼──────────┼──────────────┼──────╢
║ 6     │ 8      │ daniel2      │ 1.601ms │ 1.560ms  │ 0.041ms      │ 195  ║
╟───────┼────────┼──────────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 8      │ patrick1     │ 1.613ms │ 1.575ms  │ 0.039ms      │ 81   ║
╟───────┼────────┼──────────────┼─────────┼──────────┼──────────────┼──────╢
║ 8     │ 4      │ medhat1      │ 1.723ms │ 1.681ms  │ 0.042ms      │ 259  ║
╚═══════╧════════╧══════════════╧═════════╧══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              lee1.js, bramkamies2.js, tomatterton1.js, daniel1.js, varun2.js, hossein2.js

ONLY CODEGOLF SOLUTIONS:            lee3.js

CODEGOLF AWARD:                     hossein2.js with 59 bytes

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
│    0    │   'hossein1.js'   │ 1.3676970000378788 │ 1.3237850000150502 │ 0.04391200002282858  │ 217  │ 'successfully' │ 27.557576000002882 │    false     │ false  │    null    │ 88650 │
│    1    │     'lee2.js'     │ 1.4124309999169782 │ 1.3645029999315739 │ 0.04792799998540431  │ 139  │ 'successfully' │ 25.33405700000003  │    false     │ false  │    null    │ 88650 │
│    2    │     'lee1.js'     │ 1.4167620001826435 │ 1.3646280001848936 │ 0.052133999997749925 │ 310  │ 'successfully' │ 24.004343000000517 │    false     │ false  │    null    │ 88650 │
│    3    │ 'tomatterton2.js' │ 1.4854660001583397 │ 1.4401099998503923 │  0.0453560003079474  │ 294  │ 'successfully' │ 22.039119000000937 │    false     │ false  │    null    │ 88650 │
│    4    │ 'bramkamies1.js'  │ 1.4859929999802262 │ 1.4277619998902082 │ 0.058231000090017915 │ 730  │ 'successfully' │ 55.05741499999931  │    false     │ false  │    null    │ 88650 │
│    5    │    'varun1.js'    │  1.53249599999981  │ 1.4869330000365153 │ 0.045562999963294715 │ 162  │ 'successfully' │ 25.299090000000433 │    false     │ false  │    null    │ 88650 │
│    6    │ 'bramkamies2.js'  │ 1.5409069998422638 │ 1.487390000023879  │ 0.05351699981838465  │ 534  │ 'successfully' │ 46.18794700000217  │    false     │ false  │    null    │ 88650 │
│    7    │ 'tomatterton1.js' │ 1.5437250002287328 │ 1.4989960002712905 │ 0.044728999957442284 │ 194  │ 'successfully' │ 22.691038000000844 │    false     │ false  │    null    │ 88650 │
│    8    │   'daniel2.js'    │ 1.601051000179723  │ 1.5600220002233982 │  0.0410289999563247  │ 195  │ 'successfully' │ 25.152509999999893 │    false     │ false  │    null    │ 88650 │
│    9    │   'patrick1.js'   │ 1.6131469999672845 │ 1.5746079999953508 │ 0.03853899997193366  │  81  │ 'successfully' │ 24.28871799999979  │    false     │ false  │    null    │ 88650 │
│   10    │   'daniel1.js'    │ 1.6201730002649128 │ 1.5751960002817214 │ 0.04497699998319149  │ 308  │ 'successfully' │ 44.47631099999853  │    false     │ false  │    null    │ 88650 │
│   11    │    'varun2.js'    │ 1.6406719996593893 │ 1.6023259996436536 │ 0.038346000015735626 │  66  │ 'successfully' │ 59.31826600000204  │    false     │ false  │    null    │ 88650 │
│   12    │   'medhat1.js'    │ 1.723091000225395  │ 1.6812740000896156 │ 0.04181700013577938  │ 259  │ 'successfully' │ 22.448973000002297 │    false     │ false  │    null    │ 88650 │
│   13    │   'hossein2.js'   │ 27.612097000237554 │ 27.573131000157446 │ 0.03896600008010864  │  59  │ 'successfully' │ 55.08035199999722  │    false     │ false  │    null    │ 88650 │
│   14    │     'lee3.js'     │        null        │        null        │         null         │  68  │ 'successfully' │ 36.554410000000644 │     true     │ false  │    null    │   0   │
└─────────┴───────────────────┴────────────────────┴────────────────────┴──────────────────────┴──────┴────────────────┴────────────────────┴──────────────┴────────┴────────────┴───────┘
```
  