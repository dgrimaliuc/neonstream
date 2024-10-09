import config from '../../config';

export async function getTranslations(data) {
  const url = config.api + '/cms/translations';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return await response.json();
}
