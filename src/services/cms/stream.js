import config from '../../config';

export async function getStream({ content, translation }) {
  const url = config.api + '/cms/stream';
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
