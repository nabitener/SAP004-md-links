const fs = require("fs");
const readFile = require("./readFile");
const readDiretory = require("./readDirectory");


mdLinks = (file, option) => {
  verifyPath(file, option);
};


verifyPath = (file, option) => {
  fs.stat(file, (error, stats) => {
    if (error) {
      console.log(error);
    } else if (stats.isDirectory() === true) {
      readDiretory(file, option);
    } else {
      readFile(file, option);
    }
  });
};



mdLinks("./", "--validate");

//validateUrl("https://pt.wikipedia.org/wiki/Markdown");

module.exports = mdLinks;
