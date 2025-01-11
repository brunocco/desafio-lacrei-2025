import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


Given('estou logado na página', () => {
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

Then('recebo uma lista de resultados', () => {
    cy.url().should("include", "lista-de-profissionais/");
});

