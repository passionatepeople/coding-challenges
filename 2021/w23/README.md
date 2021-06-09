# Week 23 challenge

You need to write `howLong` function, which takes in a number representing seconds and returns a string in a human readable form.

Inputs range from 1 to 100000000 seconds (including)

**Notes:**
- parts are separated by commas, except the last (or only) parts are separated by "and"
- if there is a single part, it is written as singular, otherwise as plural
- output starts with larger units (e.g., years before months)
- parts with 0 units are skipped

Examples:
```
howLong(1) // returns "1 second"
howLong(60) // returns "1 minute"
howLong(123) // returns "2 minutes and 3 seconds"
howLong(3599) // returns "59 minutes and 59 seconds"
howLong(3600) // returns "1 hour"
howLong(3601) // returns "1 hour and 1 second"
howLong(100000) // returns "1 day, 3 hours, 46 minutes and 40 seconds"
howLong(1000000) // returns "11 days, 13 hours, 46 minutes and 40 seconds"
howLong(10000000) // returns "115 days, 17 hours, 46 minutes and 40 seconds"
howLong(100000000) // returns "3 years, 62 days, 9 hours, 46 minutes and 40 seconds"
```


## Upload link

[PP Connect](https://connect.passionatepeople.io/code-challenge-submission)


## Results

