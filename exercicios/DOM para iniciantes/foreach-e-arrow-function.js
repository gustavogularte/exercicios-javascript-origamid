// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos)

// Mostre o texto dos parágrafos no console

// Como corrigir os erros abaixo:
/*const imgs = document.querySelectorAll('img');

imgs.forEach(item, index => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( => {
  console.log(i++);
});

imgs.forEach(() => i++);*/
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( () => {
  console.log(i++);
});

imgs.forEach(() => i++);
//colocando "item,index" entre parênteses e adicionando "()" no segundo forEach