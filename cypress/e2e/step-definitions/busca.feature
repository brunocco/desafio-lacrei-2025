Feature: Busca por profissionais

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



