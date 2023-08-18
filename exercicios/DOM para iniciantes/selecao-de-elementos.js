// Retorne no console todas as imagens do site
const imgs = document.querySelectorAll('img');
console.log(imgs);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgs2 = document.querySelectorAll('[src^="img/imagem"');
console.log(imgs2);

// Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll('[href^="#"');
console.log(linkInterno);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroh2 = document.querySelector('.animais-descricao h2');
console.log(primeiroh2);

// Selecione o último p do site
const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[--ultimoP.length]);
