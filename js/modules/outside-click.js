export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  function handleOutsideClick(e) {
    if (!element.contains(e.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach((event) => {
      setTimeout(() => html.addEventListener(event, handleOutsideClick));
    });
    element.setAttribute(outside, "");
  }
}
