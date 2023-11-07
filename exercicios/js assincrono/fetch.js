// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const btn = document.querySelector('button');
const inputCep = document.querySelector('#cep');
const resultado = document.querySelector('.resultado');

function buscarCep(e) {
  e.preventDefault();
  console.log('tese');
  const cep = inputCep.value;
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.text())
    .then((cep) => (resultado.innerText = cep));
}

btn.addEventListener('click', buscarCep);

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin em reais.
// atualize este valor a cada 30s
const btc = document.querySelector('.btc');
function precoBTC() {
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((json) => {
      btc.innerText = json.BRL.buy;
    });
}
//setInterval(precoBTC, 30000);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const proxima = document.querySelector('.proxima');
const piada = document.querySelector('h3');

function proximaPiada() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())
    .then((json) => piada.innerText = json.value);
}

proxima.addEventListener('click', proximaPiada);
