export default class initFuncionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  getFuncionamento() {
    this.diasDaSemana = this.funcionamento.dataset.semana
      .split(",")
      .map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);
  }

  getAtual() {
    this.dataAtual = new Date();
    this.diaAtual = this.dataAtual.getDay();
    this.horaAtual = this.dataAtual.getUTCHours() - 3;
  }

  isOpen() {
    const semanaAberto = this.diasDaSemana.includes(this.diaAtual);
    const horarioAberto =
      this.horaAtual >= this.horarioSemana[0] &&
      this.horaAtual < this.horarioSemana[1];
    return semanaAberto && horarioAberto;
  }

  activeOpen() {
    if (this.isOpen()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.getFuncionamento();
      this.getAtual();
      this.activeOpen();
    }
    return this;
  }
}
