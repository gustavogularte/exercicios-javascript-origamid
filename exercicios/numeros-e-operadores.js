// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
// o resultado é 35

// Crie duas expressões que retornem NaN
let nam1 = 19 - '20 unidades';
let nam2 = + '20 kg';

// Somar a string '200' com o número 50 e retornar 250
let somar = +'200' + 50;

// Incremente o número 5 e retorne o seu valor incrementado
let n = 5;
++n;
console.log(n);

// Como dividir o peso por 2?
var numero = +'80' / 2; //fazendo a divisão antes de concatenar
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso; // NaN (Not a Number)
console.log(pesoPorDois)
