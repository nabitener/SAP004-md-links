const mdLinks = require("../src/index.js");

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

describe("mdLinks", () => {
  it("should be a function", () => {
    expect(typeof mdLinks).toBe("function");
  });

  it("should return links", () => {
    return expect(mdLinks("ReadTest.md")).resolves.toEqual(links);
  });

  it("should return links with validate", () => {
    return expect(mdLinks("./test", "--validate")).resolves.toEqual([
      {
        file: "ReadTest.md",
        href: "https://en.wi.org/wiki/Luhn_algorithm",
        status: "Fail 404",
        text: "algoritmo de Luhn",
      },
      {
        file: "ReadTest.md",
        href:
          "https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png",
        status: "OK 200",
        text: "gráfico do algoritmo de Luhn",
      },
      {
        file: "ReadTest.md",
        href: "https://atom.io/",
        status: "OK 200",
        text: "Atom",
      },
      {
        file: "ReadTest.md",
        href: "https://code.visualstudio.com/",
        status: "OK 200",
        text: "Code",
      },
      {
        file: "ReadTest.md",
        href:
          "https://github.com/Laboratoria/bootcamp/tree/master/topics/shell",
        status: "OK 200",
        text: "Shell UNIX",
      },
      {
        file: "ReadTest.md",
        href:
          "https://github.com/Laboratoria/bootcamp/tree/master/topics/scm/01-git",
        status: "OK 200",
        text: "git",
      },
      {
        file: "ReadTest.md",
        href: "https://cmder.net/",
        status: "OK 200",
        text: "Cmder",
      },
      {
        file: "ReadTest.md",
        href: "https://git-scm.com/download/win",
        status: "OK 200",
        text: "Git bash",
      },
      {
        file: "ReadTest.md",
        href: "https://docs.microsoft.com/en-us/windows/wsl/install-win10",
        status: "OK 200",
        text: "Windows Subsystem for Linux",
      },
      {
        file: "ReadTest.md",
        href: "https://help.github.com/articles/cloning-a-repository/",
        status: "OK 200",
        text: "Clone",
      },
      {
        file: "ReadTest.md",
        href: "https://nodejs.org/",
        status: "OK 200",
        text: "Node.js",
      },
      {
        file: "ReadTest.md",
        href: "https://docs.npmjs.com/",
        status: "OK 200",
        text: "npm",
      },
    ]);
  });
});
