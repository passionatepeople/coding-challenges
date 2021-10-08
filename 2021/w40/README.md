# Week 40 challenge

Jerry likes playing cards with friends. One day, he sat for a game with a random stranger in the park. As the game progressed, jerry started suspecting that the stranger might have swapped a card with one of his own card. He needs help to find out if there is an invalid card in the deck.

Each card in the deck is represented by an alphabet (case-sensitive) and number of cards used for the game is not fixed.

Jerry knows the initial set of cards in the deck and the current set. Help in identify if there is an additional card in the deck. Note: The deck was shuffled in-between.

Example:
```
helpJerry('aysllash', 'haasslyh') // return ['l', 'h']
```

Explanation:

Initial set of cards: syllaash
Set of cards during check: aysllash

By looking at both the sets, the stranger has swapped the card `l` with the card `h` without jerry's knowledge.


Other Examples:
```
helpJerry('iermnerw', 'eenrmwri') // return []
helpJerry('abbcse', 'bcaedb') // return ['s', 'd']
helpJerry('rcjVnbgFkKlRAdhCakABwNdnsSjanDHkEe', 'hjRgkaHkeNKnEBFckanjAsAdrjVdDbCnlw') // return ['S', 'j']
helpJerry('QEEKFUpHRBNAWHBYUwKqVJBBKJ', 'UpKFBUQHJVKEPNqBYKEBABRWwH') // return ['J', 'P']
```

## Author

Varun


## Upload link

[PP Connect](https://connect.passionatepeople.io/code-challenge-submission)


## Results

