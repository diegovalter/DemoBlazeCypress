# 🛒 Automação E2E - DemoBlaze (Cypress)

Este projeto realiza a automação de testes de ponta a ponta (E2E) no site de e-commerce **DemoBlaze**, utilizando o framework **Cypress**. O foco é validar o fluxo completo de compra de um dispositivo (Samsung Galaxy S7), cobrindo desde a seleção no catálogo até a finalização do pedido no checkout.

---

## 📋 Funcionalidades Automatizadas

### 📱 Fluxo de Compra de Celular

* **Cenário:** Acesso à home, seleção do produto através de busca por texto e contêineres (`parents/find`), e adição ao carrinho.
* **Validação de Alertas:** Captura e validação de janelas de alerta nativas do navegador (`window:alert`) para confirmar que o produto foi adicionado com sucesso.
* **Checkout Completo:** Preenchimento de formulário de pedido dentro de modais, garantindo que os dados de faturamento e cartão sejam processados.

---

## 🛠️ Tecnologias Utilizadas

* **Cypress (v15+)** — Framework principal para testes de interface.
* **JavaScript** — Linguagem de escrita dos testes.
* **Node.js** — Ambiente de execução.

---

## ⚙️ Configurações de Ambiente

O arquivo `cypress.config.js` foi personalizado para otimizar a experiência de teste:

* **BaseURL:** `https://www.demoblaze.com/` (centralização de endereços).
* **Viewport:** Resolução Full HD (1920x1080) para garantir que todos os elementos estejam visíveis.
* **Segurança:** `chromeWebSecurity: false` habilitado para evitar problemas de cross-origin durante a navegação.

---

## 📁 Estrutura do Projeto

```text
├── cypress/
│   ├── e2e/
│   │   └── comprar_celular.cy.js # Scripts de teste (Specs)
│   ├── support/                 # Comandos e configurações globais
│   └── fixtures/                # Dados estáticos (Mocks)
├── cypress.config.js            # Configuração principal do Cypress
├── package.json                 # Gerenciamento de versões
└── README.md                    # Documentação

```

---

## 🚀 Como Executar o Projeto

1. **Instale as dependências:**
```bash
npm install

```


2. **Abra a interface do Cypress (Modo Interativo):**
```bash
npx cypress open

```


3. **Execute os testes via linha de comando (Modo Headless):**
```bash
npx cypress run

```



---

## 💡 Diferenciais do Código

* **Navegação Inteligente:** Uso de `cy.contains` combinado com seletores de classe para localizar produtos específicos de forma resiliente.
* **Interação com Modais:** Validação de visibilidade (`be.visible`) e preenchimento de campos de input usando tanto `type` quanto `invoke('val')`.
* **Asserções de URL:** Verificação constante de mudanças de página através de IDs de produtos (`idp_=4`) e rotas de carrinho.
