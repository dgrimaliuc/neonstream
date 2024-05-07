export function getTranslations(data, lang = 'RU') {
  if (!data) return;
  const tr = data.translations.translations;
  if (!tr) return;
  return tr.find(t => t.iso_3166_1 === lang.toUpperCase());
}
