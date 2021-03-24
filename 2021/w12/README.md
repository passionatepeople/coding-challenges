# Week 12 challenge

For this weeks challenge you will have to apply some manipulation to a number and its digits.
Write a function `manipulateNumber` which takes an (integer) number A and
* obtains a new new number B with order of the digits reversed
* subtracts this number from the original and gets a new number C
* sums up all the digits to get number D and applies the sign which C had
* returns D

### Example 1

* Take in number 432
* Get reversed number: 234
* Subtract from original: 432 - 234 = 198
* Get final number 1 + 9 + 8 = 18 => +18 (stays positive because 198 > 0)

### Example 2

* Take in number 123
* Get reversed number: 321
* Subtract from original: 123 - 321 = -198
* Get final number 1 + 9 + 8 = 18 => -18 (becomes negative because -198 < 0)


### Example in code:

```javascript

manipulateNumber(432); // returns 18
manipulateNumber(123); // returns -18
manipulateNumber(55); // returns 0
manipulateNumber(212); // returns 0
manipulateNumber(45200); // returns 27

```


## Upload link

[https://forms.gle/Uzw41BfdXXJbyh599]


## Results

