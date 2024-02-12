const config = JSON.parse(localStorage.getItem('tmdbConfig'));
const { images } = config;
const { base_url, poster_sizes, backdrop_sizes } = images;

export function getPoster(path, size = 'default') {
  let posterSize = `/${poster_sizes[size]}`;
  if (size === 'default') {
    posterSize = '/w220_and_h330_face';
  }
  return `${base_url}${posterSize}${path}`;
}
export function getBackdrop(path, size = 'default') {
  let backdropSize = `/${backdrop_sizes[size]}`;
  if (size === 'default') {
    backdropSize = '/w710_and_h400_multi_faces';
  }
  return `${base_url}${backdropSize}${path}`;
}
