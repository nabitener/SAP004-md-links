/* #!/usr/bin/env node

const program = require('comander');
const package = require('./package.json');
const mdLinks = require('./index');

program.version(package.version);

program
.command('md-Links <path-to-file> [options]')
.description('Adicione um arquivo ou diretório')
.action((path) => {
    mdLinks(path);
});

program.parse(process.argv);*/