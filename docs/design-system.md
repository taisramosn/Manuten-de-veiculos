# 🎨 Design System - CarCare

Neste projeto, utilizamos um framework CSS e aplicamos customizações para refletir a identidade visual do sistema de controle de manutenção de veículos.

### 1. Framework Base

* **Framework escolhido:** Bootstrap
* **Motivação:** O Bootstrap oferece componentes prontos e responsivos, permitindo desenvolver a aplicação de forma rápida e consistente, utilizando recursos como Grid, Cards, Buttons, Forms, Navbar, Modal e Alerts.

### 2. Paleta de Cores (Customização)

A identidade visual do CarCare utiliza cores associadas ao universo automotivo, transmitindo organização, confiança e facilidade de uso.

* **Cor Primária:** `#1565C0` *(Blue darken-3)*

  * *Uso:* Botões principais, links, elementos de destaque, navegação e ações relacionadas ao cadastro e gerenciamento de informações.

* **Cor Secundária:** `#263238` *(Blue Grey darken-4)*

  * *Uso:* Navbar, títulos de destaque, ícones e elementos estruturais da interface.

* **Cor de Fundo (Background):** `#F5F7FA`

  * *Uso:* Fundo principal das páginas para destacar cards, formulários e demais componentes.

* **Cor de Superfície:** `#FFFFFF`

  * *Uso:* Cards, tabelas, formulários e áreas de conteúdo.

* **Cor de Sucesso:** `#2E7D32`

  * *Uso:* Indicar manutenções realizadas com sucesso, operações concluídas e situações em dia.

* **Cor de Atenção:** `#F9A825`

  * *Uso:* Indicar manutenções próximas, avisos e situações que exigem atenção.

* **Cor de Erro:** `#C62828`

  * *Uso:* Indicar manutenções atrasadas, erros de formulário e ações que precisam de atenção imediata.

### 3. Tipografia

A aplicação utilizará uma tipografia simples e moderna, priorizando legibilidade em dispositivos móveis e desktop.

* **Títulos (H1 a H6):** `Poppins, sans-serif` (Peso: 600 ou 700).
* **Textos corridos, formulários e tabelas:** `Inter, sans-serif` (Peso: 400).
* **Destaques numéricos:** `Poppins, sans-serif` (Peso: 600 ou 700).

As fontes serão importadas utilizando Google Fonts.

### 4. Diretrizes de Uso de Componentes

As regras abaixo definem como os componentes do Bootstrap serão utilizados dentro da interface do CarCare.

* **Botões (`.btn`):**

  * Ações principais, como cadastrar veículo e registrar manutenção, devem utilizar `btn-primary`.
  * Ações secundárias devem utilizar `btn-secondary` ou `btn-outline-primary`.
  * Ações de exclusão devem utilizar `btn-danger`.
  * Os botões devem possuir tamanho adequado para interação em dispositivos móveis.

* **Cards (`.card`):**

  * Utilizados no Dashboard para apresentar informações como quilometragem, total gasto e quantidade de manutenções.
  * Também podem ser utilizados para apresentar veículos e próximas manutenções.
  * Os cards devem possuir espaçamento interno adequado e aparência limpa.

* **Formulários (`.form-control` e `.form-select`):**

  * Os campos devem possuir `label` identificando claramente cada informação.
  * Campos obrigatórios devem ser identificados.
  * Mensagens de validação devem aparecer próximas aos campos correspondentes.
  * Os campos devem ocupar a largura disponível em dispositivos menores.

* **Badges (`.badge`):**

  * Utilizados para indicar o status das manutenções.
  * `badge bg-success` → Manutenção em dia.
  * `badge bg-warning` → Manutenção próxima.
  * `badge bg-danger` → Manutenção atrasada.

* **Alertas (`.alert`):**

  * Utilizados para informar o usuário sobre operações realizadas, erros e avisos importantes.
  * `alert-success` → Operação concluída.
  * `alert-warning` → Manutenção próxima.
  * `alert-danger` → Manutenção atrasada ou erro.

* **Navbar (`.navbar`):**

  * Utilizada como principal elemento de navegação.
  * Deve permitir acesso às áreas de Dashboard, Veículos, Manutenções, Próximas Manutenções e Gastos.
  * Em dispositivos menores deverá utilizar o menu responsivo do Bootstrap.

* **Tabelas (`.table`):**

  * Utilizadas para apresentar o histórico de manutenções e gastos.
  * Em dispositivos móveis deverão ser adaptadas utilizando recursos de responsividade do Bootstrap.

* **Modal (`.modal`):**

  * Utilizado para confirmações de ações importantes, como exclusão de veículos e manutenções.

### 5. Espaçamento e Layout

O sistema utilizará o sistema de espaçamento fornecido pelo Bootstrap, priorizando unidades relativas e componentes responsivos.

* Margens e espaçamentos deverão utilizar classes do Bootstrap como `m-*`, `p-*`, `gap-*` e `g-*`.
* O layout deverá utilizar o sistema de Grid do Bootstrap.
* O conteúdo deverá ser organizado em containers responsivos.
* Elementos deverão se adaptar ao tamanho disponível da tela.

### 6. Responsividade

A aplicação seguirá o conceito **Mobile First**, utilizando o sistema de Grid e os breakpoints do Bootstrap.

* **Mobile:** interface simplificada e organizada em uma coluna.
* **Tablet:** utilização de duas ou mais colunas quando houver espaço suficiente.
* **Desktop:** utilização de múltiplas colunas para aproveitar melhor a área disponível.

A navegação deverá utilizar o comportamento responsivo da Navbar do Bootstrap.

### 7. Estados dos Componentes

Os componentes deverão possuir estados visuais claros:

* **Normal:** componente disponível para interação.
* **Hover:** indicação visual ao passar o mouse.
* **Focus:** indicação de elemento selecionado.
* **Disabled:** componente temporariamente indisponível.
* **Loading:** indicação de carregamento durante requisições.
* **Success:** operação realizada corretamente.
* **Error:** operação não realizada ou dados inválidos.

### 8. Ícones

Serão utilizados ícones para facilitar a identificação visual das funcionalidades.

Os ícones poderão representar:

* 🚗 Veículos.
* 🔧 Manutenções.
* 🛞 Pneus.
* 🛢️ Óleo.
* 💰 Gastos.
* 📅 Próximas manutenções.
* ⚠️ Alertas.

Os ícones deverão ser utilizados como complemento das informações textuais, evitando depender exclusivamente deles para transmitir significado.

### 9. Princípios Visuais

O CarCare deverá seguir os seguintes princípios:

* **Clareza:** as informações importantes devem ser facilmente identificadas.
* **Consistência:** componentes semelhantes devem possuir aparência e comportamento semelhantes.
* **Simplicidade:** evitar excesso de elementos visuais.
* **Responsividade:** a interface deverá funcionar em diferentes tamanhos de tela.
* **Hierarquia:** informações mais importantes devem receber maior destaque.
* **Usabilidade:** ações comuns devem ser fáceis de encontrar e executar.
