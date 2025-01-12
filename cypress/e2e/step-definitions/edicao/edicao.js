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
