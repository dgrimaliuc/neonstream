import config from '../../config';

export async function getTranslations(data) {
  const url = config.api + '/cms/translations';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: data.id,
      title: data.title,
      original_title: data.original_title,
      imdb_id: data.imdb_id,
      origin_country: data.origin_country,
      release_date: data.release_date,
      translations: data.translations,
      media_type: data.media_type,
      media_sub_type: data.media_sub_type,
      downloadIfMissing: true,
    }),
  });

  return await response.json();
}
