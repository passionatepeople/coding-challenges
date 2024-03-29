# Week 44 challenge

Write a function `offWithIt` accepts an array and removes the first occurance of minimum value. The original order should be preserved.


*Note:* Do not mutate input array, always return a new one. If there is more than one instance of minimum value, remove only the first occurrence.

Examples:
```
offWithIt([1, 2, 3, 4]) // returns [2, 3, 4]
offWithIt([1, 2, 3, 1, 4]) // returns [2, 3, 1, 4]
offWithIt([1, 1, 1, 1]) // returns [1, 1, 1]
offWithIt([2, 1, 2, 1, 2, 1, 2, 1]) // returns [2, 2, 1, 2, 1, 2, 1]
```


## Upload link

[PP Connect](https://connect.passionatepeople.io/code-challenge-submission)

## Results

| Place | Name     | Performance | Codegolf | Vote  | Total points |
|-------|----------|-------------|----------|-------|--------------|
| 1.    | Lars     | 25          |          | 5     | 30           |
| 2.    | Hossein  | 18          | 5        |       | 23           |
| 3.    | Ji       | 18          |          |       | 18           |
|       | Anuradha | 18          |          |       | 18           |
| 5.    | Aman     | 10          |          |       | 10           |
|       | Medhat   | 10          |          |       | 10           |
|       | Luc      | 10          |          |       | 10           |
| 8.    | Bram     | 4           |          |       | 4            |
| 9.    | Lee      | 2           |          |       | 2            |
| 10.   | Tim v B. | 1           |          |       | 1            |
|       | Tim      | 1           |          |       | 1            |


### Screenshot

![2021 Week 44 podium](./podium.png)

![2021 Week 44 results](./results.png)

### Vote

```
╔════════════════╤═══════════╤════════════════════════════════════════════╗
║ Name           │ Vote      │ Comment                                    ║
╟────────────────┼───────────┼────────────────────────────────────────────╢
║ hossein        │ lars1     │ clean and fast                             ║
╟────────────────┼───────────┼────────────────────────────────────────────╢
║ bram           │ hossein2  │ Nice code golf!                            ║
╟────────────────┼───────────┼────────────────────────────────────────────╢
║ tim            │ anuradha5 │ no splice :)                               ║
╟────────────────┼───────────┼────────────────────────────────────────────╢
║ aman.tuladhar  │ lars1     │ clean, readable, and highly efficient code ║
╟────────────────┼───────────┼────────────────────────────────────────────╢
║ harijs.deksnis │ tim5      │ Readable and clear                         ║
╚════════════════╧═══════════╧════════════════════════════════════════════╝
```


### Full output log
```

EVALUATION STARTED:                 10/11/2021, 12:06:57
EVALUATING CHALLENGE:               2021/w44
FOUND 44 SOLUTIONS:                 aman1.js, andre1.js, andre2.js, anuradha1.js, anuradha2.js, anuradha3.js, anuradha4.js, anuradha5.js, bram1.js, bram2.js,
                          bram3.js, bram4.js, hossein1.js, hossein2.js, hossein3.js, ji1.js, ji2.js, lars1.js, lee1.js, luc1.js, luc2.js, luc3.js,
                          luc4.js, luc5.js, luc6.js, luc7.js, luc8.js, luc9.js, medhat1.js, medhat2.js, medhat3.js, patrick1.js, patrick4.js,
                          tim1.js, tim2.js, tim3.js, tim4.js, tim5.js, tim6.js, timetc1.js, timetc2.js, timetc3.js, timetc4.js, varun1.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 10000 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   10/11/2021, 13:37:11
DURATION:                           1 hour, 30 minutes, 12.996 seconds

RANKINGS:
╔═══════╤════════╤═══════════╤═════════╤══════════╤══════════════╤══════╗
║ Place │ Points │ Name      │ Total   │ Best run │ Best compile │ Size ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║ 1     │ 25     │ lars1     │ 2.130ms │ 2.114ms  │ 0.016ms      │ 430  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║ 2     │ 18     │ ji1       │ 2.774ms │ 2.760ms  │ 0.014ms      │ 240  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 18     │ hossein3  │ 2.796ms │ 2.782ms  │ 0.014ms      │ 301  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 18     │ anuradha5 │ 2.850ms │ 2.832ms  │ 0.018ms      │ 339  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║ 5     │ 10     │ aman1     │ 3.153ms │ 3.137ms  │ 0.016ms      │ 325  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 10     │ medhat1   │ 3.283ms │ 3.268ms  │ 0.015ms      │ 278  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 10     │ luc9      │ 3.292ms │ 3.279ms  │ 0.013ms      │ 425  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║ 8     │ 4      │ bram4     │ 3.356ms │ 3.341ms  │ 0.015ms      │ 183  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║ 9     │ 2      │ lee1      │ 3.646ms │ 3.632ms  │ 0.015ms      │ 323  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║ 10    │ 1      │ timetc2   │ 3.906ms │ 3.893ms  │ 0.013ms      │ 199  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 1      │ tim5      │ 4.042ms │ 4.022ms  │ 0.020ms      │ 297  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║ 12    │        │ patrick4  │ 4.608ms │ 4.595ms  │ 0.013ms      │ 106  ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║ 13    │        │ andre1    │ 5.048ms │ 5.034ms  │ 0.014ms      │ 70   ║
╟───────┼────────┼───────────┼─────────┼──────────┼──────────────┼──────╢
║ 14    │        │ varun1    │ 5.857ms │ 5.844ms  │ 0.013ms      │ 81   ║
╚═══════╧════════╧═══════════╧═════════╧══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              hossein1.js, anuradha4.js, anuradha2.js, tim4.js, tim6.js, patrick1.js, tim2.js, tim1.js, timetc3.js, bram3.js,
                          medhat2.js, bram2.js, luc8.js, luc2.js, anuradha1.js, andre2.js, luc4.js, luc3.js, luc5.js, hossein2.js, ji2.js,
                          timetc1.js, timetc4.js, medhat3.js, bram1.js, luc7.js, anuradha3.js

CODEGOLF AWARD:                     hossein2.js with 60 bytes

FAILED SOLUTIONS:                   luc1.js, luc6.js, tim3.js

SYSTEM INFO:
NODE: v14.16.0
ARCH: x64
PLATFORM: linux
VERSION: #56-Ubuntu SMP Mon Oct 5 14:28:49 UTC 2020
MEMORY: 15.64GB
CPUS: 2 x Intel Xeon Processor (Cascadelake)
CPU speed: 2494MHz

RAW RESULTS:
┌─────────┬────────────────┬────────────────────┬────────────────────┬──────────────────────┬──────┬────────────────┬─────────────────────┬──────────────┬────────┬────────────────────┬──────┐
│ (index) │    solution    │       total        │      bestRun       │     bestCompile      │ size │    compiled    │   validationTime    │ onlyCodegolf │ failed │     failReason     │ runs │
├─────────┼────────────────┼────────────────────┼────────────────────┼──────────────────────┼──────┼────────────────┼─────────────────────┼──────────────┼────────┼────────────────────┼──────┤
│    0    │   'lars1.js'   │ 2.1300210002809763 │ 2.114354000426829  │ 0.015666999854147434 │ 430  │ 'successfully' │ 150.93663200000083  │    false     │ false  │        null        │ 8350 │
│    1    │    'ji1.js'    │ 2.773790999315679  │ 2.7595629999414086 │ 0.01422799937427044  │ 240  │ 'successfully' │ 143.66597700000057  │    false     │ false  │        null        │ 8350 │
│    2    │ 'hossein3.js'  │ 2.7958119991235435 │ 2.781684999819845  │ 0.01412699930369854  │ 301  │ 'successfully' │ 140.47701700000107  │    false     │ false  │        null        │ 8350 │
│    3    │ 'anuradha5.js' │ 2.8498749998398125 │ 2.8317889999598265 │ 0.018085999879986048 │ 339  │ 'successfully' │ 127.84666000000288  │    false     │ false  │        null        │ 8350 │
│    4    │   'aman1.js'   │  3.15282200044021  │ 3.1370530002750456 │ 0.01576900016516447  │ 325  │ 'successfully' │  186.8774540000013  │    false     │ false  │        null        │ 8350 │
│    5    │ 'hossein1.js'  │ 3.1700860001146793 │ 3.155181000009179  │ 0.014905000105500221 │ 277  │ 'successfully' │  136.1830860000009  │    false     │ false  │        null        │ 8350 │
│    6    │  'medhat1.js'  │ 3.2827809997834265 │ 3.268002000171691  │ 0.014778999611735344 │ 278  │ 'successfully' │  155.1932310000011  │    false     │ false  │        null        │ 8350 │
│    7    │   'luc9.js'    │ 3.291944000404328  │ 3.278820000588894  │ 0.013123999815434217 │ 425  │ 'successfully' │ 152.64705200000026  │    false     │ false  │        null        │ 8350 │
│    8    │ 'anuradha4.js' │ 3.319250999484211  │ 3.304883999750018  │ 0.014366999734193087 │ 217  │ 'successfully' │  137.9455569999991  │    false     │ false  │        null        │ 8350 │
│    9    │   'bram4.js'   │ 3.355502000078559  │ 3.340719999745488  │ 0.014782000333070755 │ 183  │ 'successfully' │ 227.56414699999732  │    false     │ false  │        null        │ 8350 │
│   10    │ 'anuradha2.js' │ 3.4246660000644624 │ 3.410137999802828  │ 0.014528000261634588 │ 241  │ 'successfully' │  272.2232299999996  │    false     │ false  │        null        │ 8350 │
│   11    │   'lee1.js'    │ 3.646153001114726  │ 3.631561000831425  │ 0.014592000283300877 │ 323  │ 'successfully' │ 154.30997099999877  │    false     │ false  │        null        │ 8350 │
│   12    │  'timetc2.js'  │ 3.906473000533879  │ 3.893271000124514  │  0.0132020004093647  │ 199  │ 'successfully' │  153.0637929999939  │    false     │ false  │        null        │ 8350 │
│   13    │   'tim5.js'    │ 4.041898000519723  │ 4.0222000000067055 │ 0.019698000513017178 │ 297  │ 'successfully' │ 187.07152499999938  │    false     │ false  │        null        │ 8350 │
│   14    │   'tim4.js'    │ 4.045446000061929  │ 4.028179000131786  │ 0.017266999930143356 │ 211  │ 'successfully' │ 164.34925699999803  │    false     │ false  │        null        │ 8350 │
│   15    │   'tim6.js'    │ 4.157249000389129  │ 4.142547000199556  │ 0.014702000189572573 │ 117  │ 'successfully' │ 191.71730600000228  │    false     │ false  │        null        │ 8350 │
│   16    │ 'patrick4.js'  │ 4.608047999441624  │ 4.594650999642909  │ 0.013396999798715115 │ 106  │ 'successfully' │  143.3185740000008  │    false     │ false  │        null        │ 8350 │
│   17    │ 'patrick1.js'  │ 4.7032690001651645 │ 4.689863000065088  │ 0.013406000100076199 │ 102  │ 'successfully' │ 152.70622500000172  │    false     │ false  │        null        │ 8350 │
│   18    │   'tim2.js'    │ 4.743316999170929  │ 4.730119999498129  │ 0.013196999672800303 │  80  │ 'successfully' │ 165.83282999999938  │    false     │ false  │        null        │ 8350 │
│   19    │   'tim1.js'    │ 4.808711000252515  │  4.79061200004071  │ 0.018099000211805105 │ 130  │ 'successfully' │  156.6678439999996  │    false     │ false  │        null        │ 8350 │
│   20    │  'timetc3.js'  │ 4.825103000737727  │ 4.809840000234544  │ 0.015263000503182411 │ 165  │ 'successfully' │ 150.74977199999557  │    false     │ false  │        null        │ 8350 │
│   21    │   'bram3.js'   │  4.86018200032413  │ 4.845075000077486  │ 0.01510700024664402  │ 159  │ 'successfully' │  148.6406969999989  │    false     │ false  │        null        │ 8350 │
│   22    │  'medhat2.js'  │ 4.8745370004326105 │ 4.861096000298858  │ 0.013441000133752823 │  68  │ 'successfully' │ 192.47683300000062  │    false     │ false  │        null        │ 8350 │
│   23    │   'bram2.js'   │ 4.8821200001984835 │  4.86749600013718  │ 0.014624000061303377 │ 166  │ 'successfully' │ 152.13713899999857  │    false     │ false  │        null        │ 8350 │
│   24    │   'luc8.js'    │ 4.955402999883518  │ 4.938912999816239  │ 0.016490000067278743 │ 294  │ 'successfully' │ 161.26766399999906  │    false     │ false  │        null        │ 8350 │
│   25    │   'luc2.js'    │  4.96744199981913  │ 4.9536999999545515 │ 0.013741999864578247 │ 108  │ 'successfully' │ 195.03159700000106  │    false     │ false  │        null        │ 8350 │
│   26    │ 'anuradha1.js' │ 4.983845999930054  │ 4.970071000047028  │ 0.013774999883025885 │  74  │ 'successfully' │ 232.12696000000142  │    false     │ false  │        null        │ 8350 │
│   27    │  'andre1.js'   │ 5.047806999646127  │ 5.034258999861777  │ 0.013547999784350395 │  70  │ 'successfully' │ 219.43922100000054  │    false     │ false  │        null        │ 8350 │
│   28    │  'andre2.js'   │ 5.093085000291467  │ 5.0792350000701845 │ 0.013850000221282244 │  68  │ 'successfully' │  341.3285849999993  │    false     │ false  │        null        │ 8350 │
│   29    │   'luc4.js'    │ 5.785532999783754  │ 5.772073999978602  │ 0.013458999805152416 │ 111  │ 'successfully' │  173.7869299999984  │    false     │ false  │        null        │ 8350 │
│   30    │   'luc3.js'    │ 5.824193000327796  │ 5.810881999786943  │ 0.013311000540852547 │ 111  │ 'successfully' │ 152.13467700000183  │    false     │ false  │        null        │ 8350 │
│   31    │  'varun1.js'   │ 5.857292999979109  │ 5.844032000284642  │ 0.013260999694466591 │  81  │ 'successfully' │ 195.60669799999596  │    false     │ false  │        null        │ 8350 │
│   32    │   'luc5.js'    │  5.8633639998734   │ 5.846042999997735  │ 0.01732099987566471  │ 212  │ 'successfully' │  199.4057759999996  │    false     │ false  │        null        │ 8350 │
│   33    │ 'hossein2.js'  │ 24.969771000090986 │ 24.95379099994898  │ 0.015980000142008066 │  60  │ 'successfully' │     590.597608      │    false     │ false  │        null        │ 8350 │
│   34    │    'ji2.js'    │ 25.138133000116795 │ 25.121704999823123 │ 0.016428000293672085 │  71  │ 'successfully' │ 439.58000099999845  │    false     │ false  │        null        │ 8350 │
│   35    │  'timetc1.js'  │ 57.44070799974725  │ 57.41837599966675  │ 0.022332000080496073 │  63  │ 'successfully' │ 1210.6925130000018  │    false     │ false  │        null        │ 8350 │
│   36    │  'timetc4.js'  │ 57.56399200018495  │ 57.54294000007212  │ 0.021052000112831593 │  62  │ 'successfully' │ 1296.2867699999988  │    false     │ false  │        null        │ 8350 │
│   37    │  'medhat3.js'  │ 57.643785999622196 │ 57.62290899967775  │ 0.02087699994444847  │  63  │ 'successfully' │ 1168.0717189999996  │    false     │ false  │        null        │ 8350 │
│   38    │   'bram1.js'   │ 58.192865000106394 │ 58.169676000252366 │ 0.023188999854028225 │  63  │ 'successfully' │ 1190.8296699999992  │    false     │ false  │        null        │ 8350 │
│   39    │   'luc7.js'    │ 58.391477999743074 │ 58.36993299983442  │ 0.021544999908655882 │  63  │ 'successfully' │ 1135.0413019999978  │    false     │ false  │        null        │ 8350 │
│   40    │ 'anuradha3.js' │  58.5366750000976  │ 58.515496000181884 │ 0.021178999915719032 │  63  │ 'successfully' │ 1280.3579189999982  │    false     │ false  │        null        │ 8350 │
│   41    │   'luc1.js'    │        null        │        null        │         null         │ 326  │ 'successfully' │ 0.5100319999983185  │    false     │  true  │ 'Incorrect result' │  0   │
│   42    │   'luc6.js'    │        null        │        null        │         null         │  65  │ 'successfully' │ 0.5265939999990223  │    false     │  true  │ 'Incorrect result' │  0   │
│   43    │   'tim3.js'    │        null        │        null        │         null         │  61  │ 'successfully' │ 0.44095500000184984 │    false     │  true  │ 'Mutating inputs'  │  0   │
└─────────┴────────────────┴────────────────────┴────────────────────┴──────────────────────┴──────┴────────────────┴─────────────────────┴──────────────┴────────┴────────────────────┴──────┘
```
  