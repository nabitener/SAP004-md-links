const validateUrl = require('./validateUrl');
const textLink = /\[(.[^\]]*)\]/;
const hrefLink = /\(([^#]\S+)\)/;
const regex = /\[(.[^\]]*)\]\(([^#]\S+)\)/gm;
const arrayLinks = [];

formArray = (file, data, validate = false) => {
    const links = data.match(regex);
    if (validate = false){
    links.forEach((index) => {
      const text = index.match(textLink)[1];
      const href = index.match(hrefLink)[1];
      arrayLinks.push({ file, href, text });
    });
} else {
    links.forEach((index) => {
        const text = index.match(textLink)[1];
        const href = index.match(hrefLink)[1];
        const status = validateUrl(href);
        arrayLinks.push({ file, href, text, status });
})
    return console.log(arrayLinks);
}};

module.exports = formArray;