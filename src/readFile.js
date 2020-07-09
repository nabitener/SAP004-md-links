const path = require("path");
const fs = require("fs");
const fetch = require("node-fetch");
//const validateUrl = require("./validateUrl");
const textLink = /\[(.[^\]]*)\]/;
const hrefLink = /\(([^#]\S+)\)/;
const regex = /\[(.[^\]]*)\]\(([^#]\S+)\)/gm;
const arrayLinks = [];

readFile = (file, option) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (error, data) => {
      if (error || path.extname(file) !== ".md") {
        reject(error);
      } else {
        const links = data.match(regex);
        links.forEach((index) => {
          const text = index.match(textLink)[1];
          const href = index.match(hrefLink)[1];
          arrayLinks.push({ file, href, text });
          return (arrayLinks);
        });
        if (option === "--validate") {
          Promise.all(
            arrayLinks.map((link) => {
              return new Promise((resolve) => {
                fetch(link.href)
                  .then((response) => {
                    resolve({
                      ...link,
                      Status: `${response.statusText} ${response.status}`,
                    });
                  })
                  .catch(() => {
                    resolve({
                      ...link,
                      performance: 404,
                    });
                  });
              });
            })
          ).then((data) => {
            resolve(console.log(data));
          });
        }
      }
    });
  });
};

module.exports = readFile;