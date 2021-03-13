import outsideClick from "./outside-click.js";

export default class Dropdown {
  constructor(menus, activeClass, events) {
    this.dropdownMenus = document.querySelectorAll(menus);
    this.activeClass = activeClass;
    // define touchstart e click como padrão
    this.events = events || ["touchstart", "click"];
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // Ativa o dropdown e adiciona
  // A função que observa o clique fora
  activeDropdownMenu(e) {
    e.preventDefault();
    const element = e.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // adiciona os eventos ao dropdown menu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((event) => {
        menu.addEventListener(event, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
