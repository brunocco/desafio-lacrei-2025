# Desafio Lacrei 2025

## Sobre a Lacrei

A Lacrei é uma ONG que atua na promoção da saúde e bem-estar de pessoas trans, oferecendo apoio psicológico, orientação sobre direitos e acesso a serviços de saúde adequados. Seu trabalho é focado na inclusão e na conscientização, visando melhorar a qualidade de vida da comunidade trans, além de combater a transfobia. A organização também realiza ações educativas e eventos para promover a diversidade e a equidade no Brasil. A Lacrei é um exemplo de transformação social, defendendo um mundo mais justo para todos.

## Desafio proposto

O desafio propõe realizar uma série de atividades de Quality Assurance no ambiente de testes da Lacrei Saúde, com foco em diversos aspectos funcionais, como cadastro de usuários, busca de profissionais de saúde, e edição de perfil. O objetivo é documentar casos de teste utilizando Gherkin, executar testes de desempenho, acessibilidade, responsividade, e automação com Cypress e Cucumber. Além disso, deve-se gerenciar e registrar bugs e propor melhorias, utilizando GitHub para centralizar a documentação e manter um repositório atualizado. O teste será considerado completo com a execução eficiente de cada um desses passos, visando garantir a qualidade do sistema.

## Tarefas concluídas:
- Configuração do ambiente de testes
- Criação e execução de casos de teste (Versão Mobile);
- Documentação dos casos de teste;
- Automação de testes;
- Testes de desempenho;
- Testes de responsividade;
- Registro de bugs e melhorias;

## Configuração do ambiente de testes
>**NOTE**
>
>*Foi escolhido o navegador Chrome para o teste
>
>*Foi escolhido o editor VSCode para o teste. 

```bash
# Em sua pasta raiz do projeto, usando o vs code, abra um novo terminal e digite: 
git init 

# Instalção o Cypress: 
npm install cypress --save-dev 

# Instalação da biblioteca Cumcumber: 
npm install cypress-cucumber-preprocessor --save-dev 

# Iniciar o Cypress: 
npx cypress open

# Escolha as opções: 
E2E Testing/Continue/Chrome/Start E2E/Create new Spec 
 
aguarde até o Cypress realizar a visita ao proprio site, após isso feche o Cypress. 
 
# No VScode apague esse Spec dentro da pasta E2E 
 
# Em cypress.config.js import a classe cypress-cucumber inserindo a linha: 
const cucumber = require(‘cypress-cucumber-preprocessor’).default

# Adicione um evento dentro de setupNodeEvents e um specpattern: 
setupNodeEvents(on, config) { 

      on('file:preprocessor', cucumber()) 

    }, 

    specPattern: 'cypress/e2e/ step-definitions /*.feature', 

# Adicione a dependência ao final dentro do package.json: 

  "cypress-cucumber-preprocessor": { 

    "nonGlobalStepDefinitions": true, 

    "stepDefinitions": "cypress/e2e/step-definitions" 

  }

# Dentro da pasta e2e crie a pasta step-definitions onde você criará os casos de testes em Gherkin com nomenclatura “nomefeature.feature” 
 
# Dentro da pasta step-definitions crie pastas “nomefeature”, onde você criará os fluxos de teste automatizados.
```

## Criação e execução de casos de teste (Versão Mobile)

 
