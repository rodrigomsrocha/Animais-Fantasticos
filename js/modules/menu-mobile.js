import outsideClick from "./outside-click.js";

export default class initMenuMobile {
  constructor(button, menu, activeClass, events) {
    this.menuBtn = document.querySelector(button);
    this.menuList = document.querySelector(menu);
    this.activeClass = activeClass;
    // define touchstart e click como padrão
    this.events = events || ["touchstart", "click"];
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuBtn.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuBtn.classList.remove(this.activeClass);
    });
  }

  addMenuEvents() {
    this.events.forEach((evento) =>
      this.menuBtn.addEventListener(evento, this.openMenu)
    );
  }

  init() {
    if (this.menuBtn && this.menuList) {
      this.addMenuEvents();
    }
    return this;
  }
}
