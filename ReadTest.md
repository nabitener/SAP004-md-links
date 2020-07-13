# Cartão de Crédito Válido

## 1. Introdução

O [algoritmo de Luhn](https://en.wi.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

![gráfico do algoritmo de Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

### Primeiros passos

1. Antes de tudo, verifique se você possui um :pencil: editor de texto em boa
   condição, algo como [Atom](https://atom.io/) ou
   [Code](https://code.visualstudio.com/).
2. Para executar os comandos abaixo, você precisará de um :shell: 
[Shell UNIX](https://github.com/Laboratoria/bootcamp/tree/master/topics/shell), que
   é um pequeno programa que interpreta linhas de comando (command-line
   interpreter), além de ter o
   [git](https://github.com/Laboratoria/bootcamp/tree/master/topics/scm/01-git)
   instalado. Se você usa um sistema operacional do tipo UNIX, como GNU/Linux ou
   MacOS, já possui um _shell_ (terminal) instalado por padrão (e provavelmente
   `git`) também. Se você usa o Windows, pode utilizar a versão completa do
  [Cmder](https://cmder.net/) que inclui 
  [Git bash](https://git-scm.com/download/win) e, se tiver o Windows 10 ou superior,
   pode usar o 
   [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10).
3. :arrow_down: [Clone](https://help.github.com/articles/cloning-a-repository/)
   sua _fork_ no seu computador (cópia local).
4. 📦 Instale as dependências do projeto com o comando `npm install`. Isso
   pressupõe que você instalou [Node.js](https://nodejs.org/) (que inclui
   [npm](https://docs.npmjs.com/).
5. Se tudo correu bem, você poderá executar :traffic_light: testes de unidade
   (unit tests) com o comando `npm test`.
6. Para visualizar a interface do seu programa no navegador, use o comando `npm
   start` para iniciar o servidor da web e acesse `http://localhost:5000` no seu
   navegador.
7. Comece a programar! :rocket: