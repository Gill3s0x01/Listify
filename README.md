<h1 align="center">
  <p align="center">
    <img alt="Listiify" src="./frontend/public/listify.png" width="250px" />
  </p>
  <h3 align="center">
    A melhor maneira de você descobrir as curiosidades da sua conta do Spotify! 🎧
  </h3>
  <p align="center">
      <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Gilles30/Listify?color=1db954">
      <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Gilles30/Listify?color=1db954">
      <img alt="Stars" src="https://img.shields.io/github/stars/Gilles30/Listify?color=1db954">
      <img alt="Repository Size" src="https://img.shields.io/github/repo-size/Gilles30/Listify?color=1db954">
  </p>
</h1>

<p align="center">
  <a href="#page_with_curl-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#books-requisitos">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-começando">Começando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-iniciando-back-end">Node.js</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-iniciando-front-end">ReactJS</a>
</p>

## :page_with_curl: Sobre
Listify é uma aplicação criada a partir do [**Spotify’s Web API**](https://developer.spotify.com/documentation/web-api/) para coletar informações de sua conta Spotify.

Nela o usuário tem acesso aos seus artistas mais escutados, músicas mais curtidas e suas playlists, dentre diversas outras curiosidades incríveis.

Nesse projeto tive como principal objetivo aprender a consumir uma API externa e estudar toda a documentação por trás dela.

**Node.js**: realiza todas as chamadas a API do Spotify e customizamos as respostas pra serem da forma que tem que ser. Serve todos os dados para o front-end.

**ReactJS**: é uma página Web no qual o usuário terá acesso a informações da sua conta do Spotify.

## :books: Requisitos
- Ter [**Git**](https://git-scm.com/) para clonar o projeto.
- Ter [**Node.js**](https://nodejs.org/en/) instalado.
- Ter [**Yarn**](https://classic.yarnpkg.com/pt-BR/docs/install/) instalado.
- Ter credencias do Spotify.

## :lock: Credenciais do Spotify para rodar o projeto localmente

Para você poder rodar o projeto localmente na sua máquina é preciso ter uma [**conta de desenvolvedor no Spotify**](https://developer.spotify.com/dashboard/) (para criar essa conta é totalmente gratuito e pode usar sua própria conta do Spotify).

Com a conta criada basta clicar no botão **CREATE AN APP** e preencher os dados que forem pedidos.

Após isso você terá acesso ao Dashboard da sua aplicação. No lado esquerdo estará suas credenciais, Client ID e Client Secret que serão usuadas para prencher o arquivo .env do backend.

Por fim, no lado direito clique no botão **EDIT SETTINGS**. No modal que abrir haverá um compo chamado **Redirects URIs**, nele você irá preencher com a URL em que o seu backend estará rodando com a rota **/callback** (Ex: http://localhost:3333/callback). Após isso basta clicar em **SAVE**.

## :rocket: 🎧🕹Começando
``` bash
  # Clonar o projeto:
  $ git clone https://github.com/Gilles30/Listify

  # Entrar no diretório:
  $ cd codify
```

## :gear: Iniciando back-end
```bash
  # Entrar no diretório do back-end:
  $ cd backend

  # Instalar as dependências:
  $ yarn

  # Rodar a aplicação:
  $ yarn dev:server
```

## :computer: Iniciando front-end
```bash
  # Entrar no diretório do front-end:
  $ cd frontend

  # Instalar as dependências:
  $ yarn

  # Rodar a aplicação:
  $ yarn start
```

Feito com 💜 por [Lorison Gilles](https://github.com/Gilles30) 🖖🏻👾☕
