const fs = require("fs");
const readFile = require("./readFile");
const readDiretory = require("./readDirectory");


mdLinks = (file, validate=false) => {
  verifyPath(file, validate=false);
};


verifyPath = (file, validate=false) => {
  fs.stat(file, (error, stats) => {
    if (error) {
      console.log(error);
    } else if (stats.isDirectory() === true) {
      readDiretory(file, validate=false);
    } else {
      readFile(file, validate=false);
    }
  });
};



mdLinks("./", validate = true);

//validateUrl("https://pt.wikipedia.org/wiki/Markdown");

module.exports = mdLinks;
