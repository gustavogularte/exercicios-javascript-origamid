// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"');

function ativarLink(event) {
  event.preventDefault();
  const link = event.target;
  linksInternos.forEach((item) => item.classList.remove('ativo'))
  link.classList.add('ativo')
}

linksInternos.forEach((link) => {
  link.addEventListener('click', ativarLink);
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const elementos = document.querySelectorAll('body');

elementos.forEach((elemento) => {
  elemento.addEventListener('click', (event) => {
    event.target.remove();
  })
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function handleKeyT({key}) {
  if (key === 't') {
    //adicionar classe com font-size aumentado no html
    document.documentElement.classList.toggle('aumentarTexto');
  }
}

window.addEventListener('keydown', handleKeyT);
