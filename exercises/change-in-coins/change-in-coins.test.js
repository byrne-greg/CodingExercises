const changeInCoins = require("./change-in-coins");
const assert = require("assert");

describe("change-in-coins", () => {
  var tests = [
    {
      args: [398],
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
      args: [99],
      expected: [[1, "50-cent"], [2, "20-cent"], [1, "5-cent"], [2, "2-cent"]]
    },
    {
      args: [14],
      expected: [[1, "10-cent"], [2, "2-cent"]]
    }
  ];

  tests.forEach(test => {
    it(`testcase - ${test.args[0]} pennies`, () => {
      var res = changeInCoins.apply(null, test.args);
      assert.deepEqual(res, test.expected);
    });
  });
});
