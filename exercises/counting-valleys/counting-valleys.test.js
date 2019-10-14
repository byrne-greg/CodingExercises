const countValleys = require("./counting-valleys");
const assert = require("assert");

describe("counting-valleys", () => {
  var tests = [
    { args: [8, "UDDDUDUU"], expected: 1 },
    { args: [12, "DDUUDDUDUUUD"], expected: 2 }
  ];

  tests.forEach(test => {
    it(`testcase - ${test.args}`, () => {
      var res = countValleys.apply(null, test.args);
      assert.equal(res, test.expected);
    });
  });
});
