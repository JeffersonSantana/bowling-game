//https://www.bowlinggenius.com/

const { resultadoDeUmFrame } = require('../application/bowling-game');

test('Quero chamar um metodo passando uma jogada e receber o resultado', () => {
  const result = resultadoDeUmFrame(1,2);
  expect(result).toBe(3);
});

test('Deve passar no máximo 10 frames de jogos', () => {
  let result = 0;

  result += resultadoDeUmFrame(0,10);
  result += resultadoDeUmFrame(0,0);
  result += resultadoDeUmFrame(0,0);
  result += resultadoDeUmFrame(0,0);
  result += resultadoDeUmFrame(0,0);
  result += resultadoDeUmFrame(0,0);
  result += resultadoDeUmFrame(0,0);
  result += resultadoDeUmFrame(0,0);
  result += resultadoDeUmFrame(0,0);
  result += resultadoDeUmFrame(0,0);

  expect(result).toEqual(10);
});

test('Deve passar no máximo 10 frames de jogos com stryker no primeiro', () => {
  let result = 0;

  result += resultadoDeUmFrame(1,1);
  result += resultadoDeUmFrame(1,1);
  result += resultadoDeUmFrame(1,1);
  result += resultadoDeUmFrame(1,1);
  result += resultadoDeUmFrame(1,1);
  result += resultadoDeUmFrame(1,1);
  result += resultadoDeUmFrame(1,1);
  result += resultadoDeUmFrame(1,1);
  result += resultadoDeUmFrame(1,1);
  result += resultadoDeUmFrame(1,1);

  expect(result).toEqual(20);
});

test('Só spare', () => {
  let result = 0;

  result += resultadoDeUmFrame(5,5);
  result += resultadoDeUmFrame(5,5);
  result += resultadoDeUmFrame(5,5);
  result += resultadoDeUmFrame(5,5);
  result += resultadoDeUmFrame(5,5);
  result += resultadoDeUmFrame(5,5);
  result += resultadoDeUmFrame(5,5);
  result += resultadoDeUmFrame(5,5);
  result += resultadoDeUmFrame(5,5);
  result += resultadoDeUmFrame(5,5,5);

  expect(result).toEqual(20);
});

// Devo passar até 10 jogadas

// Passar 11 jogadas ou mais deve retornar game concluido

// Se eu passar 10 na primeira tentativa, desconsiderar a 2 tentativa e flagar de stryker

// Quando fizer um stryker a variavel de 'pontos' será contabilizada na próxima rodada
