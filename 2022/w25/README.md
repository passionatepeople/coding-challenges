# Week 25 challenge

Write a function `flatSort` which accepts an array of nested arrays of numbers, flattens it all out and returns all numbers in ascending order.


Examples:
```
flatSort([1,[2,[3],4],5,6,[7,[8]]]) // returns [1,2,3,4,5,6,7,8]
flatSort([5,[5,[3],1],[[4]]]) // returns [1,3,4,5,5]
```


## Upload link

You can `/submit` your solution in Slack.

## Results

| Place | Name           | Performance | Codegolf | Vote  | Total points |
|-------|----------------|-------------|----------|-------|--------------|
| 1.    | Bram Kamies    | 25          | 5        | 5     | 35           |
| 2.    | Daan           | 18          | 5        |       | 23           |
| 3.    | Tim            | 12          | 5        |       | 17           |
| 4.    | Aman           | 15          |          |       | 15           |
|       | Varun          | 10          | 5        |       | 15           |
|       | Daan Houweling | 10          |          | 5     | 15           |
| 7.    | Irene          | 6           | 5        |       | 11           |
| 8.    | Lee            | 2           | 5        |       | 7            |
| 9.    | Medhat         | 1           | 5        |       | 6            |
|       | Hossein        | 1           | 5        |       | 6            |
| 11.   | Devin          | 4           |          |       | 4            |


### Screenshot

![2022 Week 25 podium](./podium.png)

![2022 Week 25 results](./results.png)

### Vote

```
╔═══════════════╤════════════════╤══════════════════╗
║ Name          │ Vote           │ Comment          ║
╟───────────────┼────────────────┼──────────────────╢
║ aman.tuladhar │ bramkamies2    │ Smart, like it!  ║
╟───────────────┼────────────────┼──────────────────╢
║ varun         │ daanhouweling2 │ For using stacks ║
╚═══════════════╧════════════════╧══════════════════╝
```


### Full output log
```

EVALUATION STARTED:                 29/06/2022, 12:08:27
EVALUATING CHALLENGE:               2022/w25
FOUND 19 SOLUTIONS:                 aman1.js, bramkamies1.js, bramkamies2.js, daan1.js, daan2.js, daanhouweling1.js, daanhouweling2.js, devin1.js,
                          hossein1.js, irene1.js, irene2.js, lee1.js, lee2.js, medhat1.js, tim1.js, tim2.js, varun1.js, varun2.js, varun3.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 10000 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   29/06/2022, 13:40:08
DURATION:                           1 hour, 31 minutes, 41.185 seconds

RANKINGS:
╔═══════╤════════╤════════════════╤═══════════╤═══════════╤══════════════╤══════╗
║ Place │ Points │ Name           │ Total     │ Best run  │ Best compile │ Size ║
╟───────┼────────┼────────────────┼───────────┼───────────┼──────────────┼──────╢
║ 1     │ 25     │ bramkamies2    │ 22.016ms  │ 21.825ms  │ 0.190ms      │ 866  ║
╟───────┼────────┼────────────────┼───────────┼───────────┼──────────────┼──────╢
║ 2     │ 18     │ daan1          │ 42.251ms  │ 42.121ms  │ 0.130ms      │ 870  ║
╟───────┼────────┼────────────────┼───────────┼───────────┼──────────────┼──────╢
║ 3     │ 15     │ aman1          │ 47.020ms  │ 46.902ms  │ 0.118ms      │ 547  ║
╟───────┼────────┼────────────────┼───────────┼───────────┼──────────────┼──────╢
║ 4     │ 12     │ tim2           │ 57.442ms  │ 57.336ms  │ 0.106ms      │ 350  ║
╟───────┼────────┼────────────────┼───────────┼───────────┼──────────────┼──────╢
║ 5     │ 10     │ daanhouweling2 │ 76.175ms  │ 76.071ms  │ 0.105ms      │ 523  ║
╟───────┼────────┼────────────────┼───────────┼───────────┼──────────────┼──────╢
║       │ 10     │ varun3         │ 78.161ms  │ 78.052ms  │ 0.109ms      │ 380  ║
╟───────┼────────┼────────────────┼───────────┼───────────┼──────────────┼──────╢
║ 7     │ 6      │ irene1         │ 98.120ms  │ 98.010ms  │ 0.110ms      │ 342  ║
╟───────┼────────┼────────────────┼───────────┼───────────┼──────────────┼──────╢
║ 8     │ 4      │ devin1         │ 103.883ms │ 103.781ms │ 0.103ms      │ 298  ║
╟───────┼────────┼────────────────┼───────────┼───────────┼──────────────┼──────╢
║ 9     │ 2      │ lee1           │ 158.032ms │ 157.895ms │ 0.137ms      │ 1131 ║
╟───────┼────────┼────────────────┼───────────┼───────────┼──────────────┼──────╢
║ 10    │ 1      │ medhat1        │ 199.417ms │ 199.333ms │ 0.084ms      │ 44   ║
╟───────┼────────┼────────────────┼───────────┼───────────┼──────────────┼──────╢
║       │ 1      │ hossein1       │ 199.815ms │ 199.731ms │ 0.085ms      │ 44   ║
╚═══════╧════════╧════════════════╧═══════════╧═══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              daanhouweling1.js, varun2.js, bramkamies1.js, tim1.js, lee2.js, irene2.js, daan2.js, varun1.js

CODEGOLF AWARD:                     bramkamies1.js, daan2.js, hossein1.js, irene2.js, lee2.js, medhat1.js, tim1.js, varun1.js with 44 bytes

SYSTEM INFO:
NODE: v16.14.2
ARCH: x64
PLATFORM: linux
VERSION: #56-Ubuntu SMP Mon Oct 5 14:28:49 UTC 2020
MEMORY: 15.64GB
CPUS: 2 x Intel(R) Xeon(R) Gold 6248 CPU @ 2.50GHz
CPU speed: 2494MHz

RAW RESULTS:
┌─────────┬─────────────────────┬────────────────────┬────────────────────┬─────────────────────┬──────┬────────────────┬────────────────────┬──────────────┬────────┬────────────┬──────┐
│ (index) │      solution       │       total        │      bestRun       │     bestCompile     │ size │    compiled    │   validationTime   │ onlyCodegolf │ failed │ failReason │ runs │
├─────────┼─────────────────────┼────────────────────┼────────────────────┼─────────────────────┼──────┼────────────────┼────────────────────┼──────────────┼────────┼────────────┼──────┤
│    0    │  'bramkamies2.js'   │ 22.015501000219956 │ 21.825469000265002 │ 0.1900319999549538  │ 866  │ 'successfully' │ 3631.175639000001  │    false     │ false  │    null    │ 2100 │
│    1    │     'daan1.js'      │ 42.25106200040318  │ 42.12110999994911  │ 0.12995200045406818 │ 870  │ 'successfully' │ 4299.121005000001  │    false     │ false  │    null    │ 2100 │
│    2    │     'aman1.js'      │ 47.02038500015624  │   46.90224700002   │ 0.11813800013624132 │ 547  │ 'successfully' │ 3314.2771630000025 │    false     │ false  │    null    │ 2100 │
│    3    │      'tim2.js'      │ 57.441574999829754 │ 57.335923000006005 │ 0.10565199982374907 │ 350  │ 'successfully' │ 4090.5543709999984 │    false     │ false  │    null    │ 2100 │
│    4    │ 'daanhouweling2.js' │  76.1754690001253  │ 76.07052500010468  │ 0.10494400002062321 │ 523  │ 'successfully' │ 4340.887956999999  │    false     │ false  │    null    │ 2100 │
│    5    │ 'daanhouweling1.js' │  78.0719270001864  │ 77.96112800005358  │ 0.11079900013282895 │ 539  │ 'successfully' │ 4327.543754999999  │    false     │ false  │    null    │ 2100 │
│    6    │     'varun3.js'     │ 78.16081200010376  │ 78.05169799999567  │ 0.10911400010809302 │ 380  │ 'successfully' │ 3563.203222000011  │    false     │ false  │    null    │ 2100 │
│    7    │     'irene1.js'     │ 98.11953800031915  │ 98.00954900030047  │ 0.10998900001868606 │ 342  │ 'successfully' │ 4321.131300000001  │    false     │ false  │    null    │ 2100 │
│    8    │     'devin1.js'     │ 103.88338500028476 │ 103.7807590002194  │ 0.10262600006535649 │ 298  │ 'successfully' │ 4405.858462000004  │    false     │ false  │    null    │ 2100 │
│    9    │     'varun2.js'     │ 122.13378000026569 │ 122.02879999997094 │ 0.10498000029474497 │ 321  │ 'successfully' │ 3612.3537160000124 │    false     │ false  │    null    │ 2100 │
│   10    │      'lee1.js'      │ 158.03170200018212 │ 157.89492700016126 │ 0.13677500002086163 │ 1131 │ 'successfully' │ 4523.153324000006  │    false     │ false  │    null    │ 2100 │
│   11    │    'medhat1.js'     │ 199.41688900021836 │ 199.33291400037706 │ 0.08397499984130263 │  44  │ 'successfully' │ 4221.250891999996  │    false     │ false  │    null    │ 2100 │
│   12    │  'bramkamies1.js'   │ 199.56961300014518 │ 199.4869099999778  │ 0.08270300016738474 │  44  │ 'successfully' │ 3299.769733000001  │    false     │ false  │    null    │ 2100 │
│   13    │      'tim1.js'      │ 199.79840799991507 │ 199.71564299997408 │ 0.0827649999409914  │  44  │ 'successfully' │ 4271.362345000001  │    false     │ false  │    null    │ 2100 │
│   14    │    'hossein1.js'    │ 199.81523999990895 │ 199.73061299999245 │ 0.0846269999165088  │  44  │ 'successfully' │ 4285.474288999998  │    false     │ false  │    null    │ 2100 │
│   15    │      'lee2.js'      │ 199.8200660001021  │  199.735650000046  │ 0.08441600005608052 │  44  │ 'successfully' │ 4441.9172490000055 │    false     │ false  │    null    │ 2100 │
│   16    │     'irene2.js'     │ 199.82341800024733 │ 199.7391639999114  │ 0.08425400033593178 │  44  │ 'successfully' │ 4223.727514999999  │    false     │ false  │    null    │ 2100 │
│   17    │     'daan2.js'      │ 200.07297999993898 │ 199.98841200000606 │ 0.08456799993291497 │  44  │ 'successfully' │ 4267.480360000001  │    false     │ false  │    null    │ 2100 │
│   18    │     'varun1.js'     │ 201.01708600018173 │ 200.93270500004292 │ 0.08438100013881922 │  44  │ 'successfully' │ 3699.172785999981  │    false     │ false  │    null    │ 2100 │
└─────────┴─────────────────────┴────────────────────┴────────────────────┴─────────────────────┴──────┴────────────────┴────────────────────┴──────────────┴────────┴────────────┴──────┘
```
  