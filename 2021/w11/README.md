# Week 11 challenge

You want to display a nice table with data from a JSON API.
To do that you need to simply parse that data and create a (onedimensional) array of rows. That's what your `parseData` function will be for.

The data, however, is hierarchical (some items have children, and children could have children of their own etc.).
And theoretically the hierarchy could be infinitely deep.

Unfortunately you are dealing with a legacy API where data model is a bit odd and somewhat irregular.
And there are no backend developers that are willing to update the API for you.
So you will have to take the data as is and do all the heavy lifting yourself.

Since there is hierarchy in the data, but you want to display it as a table, you will show the hierarchy of the data by adding an indent to children.
Every level will be indented by 50 pixels.
E.g. The root level rows will have an ident of `0`, next level of `50`, then `100` etc.

## Example output
```javascript
[
  { name: 'Item 1', indent: 0, value: 42 },
  { name: 'Item 1 child 1', indent: 50, value: 42 },
  { name: 'Item 1 child 2', indent: 50, value: 70 },
  { name: 'Item 2', indent: 0, value: 70 },
  { name: 'Item 2 child 1', indent: 50, value: 70 },
  { name: 'Item 2 child 1 child 1', indent: 100, value: 70 },
  { name: 'Item 2 child 2', indent: 50, value: 70 },
  { name: 'Item 3', indent: 0, value: 70 },
]

```

## The data from API

The model of the data is a bit irregular.
* Sometimes the name of an item resides in a property `name`, sometimes `title`, but never both.
* Sometimes the value of an item resides in a property `value`, sometimes `data`, but never both.
* Sometimes children of an item reside in property `children`, sometimes `subdata`, but never both.


Example:

```javascript
const dataFromApi = [
  {
    title: 'Foo',
    data: 15,
    children: [
      {
        name: 'Bar',
        data: 12,
        subdata: [
          {
            title: 'Baz',
            value: 11
          }
        ]
      },
      {
        title: 'Lorem',
        value: 12,
      },
    ],
  },
  {
    name: 'Ipsum',
    data: 11,
  },
  {
    name: 'Dolor',
    value: 19,
    children: [
      {
        title: 'Sit',
        data: 2,
      }
    ],
  }
];

const result = [
  { name: 'Foo', indent: 0, value: 15 },
  { name: 'Bar', indent: 50, value: 12 },
  { name: 'Baz', indent: 100, value: 11 },
  { name: 'Lorem', indent: 50, value: 12 },
  { name: 'Ipsum', indent: 0, value: 11 },
  { name: 'Dolor', indent: 0, value: 19 },
  { name: 'Sit', indent: 50, value: 2 },
];


JSON.stringify(result) === JSON.stringify(parseData(dataFromApi)) // true;
```


## Upload link

[https://forms.gle/rfxzetGytGL5TuiU9]


## Results

