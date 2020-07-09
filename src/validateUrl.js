const fetch = require("node-fetch");

validateUrl = (url) => {
  return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          const statusNumber = response.status;
          const statusUrl = response.statusText;
          const performance = `${statusNumber} ${statusUrl}`;
          resolve(performance);
        })
        .catch((error) => {
          error = "Erro com a url";
          reject(error);
        });
    });
  }
  
//validateUrl("https://pt.wikipedia.org/wiki/Markdown");

module.exports = validateUrl;