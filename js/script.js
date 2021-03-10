import ScrollSuave from "./modules/scroll-suave.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tab-nav.js";
import initModal from "./modules/init-modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdown from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initAnimation from "./modules/scroll-animacao.js";

const scrollSuave = new ScrollSuave("[data-js='menu-lista'] a[href^='#']");
scrollSuave.init();

initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdown();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimation();
