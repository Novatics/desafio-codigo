# Desafio de código da Novatics!

Bem vindo ao desafio de código da Novatics!

Este desafio faz parte do processo seletivo da Novatics. Nas seções a seguir descrevemos o contexto do desafio, o problema, os objetivos e listamos o que deve ser entregue pelo candidato.

  ## Contexto
  Para este desafio vamos utilizar um cenário comum em várias empresas: a atribuição de 
  kudos para pessoas que mandaram bem em algum projeto e/ou tarefa.
    
  Os kudos são uma forma de elogio e agradecimento ao trabalho executado por uma pessoa.

  ## Problema

  Uma empresa tem um programa de incentivo que converte kudos para um valor em reais que é repassado ao colaborador. Funciona assim:
  - Os colaboradores podem receber pontos em retribuição a uma tarefa e/ou projeto executado.
  - Os pontos são convertidos para kudos que ficam registrados no histórico do colaborador.
  - Os kudos são convertidos para um valor em reais que será pago ao colaborador.
  
  Depois de feita a conversão dos kudos para o valor em reais, a empresa envia uma mensagem de agradecimento para o colaborador.
  
  ## Objetivos
  
  Neste desafio sua missão é desenvolver um código que deve cumprir a seguintes funcões:
  
  1. Converter um conjunto de pontos recebidos por uma pessoa para um conjunto de kudos. Os seguintes requisitos devem ser considerados:
      1. A conversão deve ser feita de modo a retornar o menor número possível de kudos (retornando um conjunto de kudos de maior valor possível).
      2. O conjunto de kudos convertidos deve ser retornado em ordem decrescente. Esse conjunto pode conter kudos repetidos (veja o Exemplo 3).
      3. Para esse problema você pode esperar que o número de pontos de uma pessoa será sempre divisível pelo conjunto de kudos.
   2. Converter um conjunto de kudos para uma mensagem contendo o valor em reais por extenso dos kudos recebidos.
      1. A mensagem deve ter o seguinte formato:
          ```
          "Você recebeu ${valor por extenso} reais em retorno aos kudos ${lista de kudos separada por vígula}!"
          ```
      2. O valor será sempre menor que 1 milhão de reais.

  ### Exemplo:
  Tomando por base as seguinte tabela de conversão:
  
  | kudos               |  pontos             |  valor              |
  | ------------------- | ------------------- | ------------------- |
  |  OK                 |  5                  |  2                  |
  |  NICE               |  10                 |  5                  |
  |  GOOD               |  20                 |  8                  |
  |  GREAT              |  50                 |  15                 |
  |  SUPER              |  100                |  25                 |

  **Exemplo 1.** Uma pessoa recebeu 30 pontos:
  * Os seguintes kudos devem ser atribuídos: NICE, GOOD
  * A seguinte mensagem deve ser retornada:

      ```
      "Você recebeu treze reais em retorno aos kudos NICE, GOOD!"
      ```


  **Exemplo 2.** Uma pessoa recebeu 135 pontos:
  * Os seguintes kudos devem ser atribuídos: SUPER, GOOD, NICE, OK
  * A seguinte mensagem deve ser retornada:

      ```
      "Você recebeu quarenta reais em retorno aos kudos SUPER, GOOD, NICE, OK!"
      ```
      
  **Exemplo 3.** Uma pessoa recebeu 40 pontos:
  * Os seguintes kudos devem ser atribuídos: GOOD, GOOD
  * A seguinte mensagem deve ser retornada:

      ```
      "Você recebeu dezesseis reais em retorno aos kudos GOOD, GOOD!"
      ```

  ## O que você deve entregar para este desafio

  * O código que implementa a solução para os dois pontos descritos na seção de [Objetivos](#objetivos).
  * Testes unitários são um diferencial!

  ## Informações adicionais

  Foram criadas duas assinaturas de funções no arquivo `kudos.js`. Fique à vontade para alterá-las, criar novas funções, etc. Lembre-se somente de ajustar o arquivo de testes `kudos.test.js` de acordo com as alterações feitas.
  
  **Como executar os testes:**
  
  * Instale as dependências:
  
  ```
    yarn
  ```
  
  
  * Execute os testes
  ```
    yarn test
  ```
