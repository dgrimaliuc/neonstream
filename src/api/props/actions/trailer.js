export const TRAILER = 'Trailer';
export const TEASER = 'Teaser';
export const CLIP = 'Clip';

export function selectMainTrailer(videos) {
  let trailer =
    videos?.results?.length > 0
      ? findByType(videos, TRAILER) || findByType(videos, TEASER) || videos.results[0]
      : null;

  return trailer;
}

export function getYoutubeUrl(key) {
  return `https://www.youtube.com/watch?v=${key}`;
}

function findByType(videos, type) {
  return videos.results.find(video => video.type === type);
}

export function filterByTypes(videos, ...type) {
  const res = videos.results.filter(video => type.includes(video.type));
  return res.sort((a, b) => {
    if (a.type === TRAILER) return -1;
    if (b.type === TRAILER) return 1;
    if (a.type === TEASER) return -1;
    if (b.type === TEASER) return 1;
    if (a.type === CLIP) return -1;
    if (b.type === CLIP) return 1;
    return 0;
  });
}

export function getTrailers(videos) {
  return videos.results.filter(video => video.type === TRAILER);
}

export function getTeasers(videos) {
  return videos.results.filter(video => video.type === TEASER);
}
