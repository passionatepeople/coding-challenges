# Tips & Tricks

Here are some Tips & Tricks that have been shared by our regular participants which should help you attain a better score in the challenges.

*Disclaimer:* since the principles in real life differ greatly from coding challenges, don't treat these as suggestions for good code.
In real life maintainability, readability and simplicity plays a far more important role.
Performance comes into play only when you are dealing with particular bottlenecks. For example, you might want to optimize aggressively if you are dealing with sophisticated computation in an event listener for a scroll event.
And currently I can't think of a plausible real life scenario where codegolf principles would be useful :)


We can split the tips & tricks into sections for Macro, Micro and Codegolf.

_Macro-optimizations are what you apply in the real world if there's a (potential) performance bottleneck. Micro-optimizations are what you apply in the real world if you hate your colleagues._ - Peter-Paul


## Macro optimizations
- avoid unnecessary loops (and other things that affect time complexity order), how trubofan and other optimizing compilers work, etc. (Peter-Paul)
- assigning new memory and/or making garbage collection kick in costs time, so avoid creating a new array with `[...oldItems, newItem]` unnecessarily, but push to an existing array, if possible (Harijs)
- can use a Map or object to store intermediary results so you can reuse those (Jan Bart)
- use for loops where possible (instead .forEach) (Jan Bart)
- consider if there is stuff you can pre-generate (the prime number, for instance)(Jan Bart)
- creating objects is expensive, so make them first and then fill them (Dexter)
- function calls are expensive (Dexter)
- lookups from nested closures take longer than local variables (Dexter)

## Micro optimizations
- `~~n` is faster than `n|0` (Peter-Paul)
- for string manipulation, it seems best to use the ‘+’ sign rather than templates (Jan Bart)


## Codegolf optimizations
- as a general tip - knowing JS API surface helps a lot, so reading through documentation ([1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) [2](https://nodejs.org/dist/latest-v14.x/docs/api/)) regularly will not only let you find short solutions, but be a really knowledgeable developer (Harijs)
- study older code golf submissions for ideas (Irene)
- read [tips-for-golfing-in-javascript](https://codegolf.stackexchange.com/questions/2682/tips-for-golfing-in-javascript) and [tips-for-golfing-in-ecmascript-6-and-above](https://codegolf.stackexchange.com/questions/37624/tips-for-golfing-in-ecmascript-6-and-above) because they cover a lot of cases (Irene)
- declaring objects in arguments saves declarations (Dexter)
