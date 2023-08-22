// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img');
const imgDistancia = img.offsetTop;
console.log(imgDistancia)

// Retorne a soma da largura de todas as imagens
const imgs = document.querySelectorAll('img');
let largura = 0;
imgs.forEach((img) => {
  largura += img.offsetWidth;
})
console.log(largura)

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((link) => {
  console.log(link.offsetHeight >=48 && link.offsetWidth >= 48)
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const mobile = window.matchMedia('(max-width:720px)').matches;
const menu = document.querySelector('.header-menu');
if (mobile) {
  menu.classList.add('menu-mobile');
}
