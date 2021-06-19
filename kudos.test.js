const kudos = require('./kudos');

test('test getKudosForUser', () => {
  expect(kudos.getKudosForUser(30)).toEqual(['OK', 'NICE']);
  expect(kudos.getKudosForUser(50)).toEqual(['GOOD']);
});

test('test getKudosValueMessageForUser', () => {
  expect(kudos.getKudosValueMessageForUser(30)).toEqual('trinta');
});
