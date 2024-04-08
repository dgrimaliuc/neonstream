var parser = new DOMParser();

export function parseStrDoc(html, selector, getAll = false) {
  var doc = createDoc(html);
  return parseDoc(doc, selector, getAll);
}

export function parseDoc(doc, selector, getAll = false) {
  const elements = doc.querySelectorAll(selector);
  return getAll ? [...elements] : elements[0];
}

export function createDoc(html) {
  return parser.parseFromString(html, 'text/html');
}
