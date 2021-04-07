# Week 14 challenge

## ButY evaluator

For this week's challenge you will implement an **evaluator** for **math expressions** in the imaginary programming language **ButY**.

### Example

Here's an example of a simple math expression in ButY:

```text
5 × ⸨ ⸨ 18 ÷ 2 ⸩ − 7 ⸩
```

Which... yeah. Luckily you won't have to write a lexer or parser, because your evaluator will be given an **Abstract Syntax Tree** as input:

```js
{
  type: 'BinaryExpression',
  operator: 'multiply',
  left: {
    type: 'Literal',
    value: 5
  },
  right: {
    type: 'BinaryExpression',
    operator: 'subtract',
    left: {
      type: 'BinaryExpression',
      operator: 'divide',
      left: {
        type: 'Literal',
        value: 18
      },
      right: {
        type: 'Literal',
        value: 2
      }
    },
    right: {
      type: 'Literal',
      value: 7
    }
  }
}
```

In this example the expected return value is `10`.

#### Examples in code

```
evaluate({ type: 'Literal', value: 42 });
// returns 42

evaluate({
  type: 'BinaryExpression',
  operator: 'add',
  left: { type: 'Literal', value: 32 },
  right: { type: 'Literal', value: 10 },
});
// returns 42
```

### AST interface

```
type Expression = Literal | BinaryExpression

type Literal = {
  type: 'Literal',
  value: number
}

type BinaryExpression = {
  type: 'BinaryExpression',
  operator: 'add', 'subtract', 'multiply', 'divide',
  left: Expression,
  right: Expression
}
```

### Other notes

You do not need to account for dividing by 0.

### Author

Peter-Paul

### Upload link

### Results