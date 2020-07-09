const path = require("path");
const fs = require('fs');
const formArray = require('./formArray');

readFile = (file, validate = false) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (error, data) => {
      if (error || path.extname(file) !== ".md") {
        reject(error);
      } else {
        resolve(formArray(file, data, validate = false));
      }
    });
  });
};

module.exports = readFile;
