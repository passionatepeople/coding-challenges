# Week 20 challenge

Write a function `withoutFives` which accepts beginning and end of a range (inclusive) and returns how many numbers in it don't contain digit 5.


Examples:
```
withoutFives(1,4) // returns 4
withoutFives(1,10) // returns 9
withoutFives(7,12) // returns 6
withoutFives(1,20) // returns 18
withoutFives(50,60) // returns 1
```


## Upload link

You can `/submit` your solution in Slack.

## Results

| Place | Name         | Performance | Codegolf | Vote  | Total points |
|-------|--------------|-------------|----------|-------|--------------|
| 1.    | Tom Atterton | 25          | 5        |       | 30           |
| 2.    | Hossein      | 18          | 5        |       | 23           |
|       | Irene        | 18          |          | 5     | 23           |
| 4.    | Varun        | 12          |          |       | 12           |
| 5.    | Daan         | 10          |          |       | 10           |
| 6.    | Aman         | 8           |          |       | 8            |
| 7.    | Lee          | 6           |          |       | 6            |
| 8.    | Bram Kamies  | 4           |          |       | 4            |
|       | Joseph       | 4           |          |       | 4            |


### Screenshot

![2022 Week 20 podium](./podium.png)

![2022 Week 20 results](./results.png)

### Vote

```
╔════════════════╤══════════════╤═══════════════════════════════════════════════════════════╗
║ Name           │ Vote         │ Comment                                                   ║
╟────────────────┼──────────────┼───────────────────────────────────────────────────────────╢
║ lee            │ irene1       │ It's just incredibly readable                             ║
╟────────────────┼──────────────┼───────────────────────────────────────────────────────────╢
║ aman.tuladhar  │ tomatterton5 │ Last-minute winner, and clean code!!!                     ║
╟────────────────┼──────────────┼───────────────────────────────────────────────────────────╢
║ harijs.deksnis │ irene1       │ Performant and so beautifully formatted - neatly readable ║
╚════════════════╧══════════════╧═══════════════════════════════════════════════════════════╝
```


### Full output log
```

EVALUATION STARTED:                 25/05/2022, 12:07:43
EVALUATING CHALLENGE:               2022/w20
FOUND 21 SOLUTIONS:                 aman1.js, bramkamies1.js, daan1.js, hossein1.js, hossein2.js, hossein3.js, hossein4.js, hossein5.js, hossein6.js,
                          irene1.js, joseph1.js, joseph2.js, joseph3.js, lee1.js, tomatterton1.js, tomatterton2.js, tomatterton3.js,
                          tomatterton4.js, tomatterton5.js, varun1.js, varun2.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 10000 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   25/05/2022, 13:38:24
DURATION:                           1 hour, 30 minutes, 40.482 seconds

RANKINGS:
╔═══════╤════════╤══════════════╤════════════╤════════════╤══════════════╤══════╗
║ Place │ Points │ Name         │ Total      │ Best run   │ Best compile │ Size ║
╟───────┼────────┼──────────────┼────────────┼────────────┼──────────────┼──────╢
║ 1     │ 25     │ tomatterton5 │ 0.899ms    │ 0.848ms    │ 0.051ms      │ 484  ║
╟───────┼────────┼──────────────┼────────────┼────────────┼──────────────┼──────╢
║ 2     │ 18     │ irene1       │ 0.961ms    │ 0.904ms    │ 0.058ms      │ 787  ║
╟───────┼────────┼──────────────┼────────────┼────────────┼──────────────┼──────╢
║       │ 18     │ hossein6     │ 0.968ms    │ 0.890ms    │ 0.078ms      │ 928  ║
╟───────┼────────┼──────────────┼────────────┼────────────┼──────────────┼──────╢
║ 4     │ 12     │ varun2       │ 2.511ms    │ 2.409ms    │ 0.101ms      │ 1357 ║
╟───────┼────────┼──────────────┼────────────┼────────────┼──────────────┼──────╢
║ 5     │ 10     │ daan1        │ 25.281ms   │ 25.200ms   │ 0.081ms      │ 1825 ║
╟───────┼────────┼──────────────┼────────────┼────────────┼──────────────┼──────╢
║ 6     │ 8      │ aman1        │ 183.524ms  │ 183.473ms  │ 0.051ms      │ 297  ║
╟───────┼────────┼──────────────┼────────────┼────────────┼──────────────┼──────╢
║ 7     │ 6      │ lee1         │ 893.192ms  │ 893.135ms  │ 0.057ms      │ 234  ║
╟───────┼────────┼──────────────┼────────────┼────────────┼──────────────┼──────╢
║ 8     │ 4      │ bramkamies1  │ 1018.481ms │ 1018.429ms │ 0.052ms      │ 173  ║
╟───────┼────────┼──────────────┼────────────┼────────────┼──────────────┼──────╢
║       │ 4      │ joseph1      │ 1029.368ms │ 1029.311ms │ 0.058ms      │ 232  ║
╚═══════╧════════╧══════════════╧════════════╧════════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              hossein3.js, tomatterton4.js, hossein2.js, tomatterton2.js, hossein4.js

ONLY CODEGOLF SOLUTIONS:            hossein1.js, hossein5.js, joseph2.js, joseph3.js, tomatterton1.js, tomatterton3.js, varun1.js

CODEGOLF AWARD:                     hossein5.js, tomatterton3.js with 51 bytes

SYSTEM INFO:
NODE: v16.14.2
ARCH: x64
PLATFORM: linux
VERSION: #56-Ubuntu SMP Mon Oct 5 14:28:49 UTC 2020
MEMORY: 15.64GB
CPUS: 2 x Intel(R) Xeon(R) Gold 6248 CPU @ 2.50GHz
CPU speed: 2494MHz

RAW RESULTS:
┌─────────┬───────────────────┬────────────────────┬────────────────────┬──────────────────────┬──────┬────────────────┬────────────────────┬──────────────┬────────┬────────────┬──────┐
│ (index) │     solution      │       total        │      bestRun       │     bestCompile      │ size │    compiled    │   validationTime   │ onlyCodegolf │ failed │ failReason │ runs │
├─────────┼───────────────────┼────────────────────┼────────────────────┼──────────────────────┼──────┼────────────────┼────────────────────┼──────────────┼────────┼────────────┼──────┤
│    0    │ 'tomatterton5.js' │ 0.8990340000018477 │  0.84842099994421  │ 0.05061300005763769  │ 484  │ 'successfully' │ 9.740766999995685  │    false     │ false  │    null    │ 1100 │
│    1    │    'irene1.js'    │ 0.9614569991827011 │ 0.9038439998403192 │ 0.057612999342381954 │ 787  │ 'successfully' │ 10.585583000000042 │    false     │ false  │    null    │ 1100 │
│    2    │   'hossein6.js'   │ 0.967756999656558  │ 0.8901229999028146 │ 0.07763399975374341  │ 928  │ 'successfully' │ 16.16402300000118  │    false     │ false  │    null    │ 1100 │
│    3    │   'hossein3.js'   │ 1.9302900000475347 │ 1.8615760002285242 │  0.0687139998190105  │ 757  │ 'successfully' │ 19.100946999998996 │    false     │ false  │    null    │ 1100 │
│    4    │ 'tomatterton4.js' │ 2.2075230004265904 │ 2.1538929999805987 │ 0.053630000445991755 │ 585  │ 'successfully' │ 11.017230000004929 │    false     │ false  │    null    │ 1100 │
│    5    │    'varun2.js'    │ 2.5107230003923178 │ 2.4094950002618134 │ 0.10122800013050437  │ 1357 │ 'successfully' │ 10.66886599999998  │    false     │ false  │    null    │ 1100 │
│    6    │   'hossein2.js'   │ 3.3216570001095533 │ 3.2534699998795986 │ 0.06818700022995472  │ 747  │ 'successfully' │ 22.146570999997493 │    false     │ false  │    null    │ 1100 │
│    7    │    'daan1.js'     │ 25.281027999473736 │ 25.200438000028953 │ 0.08058999944478273  │ 1825 │ 'successfully' │ 72.62847900000088  │    false     │ false  │    null    │ 1100 │
│    8    │    'aman1.js'     │ 183.52387000015005 │ 183.4732429999858  │  0.0506270001642406  │ 297  │ 'successfully' │ 238.00568600000042 │    false     │ false  │    null    │ 1100 │
│    9    │ 'tomatterton2.js' │ 396.7899589994922  │ 396.7394880000502  │ 0.05047099944204092  │ 465  │ 'successfully' │ 424.29467499999737 │    false     │ false  │    null    │ 1100 │
│   10    │     'lee1.js'     │ 893.1924159992486  │ 893.1351689994335  │ 0.05724699981510639  │ 234  │ 'successfully' │ 5429.960180999995  │    false     │ false  │    null    │ 1100 │
│   11    │ 'bramkamies1.js'  │ 1018.4810939999297 │ 1018.4286989998072 │ 0.052395000122487545 │ 173  │ 'successfully' │ 786.4633549999999  │    false     │ false  │    null    │ 1100 │
│   12    │   'joseph1.js'    │ 1029.3683779998682 │ 1029.3107639998198 │ 0.05761400004848838  │ 232  │ 'successfully' │ 5405.609442999999  │    false     │ false  │    null    │ 1100 │
│   13    │   'hossein4.js'   │ 1115.3853590004146 │ 1115.3237420003861 │ 0.06161700002849102  │  57  │ 'successfully' │ 1597.2374629999977 │    false     │ false  │    null    │ 1100 │
│   14    │   'hossein1.js'   │        null        │        null        │         null         │  58  │ 'successfully' │ 4354.522186000002  │     true     │ false  │    null    │  0   │
│   15    │   'hossein5.js'   │        null        │        null        │         null         │  51  │ 'successfully' │ 4936.038876999999  │     true     │ false  │    null    │  0   │
│   16    │   'joseph2.js'    │        null        │        null        │         null         │  76  │ 'successfully' │ 3475.193084999999  │     true     │ false  │    null    │  0   │
│   17    │   'joseph3.js'    │        null        │        null        │         null         │  74  │ 'successfully' │ 9381.201438000004  │     true     │ false  │    null    │  0   │
│   18    │ 'tomatterton1.js' │        null        │        null        │         null         │  55  │ 'successfully' │ 3813.422378999996  │     true     │ false  │    null    │  0   │
│   19    │ 'tomatterton3.js' │        null        │        null        │         null         │  51  │ 'successfully' │ 3785.5053649999973 │     true     │ false  │    null    │  0   │
│   20    │    'varun1.js'    │        null        │        null        │         null         │  57  │ 'successfully' │ 3844.3593210000035 │     true     │ false  │    null    │  0   │
└─────────┴───────────────────┴────────────────────┴────────────────────┴──────────────────────┴──────┴────────────────┴────────────────────┴──────────────┴────────┴────────────┴──────┘
```
  