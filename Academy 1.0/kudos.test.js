const kudos = require('./kudos');

test('test getKudosForUser', () => {
  expect(kudos.getKudosForUser(30)).toEqual(['GOOD', 'NICE']);
  expect(kudos.getKudosForUser(40)).toEqual(['GOOD', 'GOOD']);
  expect(kudos.getKudosForUser(100)).toEqual(['SUPER']);
});

test('test getKudosValueMessageForUser', () => {
  expect(kudos.getKudosValueMessageForUser(kudos.getKudosForUser(30)))
    .toEqual('Você recebeu treze reais em retorno aos kudos GOOD, NICE!');
});