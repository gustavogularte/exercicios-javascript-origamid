class Countdown {
  constructor(dataFutura) {
    this.dataFutura = dataFutura;
  }

  get _dataAtual() {
    return new Date();
  }

  get _dataFutura() {
    return new Date(this.dataFutura);
  }

  get _dataDiferenca() {
    return this._dataFutura - this._dataAtual;
  }

  get dias() {
    return Math.floor(this._dataDiferenca / (24 * 60 * 60 * 1000));
  }

  get horas() {
    return Math.floor(this._dataDiferenca / (60 * 60 * 1000));
  }

  get minutos() {
    return Math.floor(this._dataDiferenca / (60 * 1000));
  }

  get segundos() {
    return Math.floor(this._dataDiferenca / 1000);
  }

  get total() {
    const dias = this.dias;
    const horas = this.horas % 24;
    const minutos = this.minutos % 60;
    const segundos = this.segundos % 60;
    return {
      dias,
      horas,
      minutos,
      segundos,
      frase: `faltam ${dias} dias ${horas} horas ${minutos} minutos e ${segundos} segundos para o natal`,
    };
  }
}

const diasParaONatal = new Countdown('24 december 2023 23:59:59');
const h1 = document.querySelector('h1');
setInterval(() => {
  h1.innerText = diasParaONatal.total.frase;
}, 1000);
