const config = JSON.parse(localStorage.getItem('tmdbConfig')) || {
  images: {
    base_url: 'https://image.tmdb.org/t/p/',
    secure_base_url: 'https://image.tmdb.org/t/p/',
    backdrop_sizes: ['w300', 'w780', 'w1280', 'original'],
    logo_sizes: ['w45', 'w92', 'w154', 'w185', 'w300', 'w500', 'original'],
    poster_sizes: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'],
    profile_sizes: ['w45', 'w185', 'h632', 'original'],
    still_sizes: ['w92', 'w185', 'w300', 'original'],
  },
};
const { images } = config;
const { secure_base_url, poster_sizes, backdrop_sizes } = images;

export function getPoster(path, size = 'default') {
  let posterSize = getOrDefault(size, poster_sizes, '/w220_and_h330_face');
  return `${secure_base_url}${posterSize}${path}`;
}

export function getBackdrop(path, size = 'default') {
  let backdropSize = getOrDefault(
    size,
    backdrop_sizes,
    '/w710_and_h400_multi_faces'
  );
  return `${secure_base_url}${backdropSize}${path}`;
}

function getOrDefault(size, source, defaultVal) {
  if (size === 'default') {
    return defaultVal;
  }
  return `/${source[size]}`;
}
