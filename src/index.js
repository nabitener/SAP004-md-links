const fs = require('fs');
const readFile = require('./readFile');
const readDiretory = require('./readDirectory');

mdLinks = (file, option) => {
  return new Promise((resolve, reject) => {
    fs.stat(file, (error, stats) => {
      if (error) {
        error = "Verifique o arquivo ou diretório"
        reject(error);
      } else if (stats.isDirectory() === true) {
        resolve(readDiretory(file, option));
      } else {
        resolve(readFile(file, option));
      }
    })
  });
};


module.exports = mdLinks;
