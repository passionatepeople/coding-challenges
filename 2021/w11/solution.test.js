const solution = require('./solution');
const testCases = require('./test-cases/spec.json');

test('passes basic predefined tests', () => {

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

  expect(solution(dataFromApi)).toEqual(result);
});

test('passes pregenerated random test cases', () => {
  testCases.forEach(({ inputs, result }) => expect(solution(...inputs)).toEqual(result));
});

