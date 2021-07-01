// Conversão de kudos para pontos
const KUDOS_TO_POINTS = [
  { name: 'OK', value: 5 },
  { name: 'NICE', value: 10 },
  { name: 'GOOD', value: 20 },
  { name: 'GREAT', value: 50 },
  { name: 'SUPER', value: 100 },
];

// Conversão de kudos para reais
const KUDOS_TO_REAL = [
  { name: 'OK', value: 2 },
  { name: 'NICE', value: 5 },
  { name: 'GOOD', value: 8 },
  { name: 'GREAT', value: 15 },
  { name: 'SUPER', value: 25 },
];

/* 
  Recebe: um int representando o número de pontos do usuário
  Retorna: um array contendo os kudos. Ex.: ['OK', 'GOOD'] 
*/
function getKudosForUser(points) {
  let kudos = []

  // Logo na proxima linha de código no método .map(), é feito um  reverse para começar a pontuar. Acontece que esse reverse acontece na const KUDOS_TO_POINTS e para resolver isso, implementei a linha abaixo
  if (KUDOS_TO_POINTS[0].value !== 5) KUDOS_TO_POINTS.reverse()

  KUDOS_TO_POINTS.reverse().map(data => {
    const { name, value } = data

    if (value <= points) {
      let module = points % value

      for (let i = 0; i < (points - module) / value; i++) {
        kudos.push(name)
      }
      points = module

      return
    }

    return
  })

  return kudos
}

/* 
  Recebe: Recebe um array contendo os nomes dos kudos de um usuário. Ex.: ['OK', 'GOOD']
  Retorna: a mensagem padrão com o valor em reais dos kudos por extenso. Ex.: Parabéns, você ganhou vinte e cinco reais
*/
function getKudosValueMessageForUser(kudos) {
  let real = 0

  kudos.map(kudo => {

    KUDOS_TO_REAL.map(data => {
      const { name, value } = data

      if (name === kudo) {
        return real += value
      }

      return
    })
  })

  const dictionary = {
    1: ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'],
    10: [null, 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'],
    2: [null, 'dez', 'vite', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa', 'cem'],
    3: ['cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos', 'mil']
  }

  console.log(real)
  const parts = real.toString().split('')
  let sentence = ''

  for (let i = 0; i < real.toString().length; i++) {
    console.log(parts)
    const partInt = parseInt(parts[0])
    const nextInt = parseInt(parts[1])

    const dictionary = {
      1: [
        ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'], 
        ['onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove']
      ],
      2: ['dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'],
      3: ['cem', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos']
    }

    switch (parts.length) {
      case 1:
        sentence += dictionary[1][0][partInt]
        break
      case 2:
        if (partInt === 1) {
          if (nextInt === 0) {
            sentence += dictionary[2][0][partInt]
          } else {
            sentence += dictionary[1][1][nextInt - 1]
          }

          parts.shift()
          i++
        } else if (nextInt === 0) {
          sentence += dictionary[2][partInt - 1]

          parts.shift()
          i++
        } else {
          sentence += dictionary[2][partInt - 1] + ' e '
        }
        break
        // ... continue to 1 milion
        default:
          break;
    }

    parts.shift()
  }

  console.log(sentence)

  return(`Você recebeu ${sentence} reais em retorno aos kudos ${kudos.join(', ')}!`)
}
getKudosValueMessageForUser(['SUPER'])

module.exports = {
  getKudosForUser,
  getKudosValueMessageForUser,
};
