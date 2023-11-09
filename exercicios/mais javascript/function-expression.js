// Remova o erro
//priceNumber('R$ 99,99');
//const priceNumber = n => +n.replace('R$', '').replace(',', '.');
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'))

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
var teste = 'teste 1';
(function() {
  var teste = 'teste 2';
  console.log(teste)
})();
console.log(teste)

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();
active(() => console.log('teste 3'))
