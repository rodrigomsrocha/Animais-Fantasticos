import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/init-modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropdown from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";
import ScrollAnima from "./modules/scroll-anima.js";

const scrollSuave = new ScrollSuave("[data-js='menu-lista'] a[href^='#']");
scrollSuave.init();

const accordion = new Accordion("[data-js='accordion'] dt");
accordion.init();

const tabNav = new TabNav(
  "[data-js='tabmenu'] li",
  "[data-js='tabcontent'] section"
);
tabNav.init();

const modal = new Modal(
  "[data-modal='abrir']",
  "[data-modal='fechar']",
  "[data-modal='container']"
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const scrollAnima = new ScrollAnima("[data-js='scroll']");
scrollAnima.init();

initDropdown();
initMenuMobile();
initFuncionamento();

fetchAnimais("../animais.json", ".numeros-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
