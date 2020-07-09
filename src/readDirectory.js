const path = require("path");
const fs = require('fs');
const readFile = require('./readFile');

readDiretory = (file) => {
  return new Promise((resolve, reject) => {
    fs.readdir(file, "utf8", (error, files) => {
      if (error) {
        reject(console.log(error));
      } else {
        files.forEach((fileOne) => {
          if (path.extname(fileOne) === ".md") {
            resolve(readFile(fileOne));
          }
        });
      }
    });
  });
};

module.exports = readDiretory;
