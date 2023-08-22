// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.header-menu');
const copy = document.querySelector('.footer');

const menuClone = menu.cloneNode(true);
copy.appendChild(menuClone);

// Selecione o primeiro DT da dl de Faq
const primeiroDT = document.querySelector('.faq dt');

// Selecione o DD referente ao primeiro DT
const primeiroDD = primeiroDT.nextElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('#faq');
const animais = document.querySelector('#animais');

faq.innerHTML = animais.innerHTML