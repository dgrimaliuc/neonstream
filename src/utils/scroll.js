export function smoothScrollTo(selector) {
  getElement(selector).scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function getElement({ id, css }) {
  if (id) {
    return document.getElementById(id);
  } else if (css) {
    return document.querySelector(css);
  }
}
