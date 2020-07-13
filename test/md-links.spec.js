const mdLinks = require("../src/index.js");
const readFile = require("../src/readFile");
const readDirectory = require("../src/readDirectory");

const links = [
  {
    file: "ReadTest.md",
    href: "https://en.wi.org/wiki/Luhn_algorithm",
    text: "algoritmo de Luhn",
  },
  {
    file: "ReadTest.md",
    href:
      "https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png",
    text: "gráfico do algoritmo de Luhn", 
  },
  { file: "ReadTest.md", href: "https://atom.io/", text: "Atom" },
  { file: "ReadTest.md", href: "https://code.visualstudio.com/", text: "Code" },
  {
    file: "ReadTest.md",
    href: "https://github.com/Laboratoria/bootcamp/tree/master/topics/shell",
    text: "Shell UNIX",
  },
  {
    file: "ReadTest.md",
    href:
      "https://github.com/Laboratoria/bootcamp/tree/master/topics/scm/01-git",
    text: "git",
  },
  { file: "ReadTest.md", href: "https://cmder.net/", text: "Cmder" },
  {
    file: "ReadTest.md",
    href: "https://git-scm.com/download/win",
    text: "Git bash",
  },
  {
    file: "ReadTest.md",
    href: "https://docs.microsoft.com/en-us/windows/wsl/install-win10",
    text: "Windows Subsystem for Linux",
  },
  {
    file: "ReadTest.md",
    href: "https://help.github.com/articles/cloning-a-repository/",
    text: "Clone",
  },
  { file: "ReadTest.md", href: "https://nodejs.org/", text: "Node.js" },
  { file: "ReadTest.md", href: "https://docs.npmjs.com/", text: "npm" },
];

const linksValidate = [
  {
    file: "ReadTest.md",
    href: "https://en.wi.org/wiki/Luhn_algorithm",
    text: "algoritmo de Luhn",
    status: "Fail 404",
  },
  {
    file: "ReadTest.md",
    href:
      "https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png",
    text: "gráfico do algoritmo de Luhn",
    status: "OK 200",
  },
  {
    file: "ReadTest.md",
    href: "https://atom.io/",
    text: "Atom",
    status: "OK 200",
  },
  {
    file: "ReadTest.md",
    href: "https://code.visualstudio.com/",
    text: "Code",
    status: "OK 200",
  },
  {
    file: "ReadTest.md",
    href: "https://github.com/Laboratoria/bootcamp/tree/master/topics/shell",
    text: "Shell UNIX",
    status: "OK 200",
  },
  {
    file: "ReadTest.md",
    href:
      "https://github.com/Laboratoria/bootcamp/tree/master/topics/scm/01-git",
    text: "git",
    status: "OK 200",
  },
  {
    file: "ReadTest.md",
    href: "https://cmder.net/",
    text: "Cmder",
    status: "OK 200",
  },
  {
    file: "ReadTest.md",
    href: "https://git-scm.com/download/win",
    text: "Git bash",
    status: "OK 200",
  },
  {
    file: "ReadTest.md",
    href: "https://docs.microsoft.com/en-us/windows/wsl/install-win10",
    text: "Windows Subsystem for Linux",
    status: "OK 200",
  },
  {
    file: "ReadTest.md",
    href: "https://help.github.com/articles/cloning-a-repository/",
    text: "Clone",
    status: "OK 200",
  },
  {
    file: "ReadTest.md",
    href: "https://nodejs.org/",
    text: "Node.js",
    status: "OK 200",
  },
  {
    file: "ReadTest.md",
    href: "https://docs.npmjs.com/",
    text: "npm",
    status: "OK 200",
  },
];

describe("mdLinks", () => {
  it("should be a function", () => {
    expect(typeof mdLinks).toBe("function");
  });
  it("should return links", (done) => {
    mdLinks("ReadTest.md").then((arrayLinks) => {
      expect(arrayLinks).toEqual(links);
      done();
    });
  });
  it("should return links with status", () => {
   return expect(mdLinks("./test")).resolves.toEqual(linksValidate);
  });
});

describe("readFile", () => {
  it("should be a function", () => {
    expect(typeof readFile).toBe("function");
  });
  it("should return links", (done) => {
    readFile("ReadTest.md").then((arrayLinks) => {
      expect(arrayLinks).toBe(links);
      done();
    });
  });
  it("should return links with status", (done) => {
    readFile("ReadTest.md", "--validate").then((arrayLinks) => {
      expect(arrayLinks).toBe(linksValidate);
      done();
    });
  });
});

describe("readDirectory", () => {
  it("should be a function", () => {
    expect(typeof readDirectory).toBe("function");
  });
  it("should retorn links from extension .md", () => {
    return expect(readDirectory("./test")).resolves.toEqual(links);
  });
  });

