# 📄 Documento de Requisitos do Produto (PRD) - CarCare

## 1. Visão Geral e Objetivo

O **CarCare** é uma aplicação web didática desenvolvida para auxiliar proprietários de veículos no controle e organização das manutenções de seus carros.

A aplicação permitirá o cadastro de veículos, registro de manutenções realizadas, controle de gastos, acompanhamento da quilometragem e cadastro de próximas manutenções.

**O grande diferencial (Regra de Negócio Principal):** o CarCare centraliza o histórico de manutenção do veículo e utiliza a **quilometragem e as datas das manutenções** para auxiliar o usuário a identificar serviços que precisam ser realizados, estão próximos ou estão atrasados.

O objetivo do sistema é facilitar o acompanhamento da manutenção do veículo, permitindo que o usuário tenha em um único lugar as informações sobre serviços realizados, peças substituídas, valores gastos e próximas revisões.

## 2. Atores do Sistema

* **Proprietário:** Usuário responsável pelo cadastro e acompanhamento das informações de seus veículos.
* **Sistema:** Responsável por armazenar os dados dos veículos, registrar manutenções, calcular gastos e identificar próximas manutenções.
* **API:** Responsável pelo armazenamento e fornecimento dos dados utilizados pela aplicação.

## 3. Histórias de Usuário e Escopo

Abaixo estão as funcionalidades principais do MVP (Produto Mínimo Viável), escritas sob a perspectiva do usuário final.

### 🚗 Épico 1: Cadastro e Gerenciamento do Veículo

* **US01 - Cadastro de Veículo:** Como um Proprietário, quero preencher um formulário com os dados do meu veículo (marca, modelo, ano, placa, quilometragem e combustível) para cadastrar meu carro no sistema.

  * *Critérios de Aceitação:* Todos os campos obrigatórios devem ser preenchidos; a placa deve possuir formato válido; o ano deve ser válido; a quilometragem deve ser um valor numérico maior ou igual a zero.

* **US02 - Visualização do Veículo:** Como um Proprietário, quero visualizar os dados do meu veículo para consultar suas principais informações.

  * *Critérios de Aceitação:* O sistema deve apresentar marca, modelo, ano, placa, quilometragem e combustível do veículo cadastrado.

* **US03 - Edição do Veículo:** Como um Proprietário, quero alterar os dados do meu veículo para manter as informações atualizadas.

  * *Critérios de Aceitação:* O sistema deve permitir a alteração dos dados cadastrados e validar as informações antes de salvar.

* **US04 - Exclusão do Veículo:** Como um Proprietário, quero excluir um veículo cadastrado para remover informações que não utilizo mais.

  * *Critérios de Aceitação:* O sistema deve solicitar confirmação antes da exclusão do veículo.

### 🔧 Épico 2: Registro de Manutenções

* **US05 - Registrar Manutenção:** Como um Proprietário, quero registrar uma manutenção realizada no meu veículo para manter um histórico dos serviços realizados.

  * *Critérios de Aceitação:* O usuário deve informar o veículo, tipo de manutenção, data, quilometragem, serviço realizado e valor; os campos obrigatórios devem ser validados antes do cadastro.

* **US06 - Visualizar Histórico de Manutenções:** Como um Proprietário, quero visualizar o histórico de manutenções do meu veículo para saber quais serviços já foram realizados.

  * *Critérios de Aceitação:* A lista deve apresentar a data, tipo de manutenção, quilometragem, serviço realizado e valor gasto.

* **US07 - Editar Manutenção:** Como um Proprietário, quero editar uma manutenção cadastrada para corrigir ou atualizar suas informações.

  * *Critérios de Aceitação:* O sistema deve permitir a alteração dos dados e realizar as validações antes de salvar.

* **US08 - Excluir Manutenção:** Como um Proprietário, quero excluir uma manutenção registrada para remover informações cadastradas incorretamente.

  * *Critérios de Aceitação:* O sistema deve solicitar confirmação antes de excluir a manutenção.

### 💰 Épico 3: Controle de Gastos

* **US09 - Visualizar Gastos:** Como um Proprietário, quero visualizar quanto já gastei com a manutenção do meu veículo para acompanhar minhas despesas.

  * *Critérios de Aceitação:* O sistema deve apresentar o valor individual das manutenções e o valor total gasto.

* **US10 - Consultar Gastos por Manutenção:** Como um Proprietário, quero visualizar os valores gastos em cada manutenção para identificar quais serviços tiveram maior custo.

  * *Critérios de Aceitação:* Cada manutenção deverá apresentar seu respectivo valor e o sistema deverá atualizar os valores quando uma manutenção for adicionada, editada ou excluída.

### 📅 Épico 4: Próximas Manutenções

* **US11 - Cadastrar Próxima Manutenção:** Como um Proprietário, quero cadastrar uma manutenção futura para lembrar quando determinado serviço deverá ser realizado.

  * *Critérios de Aceitação:* O usuário poderá informar o tipo de manutenção, data prevista e/ou quilometragem prevista.

* **US12 - Visualizar Próximas Manutenções:** Como um Proprietário, quero visualizar minhas próximas manutenções para saber quais serviços preciso realizar.

  * *Critérios de Aceitação:* O sistema deve apresentar as manutenções futuras cadastradas, suas datas e/ou quilometragens previstas.

* **US13 - Identificar Manutenção Atrasada:** Como um Proprietário, quero ser informado quando uma manutenção estiver atrasada para evitar que eu esqueça um serviço importante.

  * *Critérios de Aceitação:* O sistema deverá identificar como atrasada uma manutenção cuja data ou quilometragem prevista tenha sido ultrapassada.

* **US14 - Identificar Manutenção Próxima:** Como um Proprietário, quero ser informado quando uma manutenção estiver próxima para poder me programar para realizá-la.

  * *Critérios de Aceitação:* O sistema deverá identificar manutenções próximas de acordo com a data ou quilometragem cadastrada.

### 📊 Épico 5: Dashboard e Acompanhamento

* **US15 - Visualização do Dashboard:** Como um Proprietário, quero visualizar um resumo das informações do meu veículo para acompanhar sua situação de forma rápida.

  * *Critérios de Aceitação:* O dashboard deve apresentar a quilometragem atual, quantidade de manutenções, total gasto, última manutenção e próxima manutenção.

* **US16 - Visualizar Alertas:** Como um Proprietário, quero visualizar alertas de manutenção no painel para identificar rapidamente serviços próximos ou atrasados.

  * *Critérios de Aceitação:* O sistema deverá destacar manutenções próximas e atrasadas de maneira visualmente diferente.

### 🌐 Épico 6: Integração e Persistência de Dados

* **US17 - Persistência de Dados:** Como um Proprietário, quero que os dados cadastrados sejam armazenados para que eu possa consultá-los posteriormente.

  * *Critérios de Aceitação:* Os dados de veículos e manutenções deverão ser enviados e armazenados através de uma API falsa utilizando JSON Server.

* **US18 - Consulta de Dados:** Como um Proprietário, quero que os dados cadastrados sejam carregados automaticamente ao acessar as páginas do sistema.

  * *Critérios de Aceitação:* O sistema deverá realizar requisições assíncronas à API para consultar e exibir os dados cadastrados.

* **US19 - Consulta a API Pública:** Como um Proprietário, quero utilizar uma funcionalidade integrada a uma API pública para obter informações de forma automática.

  * *Critérios de Aceitação:* O sistema deverá realizar uma requisição para uma API pública real, apresentar os dados retornados e tratar possíveis erros na requisição.
