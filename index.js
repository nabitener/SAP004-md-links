const fs = require("fs");
const path = require("path");

mdLinks = (file) => {
  const extension = path.extname(file);

  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (error, data) => {
      if (error || extension !== ".md") {
        reject(error.message);
      } else {
        resolve(formArray(file));
      }
    });
  });
};

formArray = (file) => {
  const textLink = /\[\w*\]/;
  const hrefLink = /\(([^#]\S+)\)/gm;
  const regex = textLink + hrefLink;
  const arrayLinks = [];

  const links = data.match(regex);
  links.forEach((index) => {
    const text = index.match(textLink)[0];
    const href = index.match(hrefLink)[1];
    arrayLinks.push({ file, href, text });
  });
  return arrayLinks;
};

//mdLinks('./README.md');

module.exports = mdLinks;
