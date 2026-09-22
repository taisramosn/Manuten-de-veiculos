# 📄 Documento de Requisitos do Produto (PRD) - CarCare

## 1. Visão Geral e Objetivo

O **CarCare** é um aplicativo web didático desenvolvido para auxiliar proprietários de veículos no controle e organização das informações relacionadas aos seus carros e suas manutenções.

A aplicação permitirá o cadastro de veículos, o registro e acompanhamento de manutenções, o controle da quilometragem, a visualização dos valores gastos e o acompanhamento das próximas revisões.

**O grande diferencial (Regra de Negócio Principal):** o CarCare centraliza as informações do veículo e seu histórico de manutenções, permitindo ao proprietário acompanhar os serviços realizados, os valores gastos, a quilometragem e as próximas revisões.

O objetivo do sistema é facilitar o acompanhamento da manutenção dos veículos, permitindo que o proprietário tenha em um único lugar informações sobre serviços realizados, peças utilizadas, valores gastos, quilometragem e próximas revisões.

---

## 2. Atores do Sistema

- **Proprietário:** responsável pelo cadastro dos veículos e pelo registro, consulta e acompanhamento das informações de manutenção.

> **Observação:** o sistema não possui cadastro de usuários, autenticação, contas ou gerenciamento de usuários. O próprio proprietário realiza o cadastro e o acompanhamento de seus veículos.

---

## 3. Histórias de Usuário e Escopo

Abaixo estão as funcionalidades principais do MVP (Produto Mínimo Viável), escritas sob a perspectiva do proprietário do veículo.

### 🚗 Épico 1: Cadastro e Gerenciamento de Veículos

#### US01 - Cadastro de Veículo

**Como um Proprietário**, quero preencher um formulário com os dados do meu veículo (marca, modelo, ano, placa, quilometragem e combustível) para cadastrar meu veículo no sistema.

**Critérios de Aceitação:**
- Todos os campos obrigatórios devem ser preenchidos.
- A placa deve possuir formato válido.
- O ano deve ser válido.
- A quilometragem deve ser um valor numérico maior ou igual a zero.
- Os dados devem ser armazenados após o cadastro.

#### US02 - Visualização dos Veículos

**Como um Proprietário**, quero visualizar os veículos cadastrados para consultar suas principais informações.

**Critérios de Aceitação:**
- O sistema deverá apresentar os veículos cadastrados.
- Cada veículo deverá apresentar suas principais informações, como marca, modelo, ano, placa, quilometragem e combustível.
- O proprietário deverá poder acessar os detalhes de um veículo.

#### US03 - Visualização dos Detalhes do Veículo

**Como um Proprietário**, quero visualizar os detalhes de um veículo para acompanhar sua situação e seu histórico de manutenção.

**Critérios de Aceitação:**
- O sistema deverá apresentar a quilometragem atual do veículo.
- O sistema deverá apresentar o combustível.
- O sistema deverá apresentar o total investido em manutenções.
- O sistema deverá apresentar a situação atual da manutenção, quando houver.
- O sistema deverá apresentar a próxima revisão prevista, quando houver.
- O sistema deverá apresentar o histórico de manutenções relacionadas ao veículo.

#### US04 - Edição do Veículo

**Como um Proprietário**, quero alterar os dados do meu veículo para manter as informações atualizadas.

**Critérios de Aceitação:**
- O sistema deve permitir a alteração dos dados cadastrados.
- Os dados devem ser validados antes de serem salvos.
- As alterações devem ser armazenadas após a confirmação.

#### US05 - Exclusão do Veículo

**Como um Proprietário**, quero excluir um veículo cadastrado para remover informações que não utilizo mais.

**Critérios de Aceitação:**
- O sistema deve solicitar confirmação antes da exclusão do veículo.
- O veículo deve ser removido após a confirmação.

#### US06 - Acompanhamento da Próxima Revisão

**Como um Proprietário**, quero visualizar a próxima revisão prevista do meu veículo para saber quando o próximo serviço deverá ser realizado.

**Critérios de Aceitação:**
- O sistema deverá apresentar a próxima revisão prevista, quando houver.
- A revisão poderá possuir uma data prevista e/ou uma quilometragem prevista.
- As informações da próxima revisão deverão ser apresentadas junto aos dados do veículo.
- O sistema não precisa realizar cálculos complexos para determinar a próxima revisão.

---

### 🔧 Épico 2: Registro e Acompanhamento de Manutenções

#### US07 - Registrar Manutenção

**Como um Proprietário**, quero registrar uma manutenção realizada no meu veículo para manter um histórico dos serviços realizados.

**Critérios de Aceitação:**
- O proprietário deve informar o veículo.
- Deve ser informado o tipo de manutenção.
- Deve ser informada a data da manutenção.
- Deve ser informada a quilometragem do veículo.
- Deve ser informado o serviço realizado.
- Deve ser informado o valor da manutenção.
- Os campos obrigatórios devem ser validados antes do cadastro.
- Os dados devem ser armazenados após o cadastro.

#### US08 - Visualizar Histórico de Manutenções

**Como um Proprietário**, quero visualizar o histórico de manutenções do meu veículo para saber quais serviços já foram realizados.

**Critérios de Aceitação:**
- A lista deverá apresentar a data da manutenção.
- Deverá apresentar o tipo de manutenção.
- Deverá apresentar a quilometragem.
- Deverá apresentar o serviço realizado.
- Deverá apresentar o valor gasto.
- As manutenções deverão estar relacionadas ao veículo correspondente.

#### US09 - Editar Manutenção

**Como um Proprietário**, quero editar uma manutenção cadastrada para corrigir ou atualizar suas informações.

**Critérios de Aceitação:**
- O sistema deve permitir a alteração dos dados da manutenção.
- Os dados devem ser validados antes de serem salvos.
- As alterações devem ser armazenadas após a confirmação.

#### US10 - Excluir Manutenção

**Como um Proprietário**, quero excluir uma manutenção registrada para remover informações cadastradas incorretamente.

**Critérios de Aceitação:**
- O sistema deve solicitar confirmação antes de excluir a manutenção.
- A manutenção deve ser removida após a confirmação.

---

### 📊 Épico 3: Dashboard e Acompanhamento

#### US11 - Visualização do Dashboard

**Como um Proprietário**, quero visualizar um resumo das informações dos meus veículos e manutenções para acompanhar sua situação de forma rápida.

**Critérios de Aceitação:**
- O painel deverá apresentar informações resumidas dos veículos cadastrados.
- O painel deverá apresentar informações relacionadas às manutenções.
- O sistema deverá apresentar indicadores de situação dos veículos e/ou manutenções.
- O proprietário deverá poder acessar os detalhes dos veículos a partir do painel.

#### US12 - Visualizar Status das Manutenções

**Como um Proprietário**, quero visualizar o status das manutenções para identificar serviços concluídos, em andamento ou que exigem atenção.

**Critérios de Aceitação:**
- O sistema deverá apresentar visualmente o status das manutenções.
- As manutenções concluídas deverão ser identificadas como concluídas.
- As manutenções em andamento deverão ser identificadas como em andamento.
- Quando aplicável, o sistema deverá destacar situações que exigem atenção.

---

### 🌐 Épico 4: Integração e Persistência de Dados

#### US13 - Persistência de Dados

**Como um Proprietário**, quero que os dados cadastrados sejam armazenados para que eu possa consultá-los posteriormente.

**Critérios de Aceitação:**
- Os dados dos veículos deverão ser armazenados.
- Os dados das manutenções deverão ser armazenados.
- O armazenamento deverá ser realizado através de uma API falsa utilizando JSON Server.

#### US14 - Consulta de Dados

**Como um Proprietário**, quero que os dados cadastrados sejam carregados automaticamente ao acessar as páginas do sistema.

**Critérios de Aceitação:**
- O sistema deverá realizar requisições assíncronas à API.
- Os dados dos veículos deverão ser consultados e exibidos.
- Os dados das manutenções deverão ser consultados e exibidos.
- O sistema deverá tratar possíveis erros nas requisições.

#### US15 - Consulta à API Pública

**Como um Proprietário**, quero utilizar uma funcionalidade integrada a uma API pública para obter informações de forma automática.

**Critérios de Aceitação:**
- O sistema deverá realizar uma requisição para uma API pública real.
- Os dados retornados pela API deverão ser apresentados ao proprietário.
- O sistema deverá tratar possíveis erros na requisição.

---

## 4. Escopo do MVP

O MVP do CarCare contempla:

- Cadastro de veículos.
- Visualização dos veículos cadastrados.
- Visualização dos detalhes dos veículos.
- Edição de veículos.
- Exclusão de veículos.
- Registro de manutenções.
- Visualização do histórico de manutenções.
- Edição de manutenções.
- Exclusão de manutenções.
- Visualização dos valores gastos nas manutenções.
- Visualização do total investido no veículo.
- Acompanhamento da próxima revisão.
- Visualização do Dashboard.
- Visualização dos status das manutenções.
- Persistência dos dados utilizando JSON Server.
- Consulta dos dados através de requisições assíncronas.
- Integração com uma API pública.

O sistema **não contempla**:

- Cadastro de usuários.
- Login ou autenticação.
- Gerenciamento de contas.
- Uma aba exclusiva para gastos.
- Uma aba exclusiva para próximas manutenções.

Os gastos são apresentados como informações relacionadas às manutenções e aos veículos, enquanto as próximas revisões são apresentadas no acompanhamento dos veículos.

---

## 5. Estrutura Principal da Aplicação

A aplicação será organizada nas seguintes áreas principais:

### Dashboard

Apresenta um resumo dos veículos e das manutenções, permitindo ao proprietário acompanhar rapidamente a situação dos seus veículos.

### Veículos

Apresenta os veículos cadastrados e permite acessar seus detalhes.

Nos detalhes de cada veículo poderão ser apresentadas informações como:

- Dados do veículo.
- Quilometragem.
- Combustível.
- Total investido.
- Situação da manutenção.
- Próxima revisão.
- Histórico de manutenções.

### Manutenções

Apresenta o histórico de manutenções cadastradas e permite consultar os serviços realizados, seus valores, quilometragens, status e demais informações relacionadas.

---

## 6. Regras Gerais do Sistema

- O próprio proprietário é responsável pelo cadastro dos veículos.
- O sistema não possui cadastro ou autenticação de usuários.
- Cada manutenção deve estar relacionada a um veículo cadastrado.
- O valor gasto deve estar associado à manutenção correspondente.
- Os valores das manutenções podem ser utilizados para apresentar o total investido no veículo.
- As informações de próxima revisão devem estar relacionadas ao veículo.
- A próxima revisão não depende de cálculos complexos realizados pelo sistema.
- Os dados devem ser persistidos utilizando JSON Server.
- As informações apresentadas ao proprietário devem ser obtidas a partir dos dados armazenados.