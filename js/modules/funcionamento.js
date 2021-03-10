export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasDaSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAtual = new Date();
  const diaAtual = dataAtual.getDay();
  const horaAtual = dataAtual.getHours();

  const semanaAberto = diasDaSemana.includes(diaAtual);
  const horarioAberto =
    horaAtual >= horarioSemana[0] && horaAtual < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto")
  }
}
