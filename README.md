# 🚗 CarCare — Sistema de Controle de Manutenção de Veículos

**Autora:** Taís Ramos Nascoski

O **CarCare** é uma aplicação web responsiva desenvolvida para auxiliar no controle e na organização de veículos e suas manutenções.

A aplicação tem como objetivo permitir o gerenciamento de **veículos, manutenções, serviços, peças e gastos**, além de possibilitar o acompanhamento do histórico e das próximas manutenções.

O projeto será desenvolvido progressivamente ao longo da disciplina, utilizando as tecnologias e conceitos apresentados durante as aulas.

---

## 📋 Documentação do Projeto

Para acompanhar o desenvolvimento do projeto e suas decisões, serão disponibilizados os seguintes documentos:

- 📄 **Documento de Requisitos** — Escopo, funcionalidades e regras da aplicação.
- 🏗️ **Especificação Técnica** — Arquitetura, modelo de dados e estrutura técnica do sistema.
- 🎨 **Design System** — Identidade visual, cores, tipografia e componentes utilizados na aplicação.
- 🖼️ **Protótipo no Stitch** — Protótipo das telas e fluxo de navegação.

---

## 🎨 Design

- 🎨 **Design System** — Em desenvolvimento.
- 🖼️ **Protótipo no Stitch** — Em desenvolvimento.

---

## 🧩 Tecnologias

### Framework CSS

- Materialize CSS 1.0.0

### JavaScript e bibliotecas

- JavaScript
- jQuery
- jQuery Mask Plugin

### Outras tecnologias

- HTML5
- CSS3
- Sass (SCSS)
- Node.js
- NPM
- JSON Server
- Git
- GitHub

---

## 🌐 Site em Produção

🚧 **Em desenvolvimento.**

O projeto será publicado posteriormente utilizando o **GitHub Pages**, conforme as orientações da disciplina.

---

## ✅ Lista de Verificação | Indicadores de Desempenho (ID)

### RA1 — Utilização de Frameworks CSS para estilização de elementos HTML e criação de layouts responsivos

- [ ] **ID 01** — Prototipa interfaces adaptáveis para, no mínimo, os tamanhos de tela mobile e desktop, utilizando Figma, Quant UX, Sketch ou IA (Stitch).
- [ ] **ID 02** — Implementa layout responsivo com Framework CSS (Materialize CSS), utilizando Flexbox ou Grid do próprio framework.
- [ ] **ID 03** — Implementa layout responsivo com CSS puro, usando Flexbox ou Grid Layout.
- [ ] **ID 04** — Utiliza componentes prontos de um Framework CSS e componentes JavaScript do framework.
- [ ] **ID 05** — Cria layout fluido usando unidades relativas como vw, vh, %, em e rem.
- [ ] **ID 06** — Aplica um Design System consistente, incluindo cores, tipografia e padrões de componentes.
- [ ] **ID 07** — Utiliza Sass (SCSS), aplicando variáveis, mixins e funções.
- [ ] **ID 08** — Aplica tipografia responsiva utilizando media queries mobile first ou `clamp()`.
- [ ] **ID 09** — Aplica técnicas de responsividade em imagens utilizando CSS.
- [ ] **ID 10** — Otimiza imagens utilizando formatos modernos e carregamento adaptativo.

### RA2 — Realizar tratamento de formulários e aplicar validações customizadas no lado cliente

- [ ] **ID 11** — Implementa validação HTML nativa em formulários.
- [ ] **ID 12** — Aplica expressões regulares (REGEX) para validações personalizadas.
- [ ] **ID 13** — Utiliza checkbox, radio e select para coleta de dados.
- [ ] **ID 14** — Implementa leitura e escrita no Web Storage utilizando localStorage/sessionStorage.

### RA3 — Aplicar ferramentas para otimização do processo de desenvolvimento web

- [ ] **ID 15** — Configura ambiente com Node.js e NPM para gerenciamento de pacotes e dependências.
- [ ] **ID 16** — Utiliza boas práticas de versionamento no Git/GitHub e `.gitignore`.
- [ ] **ID 17** — Mantém um README.md padronizado conforme o template da disciplina, com checklist preenchido.
- [ ] **ID 18** — Organiza os arquivos do projeto de forma modular.
- [ ] **ID 19** — Configura linters e formatadores, como ESLint e Prettier.

### RA4 — Aplicar bibliotecas de funções e componentes em JavaScript para aprimorar a interatividade das páginas web

- [ ] **ID 20** — Utiliza jQuery para manipulação do DOM e interatividade.
- [ ] **ID 21** — Integra e configura um plugin jQuery relevante, como o jQuery Mask Plugin.

### RA5 — Efetuar requisições assíncronas para uma API falsa e APIs públicas, permitindo a obtenção e manipulação de dados de forma dinâmica

- [ ] **ID 22** — Realiza requisições assíncronas para uma API falsa, como JSON Server, para persistir dados de formulários.
- [ ] **ID 23** — Realiza requisições assíncronas para uma API falsa para exibir dados na página.
- [ ] **ID 24** — Realiza requisições assíncronas para APIs públicas reais, exibindo os dados e tratando erros.

---

## 🖥️ Interface

O CarCare possui uma interface responsiva organizada em três áreas principais:

- 📊 **Dashboard** — Visão geral da frota e das manutenções.
- 🚗 **Meus Veículos** — Cadastro, consulta e gerenciamento dos veículos.
- 🔧 **Manutenções** — Registro e acompanhamento do histórico de manutenções.

As informações de **gastos e próximas manutenções** são relacionadas diretamente aos registros de manutenção, não sendo necessário criar telas separadas para essas informações.

---

## 📋 Funcionalidades

### 📊 Dashboard

Apresenta uma visão geral das informações da frota, incluindo:

- Quantidade de veículos
- Manutenções ativas
- Status dos veículos
- Veículos em manutenção
- Veículos prontos
- Resumo das manutenções

---

### 🚗 Meus Veículos

Permite cadastrar, consultar e gerenciar os veículos.

As informações do veículo incluem:

- Marca
- Modelo
- Ano
- Placa
- Quilometragem
- Combustível
- Status do veículo

Também será possível acessar as informações relacionadas às manutenções de cada veículo.

---

### 🔧 Manutenções

Permite registrar e acompanhar o histórico de manutenções realizadas nos veículos.

Cada registro de manutenção pode conter:

- Tipo de manutenção
- Data
- Quilometragem
- Serviço realizado
- Peças substituídas
- Valor gasto
- Observações
- Status da manutenção
- Próxima manutenção
- Data prevista para a próxima manutenção
- Quilometragem prevista para a próxima manutenção

Dessa forma, o histórico, os gastos e as próximas manutenções ficam centralizados em um único local.

---

## 📤 Publicação

- Publicação da aplicação utilizando GitHub Pages.
- Disponibilização do projeto no GitHub.

---

## ⚙️ Instruções de Execução

### Pré-requisitos

- Navegador web
- Visual Studio Code
- Node.js
- NPM
- Git

### Execução

1. Clonar o repositório.
2. Abrir a pasta do projeto no Visual Studio Code.
3. Instalar as dependências utilizando o NPM.
4. Iniciar o JSON Server.
5. Abrir a aplicação utilizando um servidor local.
6. Acessar o sistema pelo navegador.

---

## 🖥️ Telas da Aplicação

### 📊 Dashboard

Tela principal do sistema, apresentando uma visão geral da frota, quantidade de veículos, manutenções ativas e status dos veículos.

**Status:** Em desenvolvimento.

---

### 🚗 Meus Veículos

Tela destinada ao cadastro e gerenciamento dos veículos cadastrados.

Permite visualizar informações como:

- Placa
- Modelo
- Marca
- Ano
- Quilometragem
- Status
- Última revisão

Também permite iniciar o cadastro de um novo veículo.

**Status:** Em desenvolvimento.

---

### 🔧 Manutenções

Tela destinada ao registro e acompanhamento das manutenções dos veículos.

Permite registrar os serviços realizados, peças utilizadas, valores gastos e informações sobre a próxima manutenção.

**Status:** Em desenvolvimento.

---

## 👩‍💻 Autora

**Taís Ramos Nascoski**

Projeto desenvolvido para fins acadêmicos na disciplina de Desenvolvimento de Aplicações Web.