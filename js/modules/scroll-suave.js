export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    "[data-js='menu'] a[href^='#'"
  );

  function scrollToSection(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });

    // **alternativo
    /*
      ?const topo = section.offsetTop;
      ?scrollTo({
      ?  top: topo,
      ?  behavior: "smooth",
      ?});
    */
  }

  if (linksInternos.length) {
    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }
}
