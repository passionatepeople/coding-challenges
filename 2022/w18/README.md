# Week 18 challenge

Write a function `allTogether` which accepts a number and returns the sum of all its digits.


Examples:
```
allTogether(4) // returns 4
allTogether(17) // returns 8
allTogether(1024) // returns 7
```


## Upload link

You can `/submit` your solution in Slack.

## Results

| Place | Name         | Performance | Codegolf | Vote  | Total points |
|-------|--------------|-------------|----------|-------|--------------|
| 1.    | Varun        | 25          | 5        |       | 30           |
| 2.    | Aman         | 25          |          |       | 25           |
| 3.    | Hossein      | 15          | 5        |       | 20           |
| 4.    | Medhat       | 15          |          |       | 15           |
| 5.    | Bram Kamies  | 4           | 5        | 5     | 14           |
| 6.    | Lee          | 10          |          |       | 10           |
|       | Daan         | 10          |          |       | 10           |
| 8.    | Tom Atterton | 4           | 5        |       | 9            |
| 9.    | Tim          | 6           |          |       | 6            |
| 10.   | Devin        | 4           |          |       | 4            |


### Screenshot

![2022 Week 18 podium](./podium.png)

![2022 Week 18 results](./results.png)

### Vote

```
╔════════════════╤═════════════╤════════════════════════════════════════════════════════╗
║ Name           │ Vote        │ Comment                                                ║
╟────────────────┼─────────────┼────────────────────────────────────────────────────────╢
║ harijs.deksnis │ bramkamies5 │ Putting the global variable before module exports :)   ║
╟────────────────┼─────────────┼────────────────────────────────────────────────────────╢
║ bramkamies     │ daan4       │ Lovely eval                                            ║
╟────────────────┼─────────────┼────────────────────────────────────────────────────────╢
║ joseph         │ bramkamies5 │ Already taking part and producing some good solutions! ║
╚════════════════╧═════════════╧════════════════════════════════════════════════════════╝
```


### Full output log
```

EVALUATION STARTED:                 11/05/2022, 12:19:16
EVALUATING CHALLENGE:               2022/w18
FOUND 34 SOLUTIONS:                 aman1.js, aman2.js, arpad1.js, bramkamies1.js, bramkamies2.js, bramkamies3.js, bramkamies4.js, bramkamies5.js, daan1.js,
                          daan2.js, daan3.js, daan4.js, devin1.js, hossein1.js, hossein2.js, hossein3.js, hossein4.js, joseph1.js, lee1.js,
                          lee2.js, medhat1.js, medhat2.js, tim1.js, tim2.js, tomatterton1.js, tomatterton2.js, tomatterton3.js, tomatterton4.js,
                          varun1.js, varun2.js, varun3.js, varun4.js, varun5.js, varun6.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 10000 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   11/05/2022, 13:49:27
DURATION:                           1 hour, 30 minutes, 10.168 seconds

RANKINGS:
╔═══════╤════════╤══════════════╤══════════╤══════════╤══════════════╤══════╗
║ Place │ Points │ Name         │ Total    │ Best run │ Best compile │ Size ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║ 1     │ 25     │ aman2        │ 0.715ms  │ 0.671ms  │ 0.043ms      │ 170  ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 25     │ varun6       │ 0.718ms  │ 0.669ms  │ 0.049ms      │ 172  ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║ 3     │ 15     │ hossein4     │ 1.159ms  │ 1.113ms  │ 0.047ms      │ 189  ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 15     │ medhat2      │ 1.159ms  │ 1.112ms  │ 0.047ms      │ 196  ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║ 5     │ 10     │ lee1         │ 1.295ms  │ 1.248ms  │ 0.047ms      │ 195  ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 10     │ daan3        │ 1.295ms  │ 1.248ms  │ 0.047ms      │ 174  ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║ 7     │ 6      │ tim1         │ 1.808ms  │ 1.760ms  │ 0.048ms      │ 197  ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║ 8     │ 4      │ bramkamies3  │ 1.936ms  │ 1.895ms  │ 0.041ms      │ 44   ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 4      │ tomatterton3 │ 1.955ms  │ 1.910ms  │ 0.045ms      │ 140  ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 4      │ devin1       │ 2.008ms  │ 1.955ms  │ 0.054ms      │ 296  ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║ 11    │        │ arpad1       │ 2.806ms  │ 2.765ms  │ 0.042ms      │ 52   ║
╟───────┼────────┼──────────────┼──────────┼──────────┼──────────────┼──────╢
║ 12    │        │ joseph1      │ 17.117ms │ 17.069ms │ 0.048ms      │ 41   ║
╚═══════╧════════╧══════════════╧══════════╧══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              hossein1.js, varun4.js, varun5.js, medhat1.js, aman1.js, varun1.js, bramkamies2.js, tomatterton4.js, tomatterton2.js,
                          daan1.js, bramkamies1.js, daan2.js, daan4.js, bramkamies4.js, tim2.js, lee2.js

ONLY CODEGOLF SOLUTIONS:            bramkamies5.js, hossein2.js, hossein3.js, tomatterton1.js, varun2.js, varun3.js

CODEGOLF AWARD:                     bramkamies5.js, hossein3.js, tomatterton1.js, varun3.js with 37 bytes

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
│    0    │    'aman2.js'     │ 0.7148029992822558 │ 0.6713989991694689 │ 0.04340400011278689  │ 170  │ 'successfully' │ 19.549098999999842 │    false     │ false  │    null    │ 24950 │
│    1    │    'varun6.js'    │ 0.7180159999988973 │ 0.668614000082016  │ 0.04940199991688132  │ 172  │ 'successfully' │ 8.180770999999368  │    false     │ false  │    null    │ 24950 │
│    2    │   'hossein4.js'   │ 1.1593009997159243 │ 1.112626999616623  │ 0.04667400009930134  │ 189  │ 'successfully' │ 9.486278000000311  │    false     │ false  │    null    │ 24950 │
│    3    │   'medhat2.js'    │ 1.1593349997419864 │ 1.1122979999054223 │ 0.047036999836564064 │ 196  │ 'successfully' │ 31.905306000000564 │    false     │ false  │    null    │ 24950 │
│    4    │   'hossein1.js'   │ 1.168019000440836  │ 1.1222550002858043 │ 0.04576400015503168  │ 191  │ 'successfully' │ 8.680473000000347  │    false     │ false  │    null    │ 24950 │
│    5    │    'varun4.js'    │ 1.2889909995137714 │ 1.2462369995191693 │ 0.042753999994602054 │ 132  │ 'successfully' │ 9.261279999998806  │    false     │ false  │    null    │ 24950 │
│    6    │     'lee1.js'     │ 1.2949880001833662 │ 1.2478800000390038 │ 0.04710800014436245  │ 195  │ 'successfully' │ 18.94363500000327  │    false     │ false  │    null    │ 24950 │
│    7    │    'daan3.js'     │ 1.2951250000623986 │ 1.2484780000522733 │ 0.04664700001012534  │ 174  │ 'successfully' │ 9.938729999998031  │    false     │ false  │    null    │ 24950 │
│    8    │    'varun5.js'    │ 1.2986950002377853 │ 1.2530099999858066 │ 0.045685000251978636 │ 156  │ 'successfully' │  8.25725600000078  │    false     │ false  │    null    │ 24950 │
│    9    │   'medhat1.js'    │ 1.309837999753654  │ 1.2628170000389218 │ 0.04702099971473217  │ 182  │ 'successfully' │ 10.014054999999644 │    false     │ false  │    null    │ 24950 │
│   10    │    'aman1.js'     │ 1.310374999884516  │ 1.2678660000674427 │ 0.042508999817073345 │ 130  │ 'successfully' │ 31.053082999998878 │    false     │ false  │    null    │ 24950 │
│   11    │    'varun1.js'    │ 1.3271699999459088 │ 1.2796070002950728 │ 0.04756299965083599  │ 172  │ 'successfully' │ 10.410041999999521 │    false     │ false  │    null    │ 24950 │
│   12    │     'tim1.js'     │ 1.8082989999093115 │ 1.7598899998702109 │ 0.04840900003910065  │ 197  │ 'successfully' │ 85.99312199999986  │    false     │ false  │    null    │ 24950 │
│   13    │ 'bramkamies3.js'  │ 1.935746000148356  │ 1.8947510002180934 │ 0.040994999930262566 │  44  │ 'successfully' │  16.3798420000021  │    false     │ false  │    null    │ 24950 │
│   14    │ 'tomatterton3.js' │ 1.9548290001694113 │ 1.9102500001899898 │ 0.044578999979421496 │ 140  │ 'successfully' │ 14.05721099999937  │    false     │ false  │    null    │ 24950 │
│   15    │ 'bramkamies2.js'  │ 1.9983249991200864 │ 1.9533629999496043 │ 0.04496199917048216  │ 154  │ 'successfully' │ 39.100218999999925 │    false     │ false  │    null    │ 24950 │
│   16    │    'devin1.js'    │ 2.0081120000686496 │ 1.9545930000022054 │ 0.05351900006644428  │ 296  │ 'successfully' │ 14.259104000000661 │    false     │ false  │    null    │ 24950 │
│   17    │    'arpad1.js'    │ 2.8060669996775687 │ 2.7645009998232126 │ 0.04156599985435605  │  52  │ 'successfully' │ 136.38667899999928 │    false     │ false  │    null    │ 24950 │
│   18    │ 'tomatterton4.js' │ 3.152276999782771  │ 3.1059519997797906 │ 0.04632500000298023  │ 214  │ 'successfully' │ 12.30842499999926  │    false     │ false  │    null    │ 24950 │
│   19    │ 'tomatterton2.js' │ 3.2613810002803802 │ 3.214511000085622  │ 0.04687000019475818  │ 223  │ 'successfully' │ 14.170651999997062 │    false     │ false  │    null    │ 24950 │
│   20    │    'daan1.js'     │ 5.024461999884807  │  4.98200499988161  │  0.0424570000031963  │  55  │ 'successfully' │ 19.758191000000807 │    false     │ false  │    null    │ 24950 │
│   21    │ 'bramkamies1.js'  │ 5.138766000047326  │ 5.093965000007302  │ 0.04480100004002452  │  59  │ 'successfully' │ 18.439992000003258 │    false     │ false  │    null    │ 24950 │
│   22    │    'daan2.js'     │ 13.749545999802649 │ 13.704694999847561 │  0.0448509999550879  │  43  │ 'successfully' │ 100.33713400000124 │    false     │ false  │    null    │ 24950 │
│   23    │    'daan4.js'     │ 16.27571499964688  │ 16.227393999695778 │ 0.04832099995110184  │  41  │ 'successfully' │ 112.57264299999952 │    false     │ false  │    null    │ 24950 │
│   24    │   'joseph1.js'    │ 17.117223999812268 │ 17.069420999847353 │ 0.047802999964915216 │  41  │ 'successfully' │ 112.07167900000059 │    false     │ false  │    null    │ 24950 │
│   25    │ 'bramkamies4.js'  │ 17.176175999920815 │  17.1306259999983  │ 0.04554999992251396  │  41  │ 'successfully' │ 113.22221200000058 │    false     │ false  │    null    │ 24950 │
│   26    │     'tim2.js'     │ 17.90944899985334  │ 17.861307999992277 │ 0.04814099986106157  │  41  │ 'successfully' │ 123.89226300000155 │    false     │ false  │    null    │ 24950 │
│   27    │     'lee2.js'     │ 31.72644899971783  │ 31.68209300003946  │ 0.04435599967837334  │  62  │ 'successfully' │ 185.46250099999816 │    false     │ false  │    null    │ 24950 │
│   28    │ 'bramkamies5.js'  │        null        │        null        │         null         │  37  │ 'successfully' │ 22.841551000001346 │     true     │ false  │    null    │   0   │
│   29    │   'hossein2.js'   │        null        │        null        │         null         │  38  │ 'successfully' │ 24.85510399999839  │     true     │ false  │    null    │   0   │
│   30    │   'hossein3.js'   │        null        │        null        │         null         │  37  │ 'successfully' │ 21.261398999999074 │     true     │ false  │    null    │   0   │
│   31    │ 'tomatterton1.js' │        null        │        null        │         null         │  37  │ 'successfully' │ 513.5700840000027  │     true     │ false  │    null    │   0   │
│   32    │    'varun2.js'    │        null        │        null        │         null         │  40  │ 'successfully' │ 22.008828000001813 │     true     │ false  │    null    │   0   │
│   33    │    'varun3.js'    │        null        │        null        │         null         │  37  │ 'successfully' │ 23.654003999999986 │     true     │ false  │    null    │   0   │
└─────────┴───────────────────┴────────────────────┴────────────────────┴──────────────────────┴──────┴────────────────┴────────────────────┴──────────────┴────────┴────────────┴───────┘
```
  