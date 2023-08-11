// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
//console.log(var, marca, portas);
//porque var não existe e marca e portas estão dentro de um objeto

// Como corrigir o erro abaixo?

//trazendo o const dois para fora da função

// O que fazer para total retornar 500?
var numero = 50;

for(var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
//mudando a variável numero do loop de var para let