# Markdown Links

## Índice

* [1. Resumo do projeto](#1-resumo-do-projeto)
* [2. Como usar](#2-como-usar)
* [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)

## 1. Resumo do projeto

O projeto Markdown Links consiste em uma biblioteca capaz de extrair links de arquivos com extensão .md, sendo que o usuário pode passar como `path` um arquivo ou um diretório. Além disso o programa tem a capacidade de validar cada um dos links, verificando se os mesmos funcionam, para que o ocorra essa verificação o usuário só precisa colocar um parâmetro opcional que seria `--validate`.

## 2. Como usar

* Primeiramente o usuário deve ter instalado o NodeJS e o npm.

$ npm install -g nabitener/SAP004-md-links

Após isso o usuário já poderá utilizar a biblioteca com a seguinte linha de comando:

`md-links <path-to-file> [options]`

##### Argumentos

* `path`: Rota absoluta ou relativa ao arquivo ou diretório. Se a rota passada é
  relativa, deve resolver como sendo relativa ao diretório onde foi chamada -
  _current working directory_
* `options`: Um objeto com a seguinte propriedade:
  - `--validate`: Um booleano que determina se deseja validar os links
    encontrados.

##### Valor de retorno

A função deve retornar uma promessa (`Promise`) que resolve um array (`Array`) e
objetos(`Object`), onde cada objeto representa um link, contendo as seguintes
propriedades:

* `href`: URL encontrada.
* `text`: Texto que irá aparecer dentro de um link (`<a>`).
* `file`: Rota do arquivo onde foi encontrado o link.

Por exemplo:

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link de algo
./some/example.md https://outra-coisa-.net/algum-doc.html algum doc
./some/example.md http://google.com/ Google
```

O comportamento padrão não deve validar se as URLs respondem ok ou não, somente
deve identificar o arquivo Markdown (a partir da rota que recebeu como
argumento), analisar o arquivo Markdown e imprimir os links que vão sendo
encontrados, junto com a rota do arquivo onde aparece e o texto encontrado
dentro do link (truncado 50 caracteres).