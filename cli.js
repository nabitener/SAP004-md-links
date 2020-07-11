#!/usr/bin/env node

const mdLinks = require("./src/index.js");
const path = process.argv[2];
const option = process.argv[3];

mdLinks(path, option)
  .then((array) => {
    array.forEach((element) => {
      if (option === "--validate") {
        const link = `${element.href} * ${element.file} * ${element.text.substring(0, 50)} * ${element.status}\n`;
        console.log(link);
      } else {
        const link = `${element.href} * ${element.file} * ${element.text.substring(0, 50)}\n`;
        console.log(link);
      }
    });
  })
  .catch((erro) => {
    erro = "Erro encontrado, verifique o diretório ou o arquivo";
    console.log(erro);
  });
