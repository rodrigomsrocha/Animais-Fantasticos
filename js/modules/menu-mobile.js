import outsideClick from "./outside-click.js";

export default function initMenuMobile() {
  const menuBtn = document.querySelector("[data-js='menu-button']");
  const menuList = document.querySelector("[data-js='menu-lista']");
  const eventos = ["click", "touchstart"];

  function openMenu() {
    menuList.classList.add("ativo");
    menuBtn.classList.add("ativo");
    outsideClick(menuList, eventos, () => {
      menuList.classList.remove("ativo");
      menuBtn.classList.remove("ativo");
    });
  }

  if (menuBtn) {
    eventos.forEach((evento) => menuBtn.addEventListener(evento, openMenu));
  }
}
