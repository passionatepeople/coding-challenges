# Week 27 challenge

The chalenge is to write function `balanceMe`, which takes in an array of numbers and finds the index at which sum of the numbers to the left and right are equal.
If such index is not found, it returns `-1`

For example, in the array `[1, -5, 7, -2, -2]`, such index is `2` because `1 - 5 == -2 - 2`;


**Notes:**
- take into account a special case, like `[12, -3, 4, -1]`, where the correct index is `0` because on the left, there are no numbers (thus the sum is `0`) and on the right side the sum is also `0`;
- you don't have to consider a case of an empty array


Examples:
```
balanceMe([1, 1, 1, 7, 3]) // returns 3
balanceMe([1, -5, 7, -2, -2]) // returns 2
balanceMe([12, -3, 4, -1]) // returns 0
balanceMe([2, 2, 2, 2]) // returns -1
```

## Upload link

[PP Connect](https://connect.passionatepeople.io/code-challenge-submission)

## Results


| Place | Name        | Performance | Codegolf | Jury award | Total points |
|-------|-------------|-------------|----------|------------|--------------|
| 1.    | Jan Bart    | 25          | 5        |            | 30           |
| 2.    | Lars        | 25          |          |            | 25           |
|       | Pablo       | 25          |          |            | 25           |
|       | Anuradha    | 25          |          |            | 25           |
|       | Javad       | 25          |          |            | 25           |
| 6.    | Ezzeddine   | 6           |          | 5          | 11           |
| 7.    | Sander      | 8           |          |            | 8            |
|       | Gift        | 6           |          |            | 6            |
| 9.    | Hossein     | 2           |          |            | 2            |
| 10.   | Mettin      | 1           |          |            | 1            |
|       | Lee         | 1           |          |            | 1            |

### Jury vote

1. ezzeddine2 - commented and clear explanation of algorithm
2. hossein21 - creative approach to the problem
3. sander1 - clear naming of variables and easy to comprehend

### Screenshot

![2021 Week 27 podium](./podium.png)

![2021 Week 27 results](./results.png)

### Full output log
```
EVALUATION STARTED:                 14/07/2021, 13:03:55
EVALUATING CHALLENGE:               2021/w27
FOUND 23 SOLUTIONS:                 anuradha1.js, anuradha2.js, anuradha3.js, anuradha4.js, anuradha5.js, ezzeddine1.js, ezzeddine2.js, gift1.js,
                          hossein1.js, hossein21.js, javad1.js, javad2.js, jmulders1.js, jmulders2.js, jmulders3.js, jmulders4.js, lars1.js,
                          lee1.js, mettin1.js, mettin2.js, pablo1.js, pablo2.js, sander1.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 10000 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   14/07/2021, 14:33:58
DURATION:                           1 hour, 30 minutes, 2.255 seconds

RANKINGS:
╔═══════╤════════╤════════════╤═════════╤══════════╤══════════════╤══════╗
║ Place │ Points │ Name       │ Total   │ Best run │ Best compile │ Size ║
╟───────┼────────┼────────────┼─────────┼──────────┼──────────────┼──────╢
║ 1     │ 25     │ lars1      │ 0.537ms │ 0.525ms  │ 0.011ms      │ 287  ║
╟───────┼────────┼────────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 25     │ pablo2     │ 0.547ms │ 0.534ms  │ 0.013ms      │ 332  ║
╟───────┼────────┼────────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 25     │ anuradha4  │ 0.550ms │ 0.538ms  │ 0.013ms      │ 321  ║
╟───────┼────────┼────────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 25     │ jmulders3  │ 0.561ms │ 0.548ms  │ 0.013ms      │ 300  ║
╟───────┼────────┼────────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 25     │ javad2     │ 0.562ms │ 0.550ms  │ 0.012ms      │ 379  ║
╟───────┼────────┼────────────┼─────────┼──────────┼──────────────┼──────╢
║ 6     │ 8      │ sander1    │ 0.570ms │ 0.557ms  │ 0.013ms      │ 297  ║
╟───────┼────────┼────────────┼─────────┼──────────┼──────────────┼──────╢
║ 7     │ 6      │ ezzeddine2 │ 0.641ms │ 0.629ms  │ 0.012ms      │ 548  ║
╟───────┼────────┼────────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 6      │ gift1      │ 0.662ms │ 0.650ms  │ 0.012ms      │ 316  ║
╟───────┼────────┼────────────┼─────────┼──────────┼──────────────┼──────╢
║ 9     │ 2      │ hossein1   │ 1.276ms │ 1.260ms  │ 0.016ms      │ 536  ║
╟───────┼────────┼────────────┼─────────┼──────────┼──────────────┼──────╢
║ 10    │ 1      │ mettin1    │ 5.862ms │ 5.850ms  │ 0.012ms      │ 245  ║
╟───────┼────────┼────────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 1      │ lee1       │ 6.077ms │ 6.063ms  │ 0.014ms      │ 363  ║
╚═══════╧════════╧════════════╧═════════╧══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              anuradha5.js, pablo1.js, anuradha2.js, jmulders1.js, javad1.js, anuradha1.js, jmulders4.js, jmulders2.js, anuradha3.js,
                          mettin2.js

ONLY CODEGOLF SOLUTIONS:            hossein21.js

CODEGOLF AWARD:                     jmulders4.js with 79 bytes

FAILED SOLUTIONS:                   ezzeddine1.js

SYSTEM INFO:
NODE: v14.16.0
ARCH: x64
PLATFORM: linux
VERSION: #56-Ubuntu SMP Mon Oct 5 14:28:49 UTC 2020
MEMORY: 15.64GB
CPUS: 2 x Intel(R) Xeon(R) Gold 6140 CPU @ 2.30GHz
CPU speed: 2494MHz

RAW RESULTS:
┌─────────┬─────────────────┬────────────────────┬────────────────────┬──────────────────────┬──────┬────────────────┬────────────────────┬──────────────┬────────┬──────────────────────────────────────┬────────┐
│ (index) │    solution     │       total        │      bestRun       │     bestCompile      │ size │    compiled    │   validationTime   │ onlyCodegolf │ failed │              failReason              │  runs  │
├─────────┼─────────────────┼────────────────────┼────────────────────┼──────────────────────┼──────┼────────────────┼────────────────────┼──────────────┼────────┼──────────────────────────────────────┼────────┤
│    0    │   'lars1.js'    │ 0.5367390000610612 │ 0.525296000065282  │ 0.011442999995779246 │ 287  │ 'successfully' │ 27.60244000000239  │    false     │ false  │                 null                 │ 111350 │
│    1    │   'pablo2.js'   │ 0.5469750000629574 │ 0.5342830000445247 │ 0.012692000018432736 │ 332  │ 'successfully' │ 29.947478000001865 │    false     │ false  │                 null                 │ 111350 │
│    2    │ 'anuradha4.js'  │ 0.550279999646591  │ 0.5376859996467829 │ 0.012593999999808148 │ 321  │ 'successfully' │ 42.770581000000675 │    false     │ false  │                 null                 │ 111350 │
│    3    │ 'jmulders3.js'  │ 0.5611820006452035 │ 0.5484890006482601 │  0.0126929999969434  │ 300  │ 'successfully' │ 28.784310000002733 │    false     │ false  │                 null                 │ 111350 │
│    4    │   'javad2.js'   │ 0.5620910000288859 │ 0.5497220000252128 │ 0.012369000003673136 │ 379  │ 'successfully' │ 30.124925999996776 │    false     │ false  │                 null                 │ 111350 │
│    5    │ 'anuradha5.js'  │ 0.5624860001262277 │ 0.5498560001142323 │ 0.012630000011995435 │ 364  │ 'successfully' │ 30.51166100000046  │    false     │ false  │                 null                 │ 111350 │
│    6    │  'sander1.js'   │ 0.569980000029318  │ 0.5573260000674054 │ 0.012653999961912632 │ 297  │ 'successfully' │ 31.252125000006345 │    false     │ false  │                 null                 │ 111350 │
│    7    │   'pablo1.js'   │ 0.5915199996670708 │ 0.5789989996701479 │ 0.01252099999692291  │ 358  │ 'successfully' │ 33.72535600000265  │    false     │ false  │                 null                 │ 111350 │
│    8    │ 'anuradha2.js'  │ 0.6017409996711649 │ 0.5892749996855855 │ 0.012465999985579401 │ 475  │ 'successfully' │ 44.24253200000021  │    false     │ false  │                 null                 │ 111350 │
│    9    │ 'jmulders1.js'  │ 0.6094140000059269 │ 0.5969030000269413 │ 0.012510999978985637 │ 314  │ 'successfully' │ 29.436584000002767 │    false     │ false  │                 null                 │ 111350 │
│   10    │   'javad1.js'   │ 0.6199410000117496 │ 0.6028690000530332 │ 0.017071999958716333 │ 446  │ 'successfully' │ 30.431414999999106 │    false     │ false  │                 null                 │ 111350 │
│   11    │ 'ezzeddine2.js' │ 0.6414460000232793 │ 0.6290230000158772 │ 0.012423000007402152 │ 548  │ 'successfully' │ 34.22295700000177  │    false     │ false  │                 null                 │ 111350 │
│   12    │ 'anuradha1.js'  │ 0.6589140000578482 │ 0.646900000050664  │ 0.012014000007184222 │ 182  │ 'successfully' │ 56.769460999999865 │    false     │ false  │                 null                 │ 111350 │
│   13    │   'gift1.js'    │ 0.6617649996187538 │ 0.6495399996638298 │ 0.012224999954923987 │ 316  │ 'successfully' │ 32.14208099999814  │    false     │ false  │                 null                 │ 111350 │
│   14    │ 'jmulders4.js'  │ 0.7395160000887699 │ 0.7281480000820011 │ 0.011368000006768852 │  79  │ 'successfully' │ 32.99552399999811  │    false     │ false  │                 null                 │ 111350 │
│   15    │ 'jmulders2.js'  │ 0.7693230000440963 │ 0.7580140000209212 │ 0.011309000023175031 │ 105  │ 'successfully' │ 31.303382999998576 │    false     │ false  │                 null                 │ 111350 │
│   16    │ 'anuradha3.js'  │ 0.8567959999199957 │ 0.8454930000007153 │ 0.01130299991928041  │ 116  │ 'successfully' │ 39.20394999999917  │    false     │ false  │                 null                 │ 111350 │
│   17    │  'hossein1.js'  │ 1.2757900005672127 │ 1.2600820001680404 │ 0.015708000399172306 │ 536  │ 'successfully' │ 29.065959999999905 │    false     │ false  │                 null                 │ 111350 │
│   18    │  'mettin1.js'   │ 5.861708000884391  │ 5.849589000106789  │ 0.012119000777602196 │ 245  │ 'successfully' │ 61.801869000002625 │    false     │ false  │                 null                 │ 111350 │
│   19    │    'lee1.js'    │ 6.0769380000419915 │ 6.0631539998576045 │ 0.013784000184386969 │ 363  │ 'successfully' │ 60.42087100000208  │    false     │ false  │                 null                 │ 111350 │
│   20    │  'mettin2.js'   │ 6.377721999771893  │ 6.365245999768376  │ 0.012476000003516674 │ 100  │ 'successfully' │ 67.60725800000364  │    false     │ false  │                 null                 │ 111350 │
│   21    │ 'ezzeddine1.js' │        null        │        null        │         null         │ 555  │ 'successfully' │ 0.4190539999981411 │    false     │  true  │ 'ReferenceError: arr is not defined' │   0    │
│   22    │ 'hossein21.js'  │        null        │        null        │         null         │ 749  │ 'successfully' │ 13611.097693999995 │     true     │ false  │                 null                 │   0    │
└─────────┴─────────────────┴────────────────────┴────────────────────┴──────────────────────┴──────┴────────────────┴────────────────────┴──────────────┴────────┴──────────────────────────────────────┴────────┘
```