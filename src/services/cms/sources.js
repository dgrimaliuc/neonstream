import config from '../../config';

export async function getSources({ content, translation }) {
  const url = config.api + '/cms/sources';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      content,
      translation,
    }),
  });
  return await response.json();
}
