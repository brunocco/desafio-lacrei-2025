Feature: Edição de perfil da pessoa usuária

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

