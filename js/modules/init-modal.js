export default class Modal {
  constructor(abrirBtn, fecharBtn, modalContainer) {
    this.abrirBtn = document.querySelector(abrirBtn);
    this.fecharBtn = document.querySelector(fecharBtn);
    this.modalContainer = document.querySelector(modalContainer);

    // trocar a referencia da função
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickFora = this.clickFora.bind(this);
  }

  // Abre ou fecha modal
  toggleModal() {
    this.modalContainer.classList.toggle("ativo");
  }

  // adiciona o evento de toggle modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fecha o modal ao clicar fora do modal
  clickFora(event) {
    if (event.target === this.modalContainer) {
      this.toggleModal();
    }
  }

  // Adiciona os eventos aos elementos do modal
  addModalEvents() {
    this.abrirBtn.addEventListener("click", this.eventToggleModal);
    this.fecharBtn.addEventListener("click", this.eventToggleModal);
    this.modalContainer.addEventListener("click", this.clickFora);
  }

  init() {
    if (this.abrirBtn && this.fecharBtn && this.modalContainer) {
      this.addModalEvents();
    }
    return this;
  }
}
