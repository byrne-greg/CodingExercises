const changeInCoins = require("./change-in-coins");
const assert = require("assert");

const euroDenominations = [
  {
    description: "1-cent",
    pennyAmount: 1
  },
  {
    description: "2-cent",
    pennyAmount: 2
  },
  {
    description: "5-cent",
    pennyAmount: 5
  },
  {
    description: "10-cent",
    pennyAmount: 10
  },
  {
    description: "20-cent",
    pennyAmount: 20
  },
  {
    description: "50-cent",
    pennyAmount: 50
  },
  {
    description: "1-Euro",
    pennyAmount: 100
  },
  {
    description: "2-Euro",
    pennyAmount: 200
  }
];

const usDenominations = [
  {
    description: "1-cent",
    pennyAmount: 1
  },
  {
    description: "nickel",
    pennyAmount: 5
  },
  {
    description: "dime",
    pennyAmount: 10
  },
  {
    description: "quarter",
    pennyAmount: 25
  },
  {
    description: "50-cent",
    pennyAmount: 50
  },
  {
    description: "1-Dollar",
    pennyAmount: 100
  }
];

describe("change-in-coins", () => {
  var tests = [
    {
      denomination: "Euro",
      args: [398, euroDenominations],
      expected: [
        [1, "2-Euro"],
        [1, "1-Euro"],
        [1, "50-cent"],
        [2, "20-cent"],
        [1, "5-cent"],
        [1, "2-cent"],
        [1, "1-cent"]
      ]
    },
    {
      denomination: "US",
      args: [398, usDenominations],
      expected: [
        [3, "1-Dollar"],
        [1, "50-cent"],
        [1, "quarter"],
        [2, "dime"],
        [3, "1-cent"]
      ]
    },
    {
      denomination: "Euro",
      args: [99, euroDenominations],
      expected: [[1, "50-cent"], [2, "20-cent"], [1, "5-cent"], [2, "2-cent"]]
    },
    {
      denomination: "US",
      args: [99, usDenominations],
      expected: [[1, "50-cent"], [1, "quarter"], [2, "dime"], [4, "1-cent"]]
    },
    {
      denomination: "Euro",
      args: [26, euroDenominations],
      expected: [[1, "20-cent"], [1, "5-cent"], [1, "1-cent"]]
    },
    {
      denomination: "US",
      args: [26, usDenominations],
      expected: [[1, "quarter"], [1, "1-cent"]]
    },
    {
      denomination: "Euro",
      args: [14, euroDenominations],
      expected: [[1, "10-cent"], [2, "2-cent"]]
    },
    {
      denomination: "US",
      args: [14, usDenominations],
      expected: [[1, "dime"], [4, "1-cent"]]
    }
  ];

  tests.forEach(test => {
    it(`testcase - ${test.args[0]} pennies in ${test.denomination}`, () => {
      var res = changeInCoins.apply(null, test.args);
      assert.deepEqual(res, test.expected);
    });
  });
});
