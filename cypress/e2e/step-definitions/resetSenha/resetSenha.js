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
