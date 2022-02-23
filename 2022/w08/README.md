# Week 08 challenge

Write a function `supermarket` which accepts 2 arguments. First one represents an array of customers, where each item is a customer and the number itself is how many minutes it will take to process this customer. Second argument represents how many tills are open - how many customers can be processed in parallel.

The customers are processed in order and next customer starts check out as soon as a till opens.

The result of the function is how many minutes in total it will take to process all the queue.


Examples:
```
supermarket([1, 2, 3, 4], 1) // returns 10
// because if there's only one till open, the total time is the sum of the queue

supermarket([1, 2, 3, 4], 4) // returns 4
// because if there's as many tills as customers, the total time is the max processing time in queue

supermarket([12, 2, 3, 4], 2) // returns 12
// because last 3 customers finish before the 1st one is done processing

supermarket([2, 2, 7], 2) // returns 9

supermarket([1, 2, 3, 4, 5], 3) // returns 7
// because 1, 2 and 3 will be processed in parellell. The 4 will go to first till after 1 minute. And 5 will go to 2nd till after 2 minutes and thus will take 7min in total.
```


## Upload link

[PP Connect](https://connect.passionatepeople.io/code-challenge-submission)

## Results

