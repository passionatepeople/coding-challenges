# Week 15 challenge

Congratulations! You have inheritted a huge legacy code base, and it is a mess! The naming convention is a total chaos.
Variables and functions are named in all sorts of ways. Worst of all - even hybrid naming conventions are there.

You and your colleague decide that it cannot stay that way for longer, and everything must be renamed to camel case.
Your colleague will do the scraping the codebase and collecting all instances of variable & function names.
Your task is to write a function `fixCase` which, given a variable name, in one of the many cases, always returns it renamed to a proper camel case.

**Note:**

Thanks to Lars for pointing out that there is a method in lodash [https://lodash.com/docs/4.17.15#camelCase] that does this one one go :)
For the sake of keeping competition exciting, using this method is prohibited in this challenge.

Examples:
```
fixCase('one') // returns 'one'
fixCase('ONE') // returns 'one'
fixCase('oneTwoThree') // returns 'oneTwoThree'
fixCase('OneTwoThree') // returns 'oneTwoThree'
fixCase('one-two-three') // returns 'oneTwoThree'
fixCase('one_two_three') // returns 'oneTwoThree'
fixCase('one_Two_three') // returns 'oneTwoThree'
fixCase('one_two-three') // returns 'oneTwoThree'
fixCase('one__two__three') // returns 'oneTwoThree'
fixCase('one--two--three') // returns 'oneTwoThree'
fixCase('one__two--three') // returns 'oneTwoThree'
fixCase('ONE_two_THREE') // returns 'oneTwoThree'
fixCase('ONE_Two--THREE') // returns 'oneTwoThree'
fixCase('ONE_Two--THREE') // returns 'oneTwoThree'
```


## Upload link

[https://forms.gle/R1ephy3ASZdNG8JKA]


## Results

