export function smoothScrollTo(selector, options) {
  getElement(selector).scrollIntoView({ behavior: 'smooth', block: 'end', ...options });
}

export function smoothScrollToRef(ref, options) {
  if (ref.current === null) return;
  ref.current.scrollIntoView({ behavior: 'smooth', block: 'start', ...options });
}

function getElement({ id, css }) {
  if (id) {
    return document.getElementById(id);
  } else if (css) {
    return document.querySelector(css);
  }
}
