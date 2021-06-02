const fs = require("fs");
const path = require("path");
const spec = require("./test-cases/spec.json");
const solutions = fs.readdirSync(path.resolve(__dirname, "solutions"));

describe.each(solutions)("%s", (filename) => {
  const evaluate = require(path.resolve(__dirname, "solutions", filename));

  test.each([
    [
      [
        [
          { home: "PSV", away: "Ajax", result: "3-1" },
          { away: "PSV", home: "Ajax", result: "1-1" },
          { away: "Vitesse", result: "1-0", home: "Feyenoord" },
        ],
      ],
      [
        {
          team: "PSV",
          matches: 2,
          points: 4,
          goals: { for: 4, against: 2, difference: 2 },
        },
        {
          team: "Feyenoord",
          matches: 1,
          points: 3,
          goals: { for: 1, against: 0, difference: 1 },
        },
        {
          team: "Ajax",
          matches: 2,
          points: 1,
          goals: { for: 2, against: 4, difference: -2 },
        },
        {
          team: "Vitesse",
          matches: 1,
          points: 0,
          goals: { for: 0, against: 1, difference: -1 },
        },
      ],
    ],
    [
      [
        [
          { home: "PSV", away: "Ajax", result: "0-0" },
          { away: "PSV", home: "Ajax", result: "0-0" },
        ],
      ],
      [
        {
          team: "Ajax",
          matches: 2,
          points: 2,
          goals: { for: 0, against: 0, difference: 0 },
        },
        {
          team: "PSV",
          matches: 2,
          points: 2,
          goals: { for: 0, against: 0, difference: 0 },
        },
      ],
    ],
    [
      [
        [
          { home: "Barcelona", away: "Real Madrid", result: "3-1" },
          { away: "Barcelona", home: "Real Madrid", result: "3-0" },
          { home: "Villareal", result: "3-1", away: "Atletico Madrid" },
          { away: "Villareal", result: "3-1", home: "Atletico Madrid" },
        ],
      ],
      [
        {
          team: "Real Madrid",
          matches: 2,
          points: 3,
          goals: { for: 4, against: 3, difference: 1 },
        },
        {
          team: "Atletico Madrid",
          matches: 2,
          points: 3,
          goals: { for: 4, against: 4, difference: 0 },
        },
        {
          team: "Villareal",
          matches: 2,
          points: 3,
          goals: { for: 4, against: 4, difference: 0 },
        },
        {
          team: "Barcelona",
          matches: 2,
          points: 3,
          goals: { for: 3, against: 4, difference: -1 },
        },
      ],
    ],
    [
      [
        [
          { home: "Barcelona", away: "Real Madrid", result: "3-1" },
          { away: "Barcelona", home: "Real Madrid", result: "3-1" },
          { home: "Villareal", result: "3-1", away: "Atletico Madrid" },
          { away: "Villareal", result: "3-1", home: "Atletico Madrid" },
        ],
      ],
      [
        {
          team: "Atletico Madrid",
          matches: 2,
          points: 3,
          goals: { for: 4, against: 4, difference: 0 },
        },
        {
          team: "Barcelona",
          matches: 2,
          points: 3,
          goals: { for: 4, against: 4, difference: 0 },
        },
        {
          team: "Real Madrid",
          matches: 2,
          points: 3,
          goals: { for: 4, against: 4, difference: 0 },
        },
        {
          team: "Villareal",
          matches: 2,
          points: 3,
          goals: { for: 4, against: 4, difference: 0 },
        },
      ],
    ],
  ])("%j = %j", (inputs, result) => {
    expect(evaluate(...inputs)).toEqual(result);
  });

  test.each(spec.map(({ inputs, result }) => [inputs, result]))(
    "%j = %j",
    (inputs, result) => {
      expect(evaluate(...inputs)).toEqual(result);
    }
  );
});
