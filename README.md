# Desafio Lacrei 2025

## Sobre a Lacrei

A Lacrei é uma ONG que atua na promoção da saúde e bem-estar de pessoas trans, oferecendo apoio psicológico, orientação sobre direitos e acesso a serviços de saúde adequados. Seu trabalho é focado na inclusão e na conscientização, visando melhorar a qualidade de vida da comunidade trans, além de combater a transfobia. A organização também realiza ações educativas e eventos para promover a diversidade e a equidade no Brasil. A Lacrei é um exemplo de transformação social, defendendo um mundo mais justo para todos.

## Desafio proposto

O desafio propõe realizar uma série de atividades de Quality Assurance no ambiente de testes da Lacrei Saúde, com foco em diversos aspectos funcionais, como cadastro de usuários, busca de profissionais de saúde, e edição de perfil. O objetivo é documentar casos de teste utilizando Gherkin, executar testes de desempenho, acessibilidade, responsividade, e automação com Cypress e Cucumber. Além disso, deve-se gerenciar e registrar bugs e propor melhorias, utilizando GitHub para centralizar a documentação e manter um repositório atualizado. O teste será considerado completo com a execução eficiente de cada um desses passos, visando garantir a qualidade do sistema.

## Tarefas concluídas:
- [x] Tarefa 1 - ✔️  Configuração do ambiente de testes
- [x] Tarefa 2 - ✔️  Criação e documentação de casos de teste (Versão Mobile);
- [x] Tarefa 3 - ✔️  Execução com Automação de testes (Cypress e Cucumber);
- Testes de desempenho;
- Testes de responsividade;
- Registro de bugs e melhorias;

## ⚙️ Configuração do ambiente de testes
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

## 🛠️ Criação e documentação de casos de teste (Versão Mobile)
Os casos de testes foram escritos em linguagem Gherkin, pois essa abordagem permite a definição de comportamentos do sistema de forma clara e compreensível tanto para desenvolvedores quanto para profissionais não técnicos, como analistas de negócios e stakeholders. Utilizando a sintaxe simples e legível do Gherkin, garantimos uma comunicação eficaz entre as equipes e facilita a implementação de testes automatizados dentro de práticas ágeis, como o BDD (Behavior Driven Development), além de promover a colaboração entre os membros da equipe ao descrever as funcionalidades esperadas de maneira específica e compreensível.

Foram craidos os seguintes fluxos de casos de testes:

```bash
 🟢 Feature: Busca por profissionais
    
      Scenario: Buscar por um profissional no iPhone 6
        Given estou logado na página no iPhone 6
        When digito "Dentista"
        And clico em "Buscar"
        Then recebo uma lista de resultados no iPhone 6
    
      Scenario: Buscar por um profissional no MacBook 11
        Given estou logado na página no MacBook 11
        When digito "Dentista"
        And clico em "Buscar"
        Then recebo uma lista de resultados no MacBook 11

    
🟢  Feature: Cadastro de uruário
    
      Scenario: Cadastro com sucesso
        Given estou na página inicial
        When clico em "Criar conta"
        And estou na pagina de cadastro
        And digito o nome civil ou social
        And digito o sobrenome
        And digito o email
        And confirmo o email
        And digito senha válida
        And confirmo senha válida
        And concordo com os termos de uso
        And confirmo que tenho 18 anos ou mais
        And clico no botão Cadastrar
        Then recebo informção para confirmar cadastro emmeu email


🟢  Feature: Edição de perfil da pessoa usuária
    
      Scenario: Edição de dados com sucesso
        Given estou logado na página
        When clico na foto do perfil
        And seleciono o submenu "Perfil"
        And clico no botão "Editar dados"
        And edito meus dados
        And clico no botão "Salvar"
        Then meus dados são alterados com sucesso
    
    
      Scenario: Edição de nome e sobrenome sem sucesso com números
        Given estou logado na página
        When clico na foto do perfil
        And seleciono o submenu "Perfil"
        And clico no botão "Editar dados"
        And edito meu nome e sobrenome com apenas números
        And clico no botão "Salvar"
        Then recebo uma mensagem de erro indicando que números não são permitidos
    
    
      Scenario: Edição de nome e sobrenome sem sucesso com caracteres especiais
        Given estou logado na página
        When clico na foto do perfil
        And seleciono o submenu "Perfil"
        And clico no botão "Editar dados"
        And edito meu nome e sobrenome com caracteres especiais
        And clico no botão "Salvar"
        Then recebo uma mensagem de erro indicando que caracteres especiais não são permitidos
    
    
      Scenario: Edição de nome e sobrenome sem sucesso em branco
        Given estou logado na página
        When clico na foto do perfil
        And seleciono o submenu "Perfil"
        And clico no botão "Editar dados"
        And edito meu nome e sobrenome com campos em branco
        And clico no botão "Salvar"
        Then recebo uma mensagem de erro indicando que o nome e sobrenome não podem estar em branco


🟢  Feature: Esquecer senha e resetar
    
      Scenario: Envio de email para recuperação de senha com sucesso
        Given estou na página inicial
        When clico em Esqueci minha senha
        And estou na pagina de redeficição de senha
        And digito meu email
        And clico no botão "Enviar link"
        Then um email de recuperação é enviado para para mim
    
      Scenario: Envio de email para recuperação sem sucesso
        Given estou na página inicial
        When clico em Esqueci minha senha
        And digito um email invalido
        Then o botao de Enviar link fica desativado
```
## 💻 Execução com Automação de testes (Cypress e Cucumber)

Os testes automatizados foram realizados utilizando as ferramentas Cypress e Cucumber, pois essas tecnologias oferecem suporte robusto para a automação de testes de interface e validação de comportamento, além de facilitar a integração com metodologias ágeis. Todos os testes foram executados simulando a visualização em telas de iPhone 6(Mobile), com exceção do teste de busca por profissional, que também foi realizado em uma tela de MacBook 11(Desktop), conforme especificado nas orientações do desafio para análise de responsividade.

🧩 Código teste Buscar Profissional
```bash
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

// Teste com iPhone 6
Given('estou logado na página no iPhone 6', () => {
    cy.viewport('iphone-6'); 
    cy.visit('https://paciente-staging.lacreisaude.com.br/');
    cy.get('#email').type('bruno_cco@hotmail.com');
    cy.get('#password').type('Teste2790@');
    cy.get('[type="submit"]').click(); 
});

When('digito {string}', (text) => { 
    cy.get('#search').type(text); 
});

And('clico em "Buscar"', () => {
    cy.get('[type="submit"]').click(); 
});

Then('recebo uma lista de resultados no iPhone 6', () => {
    cy.url().should("include", "lista-de-profissionais/");
});

// Teste com MacBook 11
Given('estou logado na página no MacBook 11', () => {
    cy.viewport(1366, 768);  // Resolução para MacBook 11 (1366x768)
    cy.visit('https://paciente-staging.lacreisaude.com.br/');
    cy.get('#email').type('bruno_cco@hotmail.com');
    cy.get('#password').type('Teste2790@');
    cy.get('[type="submit"]').click(); 
});

Then('recebo uma lista de resultados no MacBook 11', () => {
    cy.url().should("include", "lista-de-profissionais/");
});
```
🧩 Código teste Cadastrar usuário
```bash
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

//   Scenario: Cadastro com sucesso
Given('estou na página inicial', () => {
    cy.viewport('iphone-6'); 
    cy.visit('https://paciente-staging.lacreisaude.com.br/');
});

When('clico em "Criar conta"', () => {
    cy.contains('Criar conta').click();
});

And('estou na pagina de cadastro', () => {
    cy.url().should('include', 'https://paciente-staging.lacreisaude.com.br/cadastro/');
}); 

And('digito o nome civil ou social', () => {
    cy.get('#first_name').type('Bruno');
})

And('digito o sobrenome', () => {
    cy.get('#last_name').type('Costa');
})  

And('digito o email', () => {
    cy.get('#email').type('brunosherlocked@gmail.com');
})

And('confirmo o email', () => {
    cy.get('#email2').type('brunosherlocked@gmail.com');
})

And('digito senha válida', () => {
    cy.get('#password1').type('Teste2790@');
})

And('confirmo senha válida', () => {
    cy.get('#password2').type('Teste2790@');
})

And('concordo com os termos de uso', () => {
    cy.contains('Li e concordo com os Termos de uso').scrollIntoView(); 
    cy.get('input[type="checkbox"]').check({ force: true });
})

And('confirmo que tenho 18 anos ou mais', () => {
    cy.get('input[name="is_18_years_old_or_more"]').scrollIntoView().check({ force: true });
})

And('clico no botão Cadastrar', () => {
    cy.get('button[type="submit"]').click();    
})  

Then('recebo informção para confirmar cadastro emmeu email', () => {
    cy.contains('Estamos quase lá...').should('be.visible');    
})
```

🧩 Código teste Edição usuário
```bash
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

//Edição de dados com sucesso
Given('estou logado na página', () => {
    cy.viewport('iphone-6');
    cy.visit('https://paciente-staging.lacreisaude.com.br/');
    cy.get('#email').type('bruno_cco@hotmail.com');
    cy.get('#password').type('Teste2790@');
    cy.get('[type="submit"]').click(); 
});

When('clico na foto do perfil', () => {
    cy.get('.sc-89af07af-3.fcKbjf').click();
});

And('seleciono o submenu "Perfil"', () => {
    cy.contains('Perfil').click();  
});

And('clico no botão "Editar dados"', () => {    
    cy.contains('Editar dados').click();
});

And('edito meus dados', () => {
    cy.get('#name').clear().type('Breno');
    cy.get('#lastName').clear().type('Alcantara Pedrosa');
    cy.get('#birth_date').clear().type('1990-09-15');
    cy.contains('span', 'a/Ela/Dela').click();
    cy.contains('span', 'Amarela').click();
    cy.contains('span', 'Intersexo').click();
    cy.contains('span', 'Assexual').click();
    cy.contains('span', 'Não possuo deficiência').click();   
}); 

And('clico no botão "Salvar"', () => {
    cy.get('button').contains('Salvar').click();
});

Then('meus dados são alterados com sucesso', () => {
    cy.contains('Breno Alcantara Pedrosa');
});


//Edição de nome e sobrenome sem sucesso com números
Given('estou logado na página', () => {
    cy.viewport('iphone-6');
    cy.visit('https://paciente-staging.lacreisaude.com.br/');
    cy.get('#email').type('bruno_cco@hotmail.com');
    cy.get('#password').type('Teste2790@');
    cy.get('[type="submit"]').click(); 
});

When('clico na foto do perfil', () => {
    cy.get('.sc-89af07af-3.fcKbjf').click();
});

And('seleciono submenu "Perfil"', () => {
    cy.contains('Perfil').click();  
});

And('clico no botão "Editar dados"', () => {    
    cy.contains('Editar dados').click();
});

And('edito meu nome e sobrenome com apenas números', () => {
    cy.get('#name').clear().type('11111');
    cy.get('#lastName').clear().type('111111');  
}); 

And('clico no botão "Salvar"', () => {
    cy.get('button').contains('Salvar').click();
});

Then('recebo uma mensagem de erro indicando que números não são permitidos', () => {
    cy.contains('Nome e sobrenome devem conter apenas letras e espaços.');
});


//Edição de nome e sobrenome sem sucesso com caracteres especiais
Given('estou logado na página', () => {
    cy.viewport('iphone-6');
    cy.visit('https://paciente-staging.lacreisaude.com.br/');
    cy.get('#email').type('bruno_cco@hotmail.com');
    cy.get('#password').type('Teste2790@');
    cy.get('[type="submit"]').click(); 
});

When('clico na foto do perfil', () => {
    cy.get('.sc-89af07af-3.fcKbjf').click();
});

And('seleciono submenu "Perfil"', () => {
    cy.contains('Perfil').click();  
});

And('clico no botão "Editar dados"', () => {    
    cy.contains('Editar dados').click();
});

And('edito meu nome e sobrenome com caracteres especiais', () => {
    cy.get('#name').clear().type('@#$%^&*');	
    cy.get('#lastName').clear().type('@#$%^&*');  
}); 

And('clico no botão "Salvar"', () => {
    cy.get('button').contains('Salvar').click();
});

Then('recebo uma mensagem de erro indicando que caracteres especiais não são permitidos', () => {
    cy.contains('Nome e sobrenome devem conter apenas letras e espaços.');
});

//Edição de nome e sobrenome sem sucesso em branco
Given('estou logado na página', () => {
    cy.viewport('iphone-6');
    cy.visit('https://paciente-staging.lacreisaude.com.br/');
    cy.get('#email').type('bruno_cco@hotmail.com');
    cy.get('#password').type('Teste2790@');
    cy.get('[type="submit"]').click(); 
});

When('clico na foto do perfil', () => {
    cy.get('.sc-89af07af-3.fcKbjf').click();
});

And('seleciono submenu "Perfil"', () => {
    cy.contains('Perfil').click();  
});

And('clico no botão "Editar dados"', () => {    
    cy.contains('Editar dados').click();
});

And('edito meu nome e sobrenome com campos em branco', () => {
    cy.get('#name').clear();	
    cy.get('#lastName').clear();  
}); 

And('clico no botão "Salvar"', () => {
    cy.get('button').contains('Salvar').click();
});

Then('recebo uma mensagem de erro indicando que o nome e sobrenome não podem estar em branco', () => {
    cy.contains('Nome deve ser preenchido');
});
```

🧩 Código de teste de Recuperação de senha
```bash
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

//Envio de email para recuperação de senha com sucesso
Given('estou na página inicial', () => {
    cy.viewport('iphone-6');
    cy.visit('https://paciente-staging.lacreisaude.com.br/');
});

When('clico em Esqueci minha senha', () => {
    cy.contains('Esqueci minha senha').click();
});

And('estou na pagina de redeficição de senha', () => {
    cy.url().should('include', 'https://paciente-staging.lacreisaude.com.br/redefinicao-de-senha/');
});

And('digito meu email', () => {
    cy.wait(2000);
    cy.get('input[type="email"]').should('be.visible').type('bruno_cco@hotmail.com', { force: true });
});

And('clico no botão "Enviar link"', () => {
    cy.get('button[type="submit"]').click();
});

Then('um email de recuperação é enviado para para mim', () => {
    cy.contains('Verifique seu e-mail para redefinir a senha');
});


// Envio de email para recuperação sem sucesso
Given('estou na página inicial', () => {
    cy.viewport('iphone-6'); 
    cy.visit('https://paciente-staging.lacreisaude.com.br/');
});

When('clico em Esqueci minha senha', () => {
    cy.contains('Esqueci minha senha').click();
});

And('digito um email invalido', () => {
    cy.wait(2000);
    cy.get('#email').type('bruno@@');
}); 

Then('o botao de Enviar link fica desativado', () => {
    cy.get('button[type="submit"]').should('be.disabled');
});
```







 
