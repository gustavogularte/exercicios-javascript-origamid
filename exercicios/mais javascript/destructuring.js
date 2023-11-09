// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);
const { backgroundColor, color, margin } = btnStyles;

// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';
cursoAtivo = 'teste';
cursoInativo = 'teste 2';

// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo',
};

const { bobCor: cor } = cachorro;
//resposta: const { cor: bobCor } = cachorro;