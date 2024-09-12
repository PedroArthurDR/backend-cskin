
<p align="center">
  <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">Backend da aplicação <strong>CSkinStore</strong>, desenvolvida em <a href="http://nodejs.org" target="_blank">Node.js</a> com o framework <a href="http://nestjs.com" target="_blank">NestJS</a>, fornecendo uma API para listar, filtrar e ordenar skins de CS:GO.</p>

<p align="center">
<a href="https://www.npmjs.com/" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
</p>

## Descrição

Este projeto fornece o backend para a aplicação **CSkinStore**. Ele foi construído com **NestJS**, **Prisma ORM** e **MongoDB**. A API permite a listagem e o filtro de skins de CS:GO com base em vários critérios, como preço, float e categoria.

## Instalação

```bash
$ npm install
```

## Configuração do Banco de Dados

- Certifique-se de que o MongoDB está rodando localmente ou em um servidor acessível.
- Renomeie o arquivo `.env.example` para `.env` e configure a URL de conexão com o MongoDB:

```bash
DATABASE_URL="mongodb://localhost:27017/cskindb"
```

## Executando a Aplicação

```bash
# desenvolvimento
$ npm run start

# modo watch
$ npm run start:dev

# produção
$ npm run start:prod
```

## Endpoints da API

### Listagem de Skins

**GET /items**

Retorna todas as skins cadastradas no banco de dados com suporte a filtros.

#### Parâmetros de Filtro

- **name**: Filtrar por nome (busca parcial).
- **float**: Filtrar por float (ex.: `0.0-0.5`).
- **price**: Filtrar por preço (ex.: `100-500`).
- **category**: Filtrar por categoria (ex.: `rifle`, `pistola`, `faca`, `smg`).
- **orderBy**: Ordenar por campo (ex.: `price` ou `float`).
- **order**: Definir a ordem (ascendente: `asc` ou descendente: `desc`).

#### Exemplo de Requisição

```bash
GET http://localhost:4000/items?float=0.0-0.5&price=100-500&category=rifle&orderBy=price&order=asc
```

## Seed de Dados

Para popular o banco de dados com alguns itens iniciais, utilize o seguinte comando:

```bash
$ npm run seed
```
