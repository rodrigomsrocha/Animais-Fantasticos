export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");
  function criarTooltip(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  const onMouseMove = {
    handleEvent(e) {
      this.tooltipBox.style.top = `${e.pageY}px`;
      this.tooltipBox.style.left = `${e.pageX + 20}px`;
    },
  };

  const onMouseLeave = {
    tooltipBox: "",
    element: "",
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  function onMouseOver() {
    const tooltipBox = criarTooltip(this);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }
  tooltips.forEach((tooltip) => {
    tooltip.addEventListener("mouseover", onMouseOver);
  });
}
