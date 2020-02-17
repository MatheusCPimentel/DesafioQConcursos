# Desafio QConcursos Front-end - Matheus Pimentel

O desafio era composto por fazer uma página única contendo "home", "sobre" e "Requisições do GitHub". 

Sem utilizar qualquer framework, dei meu máximo para construir esta página e mostrar todo meu potencial, mostrando que sou capaz de aprender muito mais e encarar novos desafios, aprendendo.

Neste projeto utilizei o `Webpack` para melhor organização dos arquivos e pastas, e também o `Babel` para o entendimento do código JavaScript em navegadores mais antigos.

<br>

## Instalação:

Basta clonar o repositório, abrir o terminal, e com o `yarn`, digitar `yarn dev` ou `yarn webpack-dev-server --mode=development`. Este por padrão rodará no `localhost:8080`, mas caso não seja possível, será exibido no terminal a porta alternativa que estará rodando. Basta abrir o navegador no `localhost` e na porta exibida e alí estará rodando o projeto.

<br>

## Organização de pastas e arquivos:

Na raiz do projeto temos o arquivo `webpack.config.js` e o `.babelrc`. Com os dois juntos nós temos uma melhor organização de pastas e maior suporte a navegadores mais antigos. O `webpack` identifica o arquivo `main.js` que está na pasta `src` que foi escrito em JavaScript como o arquivo de entrada, e, através do `Babel`, é transformado em um arquivo chamado `bundle.js`, que é colocado dentro da pasta `public`. Este arquivo `bundle.js` que será o arquivo chamado no HTML.

Além do mais, temos o arquivo `.gitignore` para ignorarmos a pasta `node_modules` quando formos enviar ao GitHub, e também o arquivo `package.json`, onde estão todas as nossas dependências e os scripts.

Partindo para a pasta `public`, na raiz está o nosso arquivo `index.html` e também o arquivo `bundle.js`, que foi gerado com o comando `yarn webpack-dev-server --mode=development (script: yarn build)`. Na pasta `styles` estão os arquivos .css e na pasta `images`, as imagens.
