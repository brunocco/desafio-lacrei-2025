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