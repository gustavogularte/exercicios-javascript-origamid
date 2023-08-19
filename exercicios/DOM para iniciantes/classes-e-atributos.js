// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.header-menu li');
menu.forEach((item) => {
  item.classList.add('ativo');
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item) => {
  if (item !== menu[0]) {
    item.classList.remove('ativo');
  }
})

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach((img) => {
  const temAlt = img.hasAttribute('alt')
  console.log(temAlt)
})

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('.header-menu [href^="http"');
linkExterno.setAttribute('href', 'https://www.linkedin.com/in/gustavo-gularte-58742a286/');
