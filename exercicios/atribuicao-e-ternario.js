// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
let scroll = 1000;
scroll += 500

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
let possuiCarro = true;
let possuiCasa = true;
let darCredito;
if (possuiCarro && possuiCasa) {
  darCredito = true;
}
//maneira melhor
darCredito = (possuiCarro && possuiCasa);
