# 🚗 CarCare — Sistema de Controle de Manutenção de Veículos

**Autora:** Taís Ramos Nascoski

O **CarCare** é uma aplicação web responsiva desenvolvida para auxiliar no controle e na organização de veículos e suas manutenções.

A aplicação tem como objetivo permitir o gerenciamento de **veículos, manutenções, serviços, peças e gastos**, além de possibilitar o acompanhamento do histórico e das próximas manutenções.

O projeto será desenvolvido progressivamente ao longo da disciplina, utilizando as tecnologias e conceitos apresentados durante as aulas.

---

## 📋 Documentação do Projeto

Para acompanhar o desenvolvimento do projeto e suas decisões, estão disponíveis os seguintes documentos:

* 📄 [**Documento de Requisitos**](https://github.com/taisramosn/Manuten-de-veiculos/blob/main/docs/prd.md) — Escopo, funcionalidades e regras da aplicação.
* 🏗️ [**Especificação Técnica**](https://github.com/taisramosn/Manuten-de-veiculos/blob/main/docs/architecture.md) — Arquitetura, modelo de dados e estrutura técnica do sistema.
* 🎨 [**Design System**](https://github.com/taisramosn/Manuten-de-veiculos/blob/main/docs/design-system.md) — Identidade visual, cores, tipografia e componentes utilizados na aplicação.
* 🖼️ [**Protótipo no Stitch**](https://stitch.withgoogle.com/projects/2247964266907741447) — Protótipo das telas e fluxo de navegação.

---

## 🎨 Design

A interface do CarCare foi desenvolvida a partir do protótipo feito no **Stitch**.

O projeto utiliza o **Materialize CSS 1.0.0**, complementado por estilos CSS próprios para adaptar a identidade visual do CarCare.

A aplicação possui uma interface responsiva, contemplando principalmente os ambientes:

* 📱 Celular
* 🖥️ Computador

O projeto utiliza componentes do Materialize CSS para construção da interface, além de CSS personalizado para configurações de layout, tipografia, espaçamentos e identidade visual.

---

## 🧩 Tecnologias

### Framework CSS

* Materialize CSS 1.0.0

### JavaScript e bibliotecas

* JavaScript
* jQuery
* jQuery Mask Plugin

### Outras tecnologias

* HTML5
* CSS3
* Sass (SCSS)
* Node.js
* NPM
* JSON Server
* Git
* GitHub

---

## ✅ Lista de Verificação | Indicadores de Desempenho (ID)

### RA1 — Utilização de Frameworks CSS para estilização de elementos HTML e criação de layouts responsivos

*[ ] **ID 01** — Prototipa interfaces adaptáveis para, no mínimo, os tamanhos de tela mobile e desktop, utilizando Figma, Quant UX, Sketch ou IA (Stitch).
*[ ] **ID 02** — Implemente layout responsivo com Framework CSS (Materialize CSS), utilizando Flexbox ou Grid do próprio framework.
*[ ] **ID 03** — Implemente layout responsivo com CSS puro, usando Flexbox ou Grid Layout.
*[ ] **ID 04** — Utiliza componentes prontos de um Framework CSS e componentes JavaScript do framework.
*[ ] **ID 05** — Cria layout fluido usando unidades relativas como `vw`, `vh`, `%`, `em` e `rem`.
*[ ] **ID 06** — Aplica um Design System consistente, incluindo cores, tipografia e padrões de componentes.
*[ ] **ID 07** — Utiliza Sass (SCSS), aplicando variáveis, mixins e funções.
*[ ] **ID 08** — Aplicação de tipografia responsiva utilizando media queries mobile first ou `clamp()`.
*[ ] **ID 09** — Aplicação de técnicas de responsividade em imagens utilizando CSS.
* [ ] **ID 10** — Otimiza imagens utilizando formatos modernos e carregamento adaptativo.

### RA2 — Realizar tratamento de formulários e aplicar validações personalizadas no lado cliente

*[ ] **ID 11** — Implementa validação HTML nativa em formulários.
*[ ] **ID 12** — Aplicação de expressões regulares (REGEX) para validações personalizadas.
*[ ] **ID 13** — Utiliza checkbox, radio e select para coleta de dados.
*[ ] **ID 14** — Implementa leitura e escrita no Web Storage utilizando `localStorage`/`sessionStorage`.

### RA3 — Aplicar ferramentas para otimização do processo de desenvolvimento web

*[ ] **ID 15** — Configurar ambiente com Node.js e NPM para gerenciamento de pacotes e dependências.
*[ ] **ID 16** — Utiliza boas práticas de versionamento no Git/GitHub e `.gitignore`.
*[ ] **ID 17** — Mantém um README.md padronizado conforme o modelo da disciplina, com checklist preenchido.
*[ ] **ID 18** — Organiza os arquivos do projeto de forma modular.
*[ ] **ID 19** — Configura linters e formatadores, como ESLint e Prettier.

### RA4 — Aplicar bibliotecas de funções e componentes em JavaScript para aprimorar a interatividade das páginas web

*[ ] **ID 20** — Utiliza jQuery para manipulação do DOM e interatividade.
*[ ] **ID 21** — Integra e configura um plugin jQuery relevante, como o jQuery Mask Plugin.

### RA5 — Efetuar requisições assíncronas para uma API falsa e APIs públicas, permitindo a obtenção e manipulação de dados de forma dinâmica

*[ ] **ID 22** — Realiza requisições assíncronas para uma API falsa, como JSON Server, para persistir dados de formulários.
*[ ] **ID 23** — Realiza requisições assíncronas para uma API falsa para exibir dados na página.
*[ ] **ID 24** — Realiza requisições assíncronas para APIs públicas reais, exibindo os dados e tratando erros.

---

## 🌐 API Pública

Para enriquecer o cadastro dos veículos com dados reais, o projeto utilizará a **API FIPE**.

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
```

A integração com a API pública tem como objetivo evitar que todas as informações de marca e modelo sejam cadastradas manualmente.

A persistência dos veículos cadastrados continuará sendo realizada pelo **JSON Server**, enquanto a API FIPE será utilizada como fonte externa de dados para complementar o cadastro.

### Pontos finais utilizados

A API disponibiliza uma estrutura de consulta por tipo de veículo, marca, modelo e ano. Para carros, a estrutura utilizada pelo projeto seguirá a API REST disponibilizada pela FIPE API.

Exemplo de consulta de marcas:

```http
GET https://fipe.api.br/api/v2/cars/brands
```

A partir da marca selecionada, poderão ser consultados seus modelos e posteriormente os anos disponíveis.

### Boas práticas

Nenhuma chave de API ou informação sensível deverá ser atribuída diretamente ao código versionado.

O projeto mantém um arquivo de exemplo para configuração:

```text
docs/script-example.js
```

As configurações locais, quando possível, deverão permanecer em arquivo separado e incluídas no `.gitignore`.

---

## 🗄️ API Falsa — JSON Server

O projeto também utiliza o **JSON Server** como uma API falsa para simular a persistência dos dados dos veículos durante o desenvolvimento.

Os dados são armazenados no arquivo:

```text
db.json
```

A estrutura inicial utilizada pelo projeto é:

```json
{
  "veiculos": []
}
```

O principal endpoint utilizado é:

```text
http://localhost:3000/veiculos
```

A API será utilizada para operações como:

* Listar veículos
* Cadastrar veículos
* Consultar veículos
* Atualizar veículos
* Excluir veículos

As informações de manutenção permanecem relacionadas aos veículos na interface da aplicação e, nesta versão do projeto, não possuem uma API independente.

---

## 🏗️ Estrutura do Projeto

A organização do projeto segue uma estrutura modular:

```text
Manuten-de-veiculos/
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
├── nova-manutencao.html
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

* 📊 **Dashboard** — Visão geral da frota e das manutenções.
* 🚗 **Veículos** — Cadastro, consulta e gerenciamento dos veículos.
* 🔧 **Manutenções** — Registro e acompanhamento do histórico de manutenções.

As informações de **gastos e próximas manutenções** são relacionadas diretamente aos registros de manutenção, não sendo necessário criar telas separadas para essas informações.

---

## 📋 Funcionalidades

### 📊 Dashboard

Apresenta uma visão geral das informações da frota, incluindo:

* Quantidade de veículos
* Manutenções ativas
* Status dos veículos
* Veículos em manutenção
* Veículos prontos
* Resumo das manutenções

### 🚗 Veículos

Permite cadastrar, consultar e gerenciar os veículos.

As informações do veículo incluem:

* Marca
* Modelo
* Ano
* Placa
* Quilometragem
* Combustível
* Status do veículo

Durante o cadastro, a aplicação poderá utilizar a **FIPE API** para auxiliar na seleção das informações de marca, modelo e ano.

Também será possível acessar as informações relacionadas às manutenções de cada veículo.

### 🔧 Manutenções

Permite registrar e acompanhar o histórico de manutenções realizadas nos veículos.

Cada registro de manutenção pode conter:

* Tipo de manutenção
* Data
* Quilometragem
* Serviço realizado
* Peças substituídas
* Valor gasto
* Observações
* Status da manutenção

---

# ⚙️ Instruções de Execução

## Pré-requisitos

Antes de executar o projeto, é necessário possuir:

* Navegador web
* Visual Studio Code
* Node.js
* NPM
* Git

---

## 1. Clonar o repositório

No terminal:

```bash
git clone https://github.com/taisramosn/Manuten-de-veiculos.git
```

Entrar na pasta do projeto:

```bash
cd Manuten-de-veiculos
```

---

## 2. Instalar as dependências

Com o projeto aberto no terminal, execute:

```bash
npm install
```

Esse comando instala as dependências definidas no `package.json`.

---

## 3. Iniciar o JSON Server

Em um terminal dentro da pasta do projeto:

```bash
npx json-server db.json
```

O servidor será iniciado na porta:

```text
http://localhost:3000
```

O endpoint dos veículos estará disponível em:

```text
http://localhost:3000/veiculos
```

Ao acessar esse endereço inicialmente, a API poderá retornar:

```json
[]
```

Isso indica que o endpoint existe, mas ainda não existem veículos cadastrados.

---

## 4. Executar a aplicação

A aplicação deverá ser executada utilizando um servidor local.

No Visual Studio Code, o **Live Server** pode ser usado para abrir o `index.html`.

Após iniciar o servidor local, acesse o aplicativo pelo endereço fornecido pelo Live Server.

> ⚠️ O JSON Server deve permanecer executando em um terminal enquanto a aplicação utiliza a API de veículos.

---

## 5. Utilização da API pública

Durante o desenvolvimento da funcionalidade de cadastro de veículos, a aplicação realizará requisições para a **API FIPE**.

A integração será utilizada para obter informações reais de veículos, como:

* Marcas
* Modelos
* Anos
* Dados de referência do veículo

A aplicação deverá tratar possíveis erros de comunicação com a API e apresentar uma resposta adequada ao usuário.

---

## 6. Fluxo de execução

O fluxo básico para executar o projeto será:

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
