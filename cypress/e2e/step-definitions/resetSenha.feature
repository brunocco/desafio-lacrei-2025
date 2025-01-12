Feature: Esquecer senha e resetar

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


