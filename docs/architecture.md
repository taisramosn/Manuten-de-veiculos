# 🛠️ Especificação Técnica (Tech Spec) - CarCare

Este documento detalha a arquitetura técnica, o modelo de dados, a estrutura de armazenamento e a API utilizada pelo sistema CarCare.

O CarCare é uma aplicação web desenvolvida para auxiliar o proprietário no cadastro e acompanhamento das informações de seus veículos e respectivas manutenções.

A aplicação utiliza uma API local simulada pelo **JSON Server**, utilizada principalmente para o cadastro e consulta dos veículos.

## 1. Arquitetura da Aplicação

O CarCare utiliza uma arquitetura simples composta por uma aplicação web no lado do cliente e uma API local simulada.

```text
┌─────────────────────────────────────────────┐
│                  CarCare                    │
│              Aplicação Web                  │
├─────────────────────────────────────────────┤
│                                             │
│  HTML + CSS + JavaScript                    │
│                                             │
│  ├── Dashboard                              │
│  ├── Veículos                               │
│  ├── Cadastro de Veículo                    │
│  ├── Detalhes do Veículo                    │
│  └── Manutenções                            │
│                                             │
└──────────────────────┬──────────────────────┘
                       │
                       │ HTTP / Fetch
                       ▼
┌─────────────────────────────────────────────┐
│              JSON Server                    │
│                API Fake                     │
├─────────────────────────────────────────────┤
│                                             │
│  /veiculos                                  │
│                                             │
└──────────────────────┬──────────────────────┘
                       │
                       ▼
                  ┌──────────┐
                  │ db.json  │
                  └──────────┘
```

### Responsabilidades do Front-end

O front-end é responsável por:

- Apresentar a interface do sistema.
- Permitir o cadastro de veículos.
- Permitir a visualização dos veículos cadastrados.
- Permitir a visualização dos detalhes de um veículo.
- Apresentar informações relacionadas às manutenções.
- Apresentar o histórico de manutenção.
- Apresentar informações de próxima revisão.
- Apresentar informações resumidas no Dashboard.
- Realizar requisições para a API.
- Validar dados antes do envio.
- Apresentar mensagens de sucesso ou erro.

### Responsabilidades do JSON Server

O JSON Server é utilizado para:

- Simular uma API REST.
- Receber requisições HTTP.
- Armazenar os veículos no arquivo `db.json`.
- Permitir consultas aos veículos cadastrados.
- Permitir cadastro de novos veículos.
- Permitir atualização de veículos.
- Permitir exclusão de veículos.

### Responsabilidade do `db.json`

O arquivo `db.json` representa o armazenamento de dados utilizado pelo JSON Server durante o desenvolvimento do projeto.

## 2. Modelo de Dados

O modelo de dados principal do CarCare é baseado na entidade:

- **Veículos**

As informações relacionadas à próxima revisão são armazenadas dentro do próprio veículo.

As informações de manutenção fazem parte da aplicação e do acompanhamento do veículo, mas não possuem uma API independente neste projeto.

### 2.1 Veículos

A entidade `veiculos` armazena as informações dos veículos cadastrados pelo proprietário.

Cada veículo pode possuir informações como:

- Identificador.
- Marca.
- Modelo.
- Ano.
- Placa.
- Quilometragem.
- Combustível.
- Próxima revisão, quando houver.

### 2.2 Próxima revisão

A próxima revisão não possui uma entidade independente.

Ela é armazenada como uma informação relacionada ao próprio veículo.

Pode conter:

- Data prevista.
- Quilometragem prevista.

Exemplo:

```json
"proximaRevisao": {
  "data": "2026-11-10",
  "quilometragem": 95000
}
```

O sistema não precisa realizar cálculos complexos para determinar a próxima revisão.

## 3. Dicionário de Dados

### 3.1 Entidade `veiculos`

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | string | Identificador único do veículo |
| `marca` | string | Marca do veículo |
| `modelo` | string | Modelo do veículo |
| `ano` | number | Ano de fabricação do veículo |
| `placa` | string | Placa do veículo |
| `quilometragem` | number | Quilometragem atual do veículo |
| `combustivel` | string | Tipo de combustível utilizado |
| `proximaRevisao` | object | Informações da próxima revisão, quando houver |
| `proximaRevisao.data` | string | Data prevista para a próxima revisão |
| `proximaRevisao.quilometragem` | number | Quilometragem prevista para a próxima revisão |

## 4. Estrutura das Informações de Manutenção

As informações de manutenção fazem parte da experiência do sistema, sendo utilizadas para apresentar o histórico e os serviços relacionados aos veículos.

Entre as informações apresentadas podem estar:

- Tipo de manutenção.
- Data.
- Quilometragem.
- Serviço realizado.
- Peças utilizadas.
- Oficina.
- Valor.
- Status.
- Observações.

Essas informações podem ser utilizadas nas telas de:

- Dashboard.
- Detalhes do veículo.
- Histórico de manutenções.
- Área de Manutenções.

Neste projeto, as manutenções **não possuem endpoints próprios na API JSON Server**.

Portanto, não existem rotas como:

```text
/manutencoes
/proximasManutencoes
```

A API do projeto fica concentrada no cadastro e gerenciamento dos veículos.

## 5. Rotas da API

A aplicação utiliza uma API local simulada pelo JSON Server.

Durante o desenvolvimento, a API poderá ser executada em:

```text
http://localhost:3000
```

A principal coleção disponibilizada pela API é:

```text
/veiculos
```

### 5.1 Listar veículos

```http
GET /veiculos
```

Retorna todos os veículos cadastrados.

### 5.2 Consultar um veículo

```http
GET /veiculos/:id
```

Retorna um veículo específico.

Exemplo:

```http
GET /veiculos/1
```

### 5.3 Cadastrar veículo

```http
POST /veiculos
```

Cria um novo veículo.

### 5.4 Atualizar veículo

```http
PUT /veiculos/:id
```

Atualiza os dados de um veículo existente.

Exemplo:

```http
PUT /veiculos/1
```

### 5.5 Excluir veículo

```http
DELETE /veiculos/:id
```

Remove um veículo cadastrado.

## 6. Estrutura do Banco de Dados

O armazenamento utilizado pelo JSON Server é representado pelo arquivo:

```text
db.json
```

A estrutura principal será:

```json
{
  "veiculos": []
}
```

### Exemplo

```json
{
  "veiculos": [
    {
      "id": "1",
      "marca": "Chevrolet",
      "modelo": "Onix",
      "ano": 2015,
      "placa": "ABC1D23",
      "quilometragem": 87420,
      "combustivel": "Flex",
      "proximaRevisao": {
        "data": "2026-11-10",
        "quilometragem": 95000
      }
    }
  ]
}
```

## 7. Contrato de Dados da API

### 7.1 Cadastro de veículo

Exemplo de dados enviados para a API:

```json
{
  "marca": "Chevrolet",
  "modelo": "Onix",
  "ano": 2015,
  "placa": "ABC1D23",
  "quilometragem": 87420,
  "combustivel": "Flex",
  "proximaRevisao": {
    "data": "2026-11-10",
    "quilometragem": 95000
  }
}
```

O `id` do veículo será utilizado para identificar o registro posteriormente.

### 7.2 Atualização de veículo

A atualização utiliza os mesmos campos do cadastro.

Exemplo:

```json
{
  "marca": "Chevrolet",
  "modelo": "Onix",
  "ano": 2015,
  "placa": "ABC1D23",
  "quilometragem": 90000,
  "combustivel": "Flex",
  "proximaRevisao": {
    "data": "2027-02-10",
    "quilometragem": 100000
  }
}
```

## 8. Fluxo de Dados

O fluxo básico da aplicação ocorre da seguinte forma:

```text
┌───────────────┐
│ Proprietário  │
└───────┬───────┘
        │
        │ Interage com a interface
        ▼
┌─────────────────────┐
│ Front-end CarCare   │
│ HTML/CSS/JavaScript │
└─────────┬───────────┘
          │
          │ Requisição HTTP
          ▼
┌─────────────────────┐
│    JSON Server      │
│       API           │
└─────────┬───────────┘
          │
          │ Leitura / escrita
          ▼
┌─────────────────────┐
│       db.json       │
│      veiculos       │
└─────────────────────┘
```

### Exemplo: cadastro de veículo

1. O proprietário acessa o formulário de cadastro.
2. O proprietário preenche os dados do veículo.
3. O JavaScript valida os dados.
4. O front-end envia uma requisição `POST /veiculos`.
5. O JSON Server recebe a requisição.
6. O veículo é armazenado no `db.json`.
7. A aplicação atualiza a interface.
8. O proprietário recebe o retorno da operação.

### Exemplo: consulta de veículos

1. O proprietário acessa a área de Veículos.
2. O JavaScript realiza uma requisição `GET /veiculos`.
3. O JSON Server retorna os veículos cadastrados.
4. O JavaScript processa a resposta.
5. A aplicação apresenta os veículos na interface.

### Exemplo: detalhes de um veículo

1. O proprietário seleciona um veículo.
2. A aplicação identifica o `id` do veículo.
3. O sistema consulta o veículo através da API.
4. A interface apresenta os dados do veículo.
5. As informações de manutenção relacionadas ao veículo são apresentadas na interface.
6. A próxima revisão é apresentada quando houver informação cadastrada.

## 9. Validação de Dados

Os dados dos veículos devem ser validados antes de serem enviados para a API.

### Veículo

Devem ser verificadas informações como:

- Campos obrigatórios preenchidos.
- Marca preenchida.
- Modelo preenchido.
- Ano válido.
- Placa em formato válido.
- Quilometragem numérica.
- Quilometragem maior ou igual a zero.
- Combustível informado.

### Próxima revisão

Quando informada, deve possuir:

- Data válida, quando preenchida.
- Quilometragem válida, quando preenchida.
- Valor de quilometragem maior ou igual a zero.

A validação deve ocorrer no front-end antes da realização da requisição.

## 10. Tratamento de Erros

As requisições realizadas pelo front-end devem possuir tratamento de erros.

Exemplos de situações que podem ocorrer:

- API indisponível.
- Erro durante uma requisição.
- Falha no cadastro do veículo.
- Falha na atualização.
- Falha na exclusão.
- Dados inválidos.
- Veículo não encontrado.

Quando ocorrer um erro, a interface deve apresentar uma mensagem clara ao proprietário.

Exemplo:

```text
Não foi possível carregar os veículos.
Tente novamente.
```

Outro exemplo:

```text
Não foi possível cadastrar o veículo.
Verifique os dados e tente novamente.
```

## 11. Tecnologias e Bibliotecas

### Front-end

- HTML5
- CSS3
- JavaScript

### Interface

- Materialize CSS 1.0.0
- Material Icons
- Google Fonts - Inter

### API e persistência

- Node.js
- NPM
- JSON Server
- `db.json`

### Controle de versão

- Git
- GitHub

## 12. Organização dos Arquivos

A estrutura principal do projeto é organizada da seguinte forma:

```text
Manuten-de-veiculos/
│
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
├── index.html
├── db.json
│
├── css/
│   └── styles.css
│
├── js/
│   └── script.js
│
└── docs/
    ├── architecture.md
    ├── design-system.md
    └── prd.md
```

### Responsabilidade dos arquivos

#### `index.html`

Contém a estrutura principal da aplicação e os elementos da interface.

#### `css/styles.css`

Contém os estilos personalizados da aplicação.

#### `js/script.js`

Contém a lógica de interação da aplicação, navegação entre as telas e comunicação com a API.

#### `db.json`

Contém os veículos utilizados pelo JSON Server.

#### `docs/prd.md`

Contém os requisitos do produto e as histórias de usuário.

#### `docs/design-system.md`

Contém as regras visuais da aplicação.

#### `docs/architecture.md`

Contém a especificação técnica, arquitetura, modelo de dados, rotas da API e estrutura do armazenamento.

## 13. Considerações Técnicas

O CarCare é um projeto didático desenvolvido para praticar conceitos de desenvolvimento web, organização de código, consumo de APIs e persistência de dados.

O JSON Server é utilizado como uma API simulada durante o desenvolvimento.

A API é utilizada principalmente para o cadastro, consulta, atualização e exclusão dos veículos.

A aplicação não possui:

- Cadastro de usuários.
- Login.
- Autenticação.
- Gerenciamento de contas.
- Sistema de permissões.

O proprietário é considerado o responsável pelo cadastro e gerenciamento dos veículos.

As informações de manutenção são utilizadas para o acompanhamento dos veículos na interface, mas não possuem uma API independente.

A próxima revisão é tratada como uma informação relacionada ao veículo.

O sistema não precisa realizar cálculos complexos para determinar automaticamente a próxima revisão.

## 14. Resumo da Arquitetura

```text
CarCare
│
├── Interface
│   ├── Dashboard
│   ├── Veículos
│   ├── Cadastro de Veículo
│   ├── Detalhes do Veículo
│   └── Manutenções
│
├── Front-end
│   ├── HTML5
│   ├── CSS3
│   └── JavaScript
│
├── Interface Visual
│   ├── Materialize CSS
│   ├── Material Icons
│   └── Inter
│
├── API
│   └── JSON Server
│       └── /veiculos
│
├── Dados
│   └── db.json
│       └── veiculos
│
└── Documentação
    ├── prd.md
    ├── design-system.md
    └── architecture.md
```

A arquitetura do CarCare mantém uma estrutura simples, permitindo que o projeto demonstre o uso de uma aplicação web, consumo de API, persistência de dados e organização de documentação sem adicionar complexidade desnecessária.