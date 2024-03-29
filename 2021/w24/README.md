# Week 24 challenge

Write a function `findBase` which will receive 3 numbers as arguments - `num1`, `num2` and `product`. However, the base of the numbers is not known, so they will be encoded as strings.

The relationship between the numbers is that `num1` times `num2` equals `product`. Your task is to find the lowest possible base in which these numbers were encoded so that relationship would hold true.

Examples:
```
findBase('10', '11', '110') // returns 2
findBase('10', '10', '100') // returns 2
findBase('22', '1', '22') // returns 3
findBase('2', '3', '12') // returns 4
findBase('12', '5', '60') // returns 10
findBase('4', '17', '68') // returns 10
findBase('e', '2', '1c') // returns 16
```


## Upload link

[PP Connect](https://connect.passionatepeople.io/code-challenge-submission)


## Results


| Place | Name        | Performance | Codegolf | Jury award | Total points |
|-------|-------------|-------------|----------|------------|--------------|
| 1.    | Lee         | 25          | 5        | 5          | 35           |
| 2.    | Peter-Paul  | 18          |          |            | 18           |
| 3.    | Lars        | 15          |          |            | 15           |
| 4.    | Dexter      | 12          |          |            | 12           |
| 5.    | Aman        | 10          |          |            | 10           |
| 6.    | Jan Bart    | 8           |          |            | 8            |
|       | Tim         | 8           |          |            | 8            |
|       | Mettin      | 8           |          |            | 8            |

### Jury vote

#### Harijs

1. lee6 - hacking again, finding a fatal bug
2. peter-paul3 - smart way to start looking starting from max digit
3. lars1 - cool approach with digits map

### Screenshot

![2021 Week 24 podium](./podium.png)

![2021 Week 24 results](./results.png)

### Full output log
```
EVALUATION STARTED:       23/06/2021, 16:15:18
EVALUATING CHALLENGE:     2021/w24
FOUND 23 SOLUTIONS:       aman1.js, aman2.js, dexter1.js, dexter2.js, dexter3.js, dexter4.js, dexter5.js, dexter6.js, jmulders1.js, lars1.js,
                          lee1.js, lee2.js, lee3.js, lee4.js, lee5.js, lee6.js, mettin1.js, mettin2.js, mettin3.js, peter-paul1.js, peter-paul2.js,
                          peter-paul3.js, tim1.js
RUNNING EVALUATION FOR:   5400 SECONDS WITH 10000 TEST CASES IN EACH CYCLE...

Running perf checks 100%... done!

EVALUATION ENDED:         23/06/2021, 17:45:25
DURATION:                 1 hour, 30 minutes, 6.891 seconds

RANKINGS:
╔═══════╤════════╤═════════════╤══════════╤══════════╤══════════════╤══════╗
║ Place │ Points │ Name        │ Total    │ Best run │ Best compile │ Size ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 1     │ 25     │ lee5        │ 0.209ms  │ 0.195ms  │ 0.014ms      │ 87   ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 2     │ 18     │ peter-paul3 │ 2.914ms  │ 2.899ms  │ 0.015ms      │ 886  ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 3     │ 15     │ lars1       │ 5.004ms  │ 4.969ms  │ 0.035ms      │ 1185 ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 4     │ 12     │ dexter4     │ 9.410ms  │ 9.395ms  │ 0.015ms      │ 588  ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 5     │ 10     │ aman2       │ 14.884ms │ 14.870ms │ 0.015ms      │ 608  ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 6     │ 8      │ jmulders1   │ 22.438ms │ 22.425ms │ 0.014ms      │ 290  ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 8      │ tim1        │ 22.792ms │ 22.778ms │ 0.015ms      │ 262  ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 8      │ mettin1     │ 22.853ms │ 22.839ms │ 0.014ms      │ 393  ║
╚═══════╧════════╧═════════════╧══════════╧══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:    lee6.js, lee4.js, peter-paul2.js, lee3.js, peter-paul1.js, dexter6.js, dexter5.js, dexter1.js, aman1.js, lee1.js,
                          mettin2.js, dexter2.js, mettin3.js, dexter3.js, lee2.js

CODEGOLF AWARD:           lee6.js with 20 bytes

SYSTEM INFO:
NODE: v14.16.0
ARCH: x64
PLATFORM: linux
VERSION: #56-Ubuntu SMP Mon Oct 5 14:28:49 UTC 2020
MEMORY: 15.64GB
CPUS: 2 x Intel(R) Xeon(R) Gold 6140 CPU @ 2.30GHz
CPU speed: 2494MHz

RAW RESULTS:
┌─────────┬──────────────────┬─────────────────────┬────────────────────┬──────────────────────┬──────┬────────────────┬────────────────────┬──────────────┬────────┬────────────┬───────┐
│ (index) │     solution     │        total        │      bestRun       │     bestCompile      │ size │    compiled    │   validationTime   │ onlyCodegolf │ failed │ failReason │ runs  │
├─────────┼──────────────────┼─────────────────────┼────────────────────┼──────────────────────┼──────┼────────────────┼────────────────────┼──────────────┼────────┼────────────┼───────┤
│    0    │    'lee5.js'     │ 0.20923999999649823 │ 0.1952070000115782 │ 0.014032999984920025 │  87  │ 'successfully' │ 10.311374999990221 │    false     │ false  │    null    │ 14200 │
│    1    │    'lee6.js'     │ 0.23883600032422692 │ 0.2260719999903813 │ 0.012764000333845615 │  20  │ 'successfully' │ 10.199846000003163 │    false     │ false  │    null    │ 14200 │
│    2    │    'lee4.js'     │ 1.8756719999946654  │ 1.8615500000305474 │ 0.014121999964118004 │ 208  │ 'successfully' │ 36.69390100002056  │    false     │ false  │    null    │ 14200 │
│    3    │ 'peter-paul3.js' │ 2.9139900002628565  │ 2.8986849999055266 │ 0.015305000357329845 │ 886  │ 'successfully' │ 19.725609999964945 │    false     │ false  │    null    │ 14200 │
│    4    │ 'peter-paul2.js' │  4.411495000589639  │  4.39670900022611  │ 0.014786000363528728 │ 776  │ 'successfully' │ 21.297215999977197 │    false     │ false  │    null    │ 14200 │
│    5    │    'lars1.js'    │  5.004463000455871  │ 4.969283000566065  │ 0.03517999988980591  │ 1185 │ 'successfully' │ 53.37355000001844  │    false     │ false  │    null    │ 14200 │
│    6    │    'lee3.js'     │ 5.0410459995036945  │ 5.027385999448597  │ 0.013660000055097044 │ 209  │ 'successfully' │ 18.073594000015873 │    false     │ false  │    null    │ 14200 │
│    7    │ 'peter-paul1.js' │  8.272032000124454  │ 8.258921000175178  │ 0.013110999949276447 │  74  │ 'successfully' │ 26.182535999978427 │    false     │ false  │    null    │ 14200 │
│    8    │   'dexter4.js'   │  9.409792999736965  │ 9.395120999775827  │ 0.014671999961137772 │ 588  │ 'successfully' │ 34.74640599999111  │    false     │ false  │    null    │ 14200 │
│    9    │   'dexter6.js'   │  9.876189000031445  │ 9.861848000029568  │ 0.014341000001877546 │ 1130 │ 'successfully' │ 97.43262199999299  │    false     │ false  │    null    │ 14200 │
│   10    │    'aman2.js'    │ 14.884271999821067  │ 14.869770999997854 │ 0.014500999823212624 │ 608  │ 'successfully' │ 29.205689000023995 │    false     │ false  │    null    │ 14200 │
│   11    │   'dexter5.js'   │ 15.007360999123193  │ 14.992396999150515 │ 0.014963999972678721 │ 577  │ 'successfully' │ 53.04144499998074  │    false     │ false  │    null    │ 14200 │
│   12    │   'dexter1.js'   │ 15.860115999355912  │ 15.846260000020266 │ 0.01385599933564663  │ 258  │ 'successfully' │  94.8265530000208  │    false     │ false  │    null    │ 14200 │
│   13    │    'aman1.js'    │ 20.706489999545738  │ 20.69216199964285  │ 0.014327999902889132 │ 659  │ 'successfully' │ 46.71908599999733  │    false     │ false  │    null    │ 14200 │
│   14    │  'jmulders1.js'  │  22.43843399960315  │ 22.42451500002062  │ 0.013918999582529068 │ 290  │ 'successfully' │ 137.7813680000254  │    false     │ false  │    null    │ 14200 │
│   15    │    'tim1.js'     │ 22.792227999772877  │ 22.77752000000328  │ 0.014707999769598246 │ 262  │ 'successfully' │ 135.2611409999663  │    false     │ false  │    null    │ 14200 │
│   16    │   'mettin1.js'   │ 22.852533000521362  │ 22.838632999919355 │ 0.013900000602006912 │ 393  │ 'successfully' │ 141.1503789999988  │    false     │ false  │    null    │ 14200 │
│   17    │    'lee1.js'     │ 22.890248998999596  │ 22.875761999748647 │ 0.014486999250948429 │ 218  │ 'successfully' │ 144.57246799999848 │    false     │ false  │    null    │ 14200 │
│   18    │   'mettin2.js'   │ 23.261231999611482  │ 23.247972999699414 │ 0.013258999912068248 │  92  │ 'successfully' │ 37.180724999983795 │    false     │ false  │    null    │ 14200 │
│   19    │   'dexter2.js'   │  24.3831670001382   │ 24.370311000035144 │ 0.01285600010305643  │ 120  │ 'successfully' │ 122.14436500001466 │    false     │ false  │    null    │ 14200 │
│   20    │   'mettin3.js'   │ 25.356444999866653  │ 25.34313100000145  │ 0.013313999865204096 │  87  │ 'successfully' │ 437.34829100000206 │    false     │ false  │    null    │ 14200 │
│   21    │   'dexter3.js'   │ 29.805381999816746  │ 29.792673000134528 │ 0.012708999682217836 │ 113  │ 'successfully' │ 131.25149299995974 │    false     │ false  │    null    │ 14200 │
│   22    │    'lee2.js'     │  33.67053800006397  │ 33.657529000076465 │ 0.013008999987505376 │  70  │ 'successfully' │ 165.57170200004475 │    false     │ false  │    null    │ 14200 │
└─────────┴──────────────────┴─────────────────────┴────────────────────┴──────────────────────┴──────┴────────────────┴────────────────────┴──────────────┴────────┴────────────┴───────┘
```