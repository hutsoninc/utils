const utils = require(".");
const { csvToJson, delay, jsonToCsv, xmlToJson } = require(".");

describe("imports", function() {
  test("entire lib", function() {
    expect(utils).toBeInstanceOf(Object);
  });

  test("individual functions", function() {
    expect(csvToJson).toBeInstanceOf(Function);
    expect(delay).toBeInstanceOf(Function);
    expect(jsonToCsv).toBeInstanceOf(Function);
    expect(xmlToJson).toBeInstanceOf(Function);
  });
});
