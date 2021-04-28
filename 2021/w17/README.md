# Week 17 challenge

You have joined a team which works on a new programming language. The language is intended to be functional lisp-like.
So a lot of parenthesis in the syntax.

You pick up the task to write utility for the parser, which will simply validate if in given string the parenthesis are valid.
E.g. are they wrapping and closing properly.

This function should only look at parenthesis and, thus, ignore any other characters that might be in it.


Examples:
```
isValid('fn(1, 2, 3)') // returns true
isValid('!)()()') // return false
isValid('()') // returns true
isValid('())') // returns false
isValid('(()(()))') // returns true
isValid(')(()(()))') // returns false
isValid('((777))(((arg)())(...rest))') // returns true
isValid('((777))((...args)())(9))') // returns false

```


## Upload link

[https://forms.gle/N4rY73sULh3prw96A]


## Results

