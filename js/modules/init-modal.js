export default function initModal() {
  const abrirBtn = document.querySelector("[data-modal='abrir']");
  const fecharBtn = document.querySelector("[data-modal='fechar']");
  const modalContainer = document.querySelector("[data-modal='container']");
  function toggleModal(event) {
    event.preventDefault();
    modalContainer.classList.toggle("ativo");
  }

  function clickFora(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  if (abrirBtn && fecharBtn && modalContainer) {
    abrirBtn.addEventListener("click", toggleModal);
    fecharBtn.addEventListener("click", toggleModal);
    modalContainer.addEventListener("click", clickFora);
  }
}
