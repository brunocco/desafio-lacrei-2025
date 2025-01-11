Feature: Busca de um profissional de saúde

  Scenario: Busca realizada com sucesso
    Given estou logado na página
    When digito "Medico gay"
    And clico em "Buscar"
    Then recebo uma lista de resultados


