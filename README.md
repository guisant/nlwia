
<h1 align="center">
  
![Logo](https://github.com/guisant/nlwia/assets/37338838/28640e18-c592-4495-b810-df387c6c52aa)

</h1>

<p align="center">
 <a href="#-shorts-summary">Sobre</a> •
 <a href="#-demo">Demo</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> 
</p>

<br>

# 💻 Shorts Summary

<p>Shorts Summary é uma aplicação web para criar resumo de vídeos shorts do YouTube utilizando Inteligência Artificial para transcrever o conteúdo do vídeo e realizar o resumo do conteúdo.
Esse projeto é desenvolvido na trilha Foundations na edição NLW IA.</p>

<br><br>

## 🔗 Demo

Acesse a demonstração [aqui](https://nlwia-psi.vercel.app/).

<br><br>

## 🚀 Como executar o projeto

Este projeto é divido em três partes:
1. Backend
2. Frontend
3. IA - Utilizado os modelos: Whisper para reconhecimento automático de fala (ASR - automatic speech recognition) e Bart para resumo de texto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone https://github.com/guisant/nlwia.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd nlwia

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run server

# O servidor iniciará na porta:3333 - acesse http://localhost:3333/summary/"id do video"(codigo após /shorts/..)

```

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone https://github.com/guisant/nlwia.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd nlwia

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run web

# A aplicação será aberta na porta:5173 - acesse http://localhost:5173

```

<br><br>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:
 
![Badge Node](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Badge HTML](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)
![Badge CSS](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)
![Badge JS](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)
![Badge AXIOS](https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white)
![Badge EXPRESS](https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white)
![Badge OPEN IA](https://img.shields.io/badge/OpenAI-412991.svg?style=for-the-badge&logo=OpenAI&logoColor=white)


<br>

Desenvolvido :blue_heart: por Guilherme Pacheco
