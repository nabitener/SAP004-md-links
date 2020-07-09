const fetch = require("node-fetch");

validateUrl = (url) => {
    return new Promise((resolve, reject) => {
      fetch(url).then((response) => {
        if (response.ok) {
          const statusNumber = response.status;
          const statusUrl = response.statusText;
          const performance = statusNumber + statusUrl;
          resolve(console.log(performance));
        } else {
          reject(console.log("Erro com a url"));
        }
      });
    });
};


module.exports = validateUrl;