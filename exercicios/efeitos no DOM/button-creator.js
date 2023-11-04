const controles = document.querySelector('#controles');
const css = document.querySelector('.css');
const btn = document.querySelector('.btn');

const btnStyles = {
  elemento: btn,
  texto(value) {
    this.elemento.innerText = value;
  },
  backgroundColor(value) {
    this.elemento.style.backgroundColor = value;
  },
  color(value) {
    this.elemento.style.color = value;
  },
  height(value) {
    this.elemento.style.height = value + 'px';
  },
  width(value) {
    this.elemento.style.width = value + 'px';
  },
  border(value) {
    this.elemento.style.border = value;
  },
  borderRadius(value) {
    this.elemento.style.borderRadius = value + 'px';
  },
  fontFamily(value) {
    this.elemento.style.fontFamily = value;
  },
  fontSize(value) {
    this.elemento.style.fontSize = value;
  },
};

function handleChange(e) {
  const name = e.target.name;
  const value = e.target.value;

  btnStyles[name](value);
  mostrarCSS();
  salvarDados(name, value);
}

function salvarDados(name, value) {
  localStorage[name] = value;
}

function setarDados() {
  const names = Object.keys(localStorage);
  names.forEach((name) => {
    btnStyles[name](localStorage[name]);
    controles.elements[name].value = localStorage[name];
  });
  mostrarCSS();
}

setarDados();

function mostrarCSS() {
  css.innerHTML =
    '<span>' + btn.style.cssText.split('; ').join(';<span/><span>');
}

controles.addEventListener('input', handleChange);
