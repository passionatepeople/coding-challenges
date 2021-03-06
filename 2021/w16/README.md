# Week 16 challenge

You have an array of numbers. Your task is to find a subarray that yields maximum sum of consequent items.

If you have an array of `[-7, 2, -1, 5, -6, 2]`, then the maximum sum would be formed taking `2`, `-1` and `5`, thus `6`;
Most easy case is when all numbers are positive, then the maximum sum is simply the sum of all the numbers in array.

In case of an empty array `[]`, the sum is `0`.
Therefore, array consisting of only negative numbers yields maximum sum `0`, because empty array is also a valid subarray.


Examples:
```
getMaxConsequentItemSum([-7, 2, -1, 5, -6, 2]) // returns 6
getMaxConsequentItemSum([5, 2, -7, 2, -1, 5, -4, 2, 13, 4]) // returns 21
getMaxConsequentItemSum([1, 2, 3, 4]) // returns 10
getMaxConsequentItemSum([]) // returns 0
getMaxConsequentItemSum([-1, -2, -3]) // returns 0
```


## Upload link

[Submissions are closed]


## Results


| Place | Name        | Performance | Codegolf | Jury award | Total points |
|-------|-------------|-------------|----------|------------|--------------|
| 1.    | Irene       | 25          | 5        | 5          | 35           |
| 2.    | Peter-Paul  | 25          | 5        |            | 30           |
| 3.    | Aman        | 25          |          |            | 25           |
| 4.    | Lars        | 12          |          |            | 12           |
|       | Dexter      | 12          |          |            | 12           |
| 6.    | Joppe       | 8           |          |            | 8            |
| 7.    | Jan Bart    | 6           |          |            | 6            |
| 8.    | Mettin      | 4           |          |            | 4            |

### Jury vote

#### Harijs
1. irene2 - finding Kaden’s algorithm and applying it as theoretical CS solution to this problem
2. dexter6 - some interesting `for` loop
3. lars2 - interesting approach to do this with `.map`

#### Israel
1. irene2 - for finding out (or already knowing) the name of this algorithm for her solution
2. dexter4 - for being the shortest solution in the top 10 board
3. joppe - interesting use of control statements (for/if/continue)

### Screenshot

![2021 Week 16 results](./results.png)

### Full output log
```
EVALUATION STARTED:       Wed Apr 28 2021 10:08:27 GMT+0000 (Coordinated Universal Time)
EVALUATING CHALLENGE:     2021/w16
FOUND 18 SOLUTIONS:       aman.js, dexter1.js, dexter2.js, dexter3.js, dexter4.js, dexter5.js, dexter6.js, irene1.js, irene2.js, irene3.js,
                          irene4.js, jmulders.js, joppe.js, lars1.js, lars2.js, mettin.js, peterPaul1.js, peterPaul2.js
EVALUATING EACH           70000 TIMES WITH 10000 TEST CASES...

Running perf checks 100%... done!

EVALUATION ENDED:         Wed Apr 28 2021 11:38:06 GMT+0000 (Coordinated Universal Time)
DURATION:                 1 hour, 29 minutes, 39.092 seconds

RANKINGS:
╔═══════╤════════╤════════════╤═════════════════╤══════════╤════════════════╤══════════════╗
║ Place │ Points │ Name       │ Best            │ Average  │ σ (st dev)     │ Size (bytes) ║
╟───────┼────────┼────────────┼─────────────────┼──────────┼────────────────┼──────────────╢
║ 1     │ 25     │ irene2     │ 0.751ms (1.8σ)  │ 0.838ms  │ 0.049ms (5.9%) │ 314          ║
╟───────┼────────┼────────────┼─────────────────┼──────────┼────────────────┼──────────────╢
║       │ 25     │ peterPaul1 │ 0.757ms (2.3σ)  │ 0.864ms  │ 0.045ms (5.2%) │ 232          ║
╟───────┼────────┼────────────┼─────────────────┼──────────┼────────────────┼──────────────╢
║       │ 25     │ aman       │ 0.766ms (1.8σ)  │ 0.852ms  │ 0.047ms (5.5%) │ 306          ║
╟───────┼────────┼────────────┼─────────────────┼──────────┼────────────────┼──────────────╢
║ 4     │ 12     │ lars1      │ 0.879ms (1.9σ)  │ 0.975ms  │ 0.049ms (5.1%) │ 341          ║
╟───────┼────────┼────────────┼─────────────────┼──────────┼────────────────┼──────────────╢
║       │ 12     │ dexter4    │ 0.908ms (1.9σ)  │ 1.008ms  │ 0.053ms (5.2%) │ 77           ║
╟───────┼────────┼────────────┼─────────────────┼──────────┼────────────────┼──────────────╢
║ 6     │ 8      │ joppe      │ 0.941ms (1.9σ)  │ 1.042ms  │ 0.054ms (5.2%) │ 552          ║
╟───────┼────────┼────────────┼─────────────────┼──────────┼────────────────┼──────────────╢
║ 7     │ 6      │ jmulders   │ 1.595ms (1.9σ)  │ 1.758ms  │ 0.088ms (5.0%) │ 399          ║
╟───────┼────────┼────────────┼─────────────────┼──────────┼────────────────┼──────────────╢
║ 8     │ 4      │ mettin     │ 36.417ms (2.4σ) │ 39.449ms │ 1.267ms (3.2%) │ 418          ║
╚═══════╧════════╧════════════╧═════════════════╧══════════╧════════════════╧══════════════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:    dexter6.js, dexter3.js, peterPaul2.js, dexter2.js, dexter1.js, dexter5.js, irene1.js, irene3.js, lars2.js, irene4.js

CODEGOLF AWARD:           irene4.js, peterPaul2.js with 60 bytes

SYSTEM INFO:
NODE: v14.16.0
ARCH: x64
PLATFORM: linux
VERSION: #56-Ubuntu SMP Mon Oct 5 14:28:49 UTC 2020
MEMORY: 15.64GB
CPUS: 2 x Intel(R) Xeon(R) Gold 6140 CPU @ 2.30GHz
CPU speed: 2494MHz

RAW RESULTS:
┌─────────┬─────────────────┬────────┬────────────────────┬────────────────────┬────────────────────┬────────────────────┬──────────────────────┬──────┬───────┐
│ (index) │    solution     │ failed │       total        │      average       │        best        │       worst        │        stdev         │ size │ runs  │
├─────────┼─────────────────┼────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼──────────────────────┼──────┼───────┤
│    0    │   'irene2.js'   │ false  │ 58634.18184103671  │ 0.8376311691576673 │ 0.7505020000971854 │ 5.0212320000864565 │ 0.049485954407406545 │ 314  │ 70000 │
│    1    │ 'peterPaul1.js' │ false  │ 60451.78029500478  │ 0.8635968613572111 │ 0.7574879999738187 │ 3.932399000041187  │ 0.04516688520126627  │ 232  │ 70000 │
│    2    │    'aman.js'    │ false  │ 59644.68175391742  │ 0.8520668821988203 │ 0.7657149992883205 │ 3.669717999990098  │ 0.04716819878343439  │ 306  │ 70000 │
│    3    │   'lars1.js'    │ false  │ 68223.30577400414  │ 0.9746186539143449 │ 0.8790009999647737 │ 3.6825390001758933 │ 0.049414513645551626 │ 341  │ 70000 │
│    4    │  'dexter4.js'   │ false  │  70546.7720208742  │ 1.0078110288696314 │ 0.908355999737978  │ 4.946439000021201  │ 0.052736458743559866 │  77  │ 70000 │
│    5    │   'joppe.js'    │ false  │ 72941.90138512803  │ 1.0420271626446862 │ 0.9414160000160336 │  4.5580950002186   │ 0.05434921418077149  │ 552  │ 70000 │
│    6    │  'dexter6.js'   │ false  │ 77636.98219292454  │ 1.1090997456132077 │ 1.0004220004193485 │ 3.9859430007636547 │ 0.05523652771149215  │ 108  │ 70000 │
│    7    │  'dexter3.js'   │ false  │ 79163.49761301104  │ 1.1309071087573006 │ 1.0240409998223186 │ 4.313772999972571  │ 0.05404371502016714  │  76  │ 70000 │
│    8    │ 'peterPaul2.js' │ false  │ 97907.45647106163  │ 1.3986779495865946 │ 1.2692189998924732 │ 5.862145000020973  │ 0.06606175300085505  │  60  │ 70000 │
│    9    │  'dexter2.js'   │ false  │ 107042.1916490533  │ 1.529174166415047  │ 1.393108000047505  │ 5.577893000096083  │ 0.07387742533694913  │  86  │ 70000 │
│   10    │  'dexter1.js'   │ false  │ 107064.44090901304 │ 1.5294920129859004 │ 1.3955520000308752 │ 7.970428999979049  │ 0.07631102572228689  │ 197  │ 70000 │
│   11    │  'dexter5.js'   │ false  │  120643.828633102  │ 1.7234832661871715 │ 1.529219999909401  │ 6.570358000230044  │ 0.12980729823670298  │  69  │ 70000 │
│   12    │  'jmulders.js'  │ false  │ 123043.38735100906 │ 1.7577626764429866 │ 1.5949470000341535 │ 8.809173999994528  │ 0.08752147400383944  │ 399  │ 70000 │
│   13    │   'irene1.js'   │ false  │ 133200.23587098817 │ 1.902860512442688  │  1.72174399998039  │ 4.969359999988228  │ 0.09213486036170093  │ 354  │ 70000 │
│   14    │   'irene3.js'   │ false  │ 145940.18306510418 │ 2.0848597580729167 │ 1.796652999939397  │ 10.00223399978131  │ 0.20408670693263684  │  61  │ 70000 │
│   15    │   'lars2.js'    │ false  │ 583565.3389819113  │  8.33664769974159  │ 7.631161000113934  │ 20.287329000013415 │ 0.36798119434491844  │  61  │ 70000 │
│   16    │   'irene4.js'   │ false  │ 594641.5782480377  │ 8.494879689257681  │ 7.765467000077479  │ 21.56468200031668  │  0.3741016751960811  │  60  │ 70000 │
│   17    │   'mettin.js'   │ false  │ 2761430.1128119635 │ 39.44900161159948  │ 36.41720400005579  │ 75.39469500002451  │  1.267155712493355   │ 418  │ 70000 │
└─────────┴─────────────────┴────────┴────────────────────┴────────────────────┴────────────────────┴────────────────────┴──────────────────────┴──────┴───────┘
```