const utils = require(".");

describe("imports", function() {
  test("entire lib", function() {
    expect(typeof utils).toBe("object");
  });
});
