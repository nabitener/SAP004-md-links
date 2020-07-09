const validateUrl = require('./validateUrl');
const textLink = /\[(.[^\]]*)\]/;
const hrefLink = /\(([^#]\S+)\)/;
const regex = /\[(.[^\]]*)\]\(([^#]\S+)\)/gm;
const arrayLinks = [];

/*
formArray = (file, data, [option]) => {
  const links = data.match(regex);
  links.forEach((index) => {
    const text = index.match(textLink)[1];
    const href = index.match(hrefLink)[1];
    arrayLinks.push({ file, href, text });
  return arrayLinks;
  if ((option === '--validate')) {
    links.forEach((index) => {
      const text = index.match(textLink)[1];
      const href = index.match(hrefLink)[1];
      const status = validateUrl(href);
      arrayLinks.push({ file, href, text, status });
    });
  } else {
    });
    return console.log(arrayLinks);
  }
};*/

module.exports = formArray;
