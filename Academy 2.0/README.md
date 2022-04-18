# Desafio de código da Novatics!

Bem vindo ao desafio de código da Novatics!

Este desafio faz parte do processo seletivo da Novatics. Nas seções a seguir descrevemos o contexto do desafio, os problemas e listamos o que deve ser entregue pelo candidato.

## Contexto

Neste desafio apresentamos dois problemas com diferentes níveis de dificuldade para avaliarmos a capacidade de organização e solução de problemas dos candidatos.


## Problema 1

<details>
<summary>Manipulando listas</summary>
Crie uma função que receba uma lista de números inteiros como parâmetro. Essa função deverá primeiramente ordenar os elementos em ordem crescente e após isso, deverá remover os elementos duplicados da lista, mantendo a ordem anterior.

### Exemplo de como deve funcionar a solução:

```
 input: [8, 5, 10, 5, 2, 4, 4, 3]
 output: [2, 3, 4, 5, 8, 10]

```

</details>

## Problema 2

<details>
<summary>Validando Sudoku</summary>

Determine se uma tabela de Sudoku está valida, ou seja, os elementos inseridos correspondem as regras do jogo. Essas regras são:

1. Cada linha deve conter dígitos de 1 - 9, SEM repetição;
2. Cada coluna deve conter dígitos de 1 - 9, SEM repetição;
3. Todas as noves mini-tabelas devem conter dígitos de 1 - 9, SEM repetição;

Sudoku válido:

![valid_sudoku](https://user-images.githubusercontent.com/22327574/145793588-5e8d6629-ea0b-4323-b4be-e775729da11f.png)

#### Exemplo de como deve funcionar a solução:

```
board =
   [["5","3",".",".","7",".",".",".","."]
   ,["6",".",".","1","9","5",".",".","."]
   ,[".","9","8",".",".",".",".","6","."]
   ,["8",".",".",".","6",".",".",".","3"]
   ,["4",".",".","8",".","3",".",".","1"]
   ,["7",".",".",".","2",".",".",".","6"]
   ,[".","6",".",".",".",".","2","8","."]
   ,[".",".",".","4","1","9",".",".","5"]
   ,[".",".",".",".","8",".",".","7","9"]]

   output: true
```

```
board =
   [["8","3",".",".","7",".",".",".","."]
   ,["6",".",".","1","9","5",".",".","."]
   ,[".","9","8",".",".",".",".","6","."]
   ,["8",".",".",".","6",".",".",".","3"]
   ,["4",".",".","8",".","3",".",".","1"]
   ,["7",".",".",".","2",".",".",".","6"]
   ,[".","6",".",".",".",".","2","8","."]
   ,[".",".",".","4","1","9",".",".","5"]
   ,[".",".",".",".","8",".",".","7","9"]]

   output: false
```

</details>

## O que você deve entregar para este desafio

- Código organizado e legível;
- A linguagem a sua escolha, mas preferencialmente, utilize Javascript;
- Adição de testes para cada desafio é bônus;
