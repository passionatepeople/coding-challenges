# Week 13 challenge

IPv4 address is a collection of 4 octets.
For example, address `168.192.0.1` in binary can be viewed as `10101000.11000000.00000000.00000001`

Therefore IPv4 address can be represented as an unsigned 32 bit integer (max 4,294,967,295).
Your task is to write a function `int2IP` which takes in an integer (0 <= integer <= 4294967295) and returns a string representation of corresponding IPv4 address.


### Example:

```javascript
int2IP(0) // returns '0.0.0.0'
int2IP(1) // returns '0.0.0.1'
int2IP(64) // returns '0.0.0.64'
int2IP(255) // returns '0.0.0.255'
int2IP(256) // returns '0.0.1.0'
int2IP(511) // returns '0.0.1.255'
int2IP(512) // returns '0.0.2.0'
int2IP(1000000) // returns '0.15.66.64'
```


## Upload link

[https://forms.gle/LsYFiSZL1mWBicdX6]


## Results

