# 🚗 CarCare — Sistema de Controle de Manutenção de Veículos

**Autora:** Taís Ramos Nascoski

O **CarCare** é uma aplicação web responsiva desenvolvida para auxiliar no controle e na organização de veículos e suas manutenções.

A aplicação tem como objetivo permitir o gerenciamento de **veículos e registros de manutenção**, facilitando o acompanhamento do histórico e dos gastos relacionados aos veículos.

O projeto será desenvolvido progressivamente ao longo da disciplina, utilizando as tecnologias e conceitos apresentados durante as aulas.

---

## 📋 Documentação do Projeto

Para acompanhar o desenvolvimento do projeto e suas decisões, estão disponíveis os seguintes documentos:

- 📄 [**Documento de Requisitos**](https://github.com/taisramosn/manutencao-de-veiculos/blob/main/docs/prd.md) — Escopo, funcionalidades e regras da aplicação.

- 🏗️ [**Especificação Técnica**](https://github.com/taisramosn/manutencao-de-veiculos/blob/main/docs/architecture.md) — Arquitetura, modelo de dados e estrutura técnica do sistema.

- 🎨 [**Design System**](https://github.com/taisramosn/manutencao-de-veiculos/blob/main/docs/design-system.md) — Identidade visual, cores, tipografia e componentes utilizados na aplicação.

- 🖼️ [**Protótipo no Stitch**](https://stitch.withgoogle.com/projects/2247964266907741447) — Protótipo das telas e fluxo de navegação.

---

## 🎨 Design

A interface do CarCare foi desenvolvida a partir do protótipo feito no **Stitch**.

O projeto utiliza o **Materialize CSS 1.0.0**, complementado por estilos CSS próprios para adaptar a identidade visual do CarCare.

A aplicação possui uma interface responsiva, contemplando principalmente os ambientes:

- 📱 Celular
- 🖥️ Computador

O projeto utiliza componentes do Materialize CSS para construção da interface, além de CSS personalizado para configurações de layout, tipografia, espaçamentos e identidade visual.

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

## ☑️ Lista de Verificação | Indicadores de Desempenho (ID)

### RA1 — Utilização de Frameworks CSS para estilização de elementos HTML e criação de layouts responsivos

- [ ] **ID 01** — Prototipa interfaces adaptáveis para, no mínimo, os tamanhos de tela mobile e desktop, utilizando Figma, Quant UX, Sketch ou IA (Stitch).

- [ ] **ID 02** — Implementa layout responsivo com Framework CSS (Materialize CSS), utilizando Flexbox ou Grid do próprio framework.

- [ ] **ID 03** — Implementa layout responsivo com CSS puro, usando Flexbox ou Grid Layout.

- [ ] **ID 04** — Utiliza componentes prontos de um Framework CSS e componentes JavaScript do framework.

- [ ] **ID 05** — Cria layout fluido usando unidades relativas como vw, vh, %, em e rem.

- [ ] **ID 06** — Aplica um Design System consistente, incluindo cores, tipografia e padrões de componentes.

- [ ] **ID 07** — Utiliza Sass (SCSS), aplicando variáveis, mixins e funções.

- [ ] **ID 08** — Aplica tipografia responsiva utilizando media queries, mobile first ou clamp().

- [ ] **ID 09** — Aplica técnicas de responsividade em imagens utilizando CSS.

- [ ] **ID 10** — Otimiza imagens utilizando formatos modernos e carregamento adaptativo.

### RA2 — Realizar tratamento de formulários e aplicar validações personalizadas no lado cliente

- [ ] **ID 11** — Implementa validação HTML nativa em formulários.

- [ ] **ID 12** — Aplica expressões regulares (REGEX) para validações personalizadas.

- [ ] **ID 13** — Utiliza checkbox, radio e select para coleta de dados.

- [ ] **ID 14** — Implementa leitura e escrita no Web Storage utilizando `localStorage` / `sessionStorage`.

### RA3 — Aplicar ferramentas para otimização do processo de desenvolvimento web

- [ ] **ID 15** — Configura ambiente com Node.js e NPM para gerenciamento de pacotes e dependências.

- [ ] **ID 16** — Utiliza boas práticas no versionamento com Git/GitHub e `.gitignore`.

- [ ] **ID 17** — Mantém um README.md padronizado conforme o modelo da disciplina, com checklist preenchido.

- [ ] **ID 18** — Organiza os arquivos do projeto de forma modular.

- [ ] **ID 19** — Configura linters e formatadores, como ESLint e Prettier.

### RA4 — Aplicar bibliotecas de funções e componentes em JavaScript para aprimorar a interatividade das páginas web

- [ ] **ID 20** — Utiliza jQuery para manipulação do DOM e interatividade.

- [ ] **ID 21** — Integra e configura um plugin JavaScript.

---

## 🌐 API Pública

Para enriquecer o cadastro dos veículos com dados reais, o projeto utiliza a **API FIPE**.

A API fornece dados relacionados à Tabela FIPE por meio de requisições REST, permitindo consultar informações de veículos como **marca, modelo, ano, combustível, código FIPE e preço de referência**.

### 🔗 API FIPE

**API FIPE:**

https://fipe.api.br/

### Utilização no CarCare

A API será utilizada principalmente durante o **cadastro de veículos**, auxiliando na seleção das informações do veículo.

O fluxo previsto é:

```text
Marca
  ↓
Modelo
  ↓
Ano
  ↓
Dados do veículo

## 🏗️ Estrutura do Projeto

A organização do projeto segue uma estrutura modular:

```text
manutencao-de-veiculos/

│
├── css/
│   └── style.css
│
├── docs/
│   ├── architecture.md
│   ├── design-system.md
│   ├── prd.md
│   └── script-example.js
│
├── js/
│   └── app.js
│
├── db.json
├── detalhes.html
├── index.html
├── login.html
├── manutencoes.html
├── novo-veiculo.html
├── veiculos.html
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

---

## 🖥️ Interface

O CarCare possui uma interface responsiva organizada em três áreas principais:

- 📊 **Dashboard** — Visão geral da frota e dos registros de manutenção.

- 🚗 **Veículos** — Cadastro, consulta e gerenciamento dos veículos.

- 🔧 **Manutenções** — Registro e acompanhamento do histórico de manutenções realizadas.

As informações de **gastos** são relacionadas diretamente aos registros de manutenção, não sendo necessário criar telas separadas para essas informações.

---

## 📋 Funcionalidades

### 📊 Dashboard

Apresenta uma visão geral das informações da frota, incluindo:

- Quantidade de veículos
- Manutenções registradas
- Status dos veículos
- Veículos em manutenção
- Veículos prontos
- Resumo dos gastos com manutenção

### 🚗 Veículos

Permite cadastrar, consultar e gerenciar os veículos.

As informações do veículo incluem:

- Marca
- Modelo
- Ano
- Placa
- Quilometragem
- Combustível
- Status do veículo

Durante o cadastro, a aplicação utiliza a **API FIPE** para auxiliar na seleção das informações de marca, modelo e ano.

Também será possível acessar as informações relacionadas às manutenções de cada veículo.

### 🔧 Manutenções

Permite registrar e acompanhar o histórico de manutenções realizadas nos veículos.

Cada registro de manutenção pode conter:

- Tipo de manutenção
- Data
- Quilometragem
- Serviço realizado
- Valor gasto
- Observações
- Status da manutenção

---

# ⚙️ Instruções de Execução

## Pré-requisitos

Antes de executar o projeto, é necessário possuir:

- Navegador web
- Visual Studio Code
- Node.js
- NPM
- Git

---

## 1. Clonar o projeto

Clone o repositório utilizando o Git:

```bash
git clone https://github.com/taisramosn/manutencao-de-veiculos.git
```

Depois, entre na pasta do projeto:

```bash
cd manutencao-de-veiculos
```

---

## 2. Instalar as dependências

Execute:

```bash
npm install
```

---

## 3. Iniciar o JSON Server

Execute:

```bash
npx json-server db.json --port 3000
```

O JSON Server ficará disponível em:

```text
http://localhost:3000
```

---

## 4. Iniciar o servidor local

Abra o projeto no Visual Studio Code e utilize um servidor local, como a extensão **Live Server**.

Depois, abra a aplicação pelo endereço fornecido pelo servidor local.

---

## 5. Utilizar o CarCare

Com os servidores em execução, será possível:

- Acessar o sistema;
- Realizar o login;
- Visualizar o Dashboard;
- Consultar os veículos;
- Cadastrar veículos;
- Consultar os detalhes dos veículos;
- Registrar e consultar manutenções;
- Consultar os dados da API FIPE durante o cadastro dos veículos.

---

## 🔄 Fluxo de execução

O fluxo básico para executar o projeto é:

```text
Clonar o projeto
      ↓
Abrir no VS Code
      ↓
npm install
      ↓
Iniciar JSON Server
      ↓
Iniciar servidor local
      ↓
Abrir aplicação no navegador
      ↓
Utilizar CarCare
      ↓
Consultar API pública quando necessário
```

---

## 👩‍💻 Autora

**Taís Ramos Nascoski**

Projeto desenvolvido para fins acadêmicos na disciplina de **Desenvolvimento de Aplicações Web**.