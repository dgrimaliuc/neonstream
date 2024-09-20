export function smoothScrollTo(selector, options) {
  getElement(selector).scrollIntoView({ behavior: 'smooth', block: 'end', ...options });
}

function getElement({ id, css }) {
  if (id) {
    return document.getElementById(id);
  } else if (css) {
    return document.querySelector(css);
  }
}
