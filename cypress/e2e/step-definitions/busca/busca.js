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


