const fs = require("fs");
const path = require("path");

const textLink = /[^!]\[(.[^\]]*)\]/;
const hrefLink = /\(([^#]\S+)\)/;
const regex = /[^!]\[(.[^\]]*)\]\(([^#]\S+)\)/gm;
const arrayLinks = [];

mdLinks = (file) => {
  readFile(file);
};

readDiretory = (path1) => {
  return new Promise((resolve, reject) => {
    fs.readdir(path1, "utf8", (error, files) => {
      if (error) {
        reject(console.log(error));
      } else {
        files.forEach((file) => {
          if (path.extname(file) === ".md") {
            resolve(readFile(file));
          }
        });
      }
    });
  });
};

readFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (error, data) => {
      if (error || path.extname(file) !== ".md") {
        reject(error);
      } else {
        resolve(formArray(file, data));
      }
    });
  });
};

formArray = (file, data) => {
  const links = data.match(regex);
  links.forEach((index) => {
    const text = index.match(textLink)[0];
    const href = index.match(hrefLink)[1];
    arrayLinks.push({ file, href, text });
  });
  return console.log(arrayLinks);
};

//mdLinks('./README.md');

readDiretory("./");

module.exports = mdLinks;
