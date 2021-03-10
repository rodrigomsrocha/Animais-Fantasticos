import outsideClick from "./outside-click.js";

export default function initDropdown() {
  function handleClick(e) {
    e.preventDefault();
    this.classList.add("ativo");
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("ativo");
    });
  }

  const dropdownMenus = document.querySelectorAll("[data-dropdown]");
  dropdownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((event) => {
      menu.addEventListener(event, handleClick);
    });
  });
}
