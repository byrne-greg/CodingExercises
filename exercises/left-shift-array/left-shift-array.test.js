const leftShiftArray = require("./left-shift-array");
const assert = require("assert");

describe("left-shift-array", () => {
  var tests = [
    {
      args: [[2, 1, 5, 3, 4]],
      expected: 3
    },
    {
      args: [[2, 5, 1, 3, 4]],
      expected: "Too chaotic"
    },
    {
      args: [[1, 2, 5, 3, 4, 7, 8, 6]],
      expected: 4
    },
    {
      args: [[5, 1, 2, 3, 7, 8, 6, 4]],
      expected: "Too chaotic"
    },
    {
      args: [[1, 2, 5, 3, 7, 8, 6, 4]],
      expected: 7
    }
  ];

  tests.forEach(test => {
    it(`testcase - left shift ${test.args[0]} - expected: ${
      test.expected
    }`, () => {
      var res = leftShiftArray.apply(null, test.args);
      assert.equal(res, test.expected);
    });
  });
});
