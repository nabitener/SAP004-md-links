const mdLinks = require("../src/index.js");
const readFile = require("../src/readFile");
const readDirectory = require("../src/readDirectory");

describe("mdLinks", () => {
  it("should be a function", () => {
    expect(typeof mdLinks).toBe("function");
  });
});

describe("readFile", () => {
  it("should be a function", () => {
    expect(typeof readFile).toBe("function");
  });
});

describe("readDirectory", () => {
  it("should be a function", () => {
    expect(typeof readDirectory).toBe("function");
  });
});