Feature: Cadastro de uruário

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