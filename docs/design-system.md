# 🎨 Sistema de Design - CarCare

O **CarCare** utiliza um sistema visual baseado no framework **Materialize CSS**, com customizações próprias para manter uma identidade visual consistente, simples e adequada ao controle de veículos e suas manutenções.

O sistema de design define as cores, tipografia, componentes, espaçamentos, estados visuais, ícones e regras de responsividade utilizadas na aplicação.

---

## 1. Framework Base

### Framework escolhido

- **Materialize CSS 1.0.0**

O Materialize fornece componentes prontos para a construção da interface, além de recursos para responsividade, formulários, tabelas, botões, modais, navegação e outros elementos da aplicação.

O CarCare utiliza o Materialize como base e aplica estilos personalizados para adequar os componentes à identidade visual do sistema.

### Bibliotecas visuais utilizadas

- **Materialize CSS 1.0.0**
- **Material Icons**
- **Google Fonts - Inter**

Além dos componentes do Materialize, o projeto possui classes CSS próprias para elementos específicos do CarCare, como:

- `.btn-carcare`
- `.btn-outline-carcare`
- `.car-card`
- `.content-box`
- `.car-status-tag`
- `.filter-chip`
- `.sidebar-nav-item`

---

## 2. Paleta de Cores

A identidade visual do CarCare utiliza principalmente tons de azul, branco e cinza, buscando transmitir organização, clareza e facilidade de uso.

### 2.1 Cores principais

| Nome | Código | Uso |
|---|---|---|
| Primária | `#2563EB` | Botões principais, ações, destaques e elementos ativos |
| Primária escura | `#1D4ED8` | Estado hover de elementos principais |
| Primária clara | `#EFF6FF` | Áreas de destaque e fundos relacionados à cor primária |
| Fundo principal | `#F8FAFC` | Fundo geral da aplicação |
| Superfície | `#FFFFFF` | Cards, formulários, tabelas e áreas de conteúdo |
| Texto principal | `#0F172A` | Títulos e textos de maior importância |
| Texto secundário | `#64748B` | Informações auxiliares, descrições e textos menos importantes |
| Borda | `#E2E8F0` | Bordas de cards, tabelas, campos e divisores |

### 2.2 Cores de estado

| Estado | Cor principal | Uso |
|---|---|---|
| Sucesso | `#10B981` | Manutenções concluídas e situações positivas |
| Atenção | `#F59E0B` | Manutenções em andamento ou situações que exigem atenção |
| Erro | `#EF4444` | Erros, situações críticas ou manutenções que precisam de atenção |
| Verde claro | `#DCFCE7` | Fundo de status positivo |
| Vermelho claro | `#FEE2E2` | Fundo de status negativo |
| Amarelo claro | `#FEF3C7` | Fundo de status de atenção |
| Azul claro | `#DBEAFE` | Fundo de informações e estados relacionados à cor primária |

### 2.3 Sidebar

A navegação lateral utiliza uma paleta própria:

- **Fundo da sidebar:** `#0F172A`
- **Hover da navegação:** `#1E293B`
- **Item ativo:** `#2563EB`
- **Texto claro:** `#E2E8F0`
- **Texto branco:** `#FFFFFF`

---

## 3. Tipografia

A tipografia principal utilizada no CarCare é a **Inter**, escolhida por sua boa legibilidade e aparência adequada para interfaces web.

### 3.1 Fonte principal

- **Inter**
- Pesos utilizados: `300`, `400`, `500`, `600`, `700` e `800`

A fonte é utilizada em títulos, textos, formulários, tabelas, botões e demais elementos da interface.

### 3.2 Hierarquia tipográfica

A interface utiliza diferentes pesos e tamanhos para estabelecer uma hierarquia visual.

- **Títulos de página:** maior tamanho e maior peso.
- **Títulos de cards:** peso intermediário ou alto.
- **Textos:** peso regular.
- **Informações auxiliares:** tamanho menor e cor secundária.
- **Indicadores numéricos:** tamanho maior e maior peso.
- **Cabeçalhos de tabelas:** tamanho reduzido, peso alto e letras em maiúsculas.

### 3.3 Tabelas

Os cabeçalhos das tabelas utilizam:

- Fonte em tamanho reduzido.
- Peso `700`.
- Letras maiúsculas.
- Espaçamento entre letras.
- Cor secundária `#64748B`.

---

## 4. Diretrizes de Uso de Componentes

Os componentes da interface utilizam os recursos do Materialize CSS combinados com classes personalizadas do CarCare.

### 4.1 Botões

Os botões principais utilizam a classe personalizada `.btn-carcare`.

Características:

- Cor de fundo: `#2563EB`.
- Texto branco.
- Bordas arredondadas.
- Peso da fonte `600`.
- Ícone opcional.
- Altura aproximada de `38px`.
- Espaçamento interno adequado.

Exemplo de uso:

```html
<a class="btn btn-carcare">
    <i class="material-icons">add</i>
    Nova Manutenção
</a>