// Mude a cor da tela para azul e depois para vermelho a cada 2s.
const body = document.querySelector('body');

setInterval(() => {
  //body.style.backgroundColor = 'blue';
}, 2000)

setInterval(() => {
  //body.style.backgroundColor = 'red';
}, 4000)

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const cronometro = document.querySelector('.cronometro');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');

let ct = 1;
let tempo;

function iniciarCronometro() {
  tempo = setInterval(() => {
    cronometro.innerText = ct++;
  }, 1000);
  iniciar.setAttribute('disabled', '');
}

function pausarCronometro() {
  clearInterval(tempo);
  iniciar.removeAttribute('disabled')
}

function resetarCronometro() {
  cronometro.innerText = 0;
  ct = 1;
}

iniciar.addEventListener('click', iniciarCronometro);
pausar.addEventListener('click', pausarCronometro);
pausar.addEventListener('dblclick', resetarCronometro);