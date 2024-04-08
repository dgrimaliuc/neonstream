import { STORAGE_CONFIG_KEY } from '../data/constants';

const config = JSON.parse(localStorage.getItem(STORAGE_CONFIG_KEY)) || {
  images: {
    base_url: 'https://image.tmdb.org/t/p/',
    secure_base_url: 'https://image.tmdb.org/t/p/',
    backdrop_sizes: [],
    logo_sizes: [],
    poster_sizes: [],
    profile_sizes: [],
    still_sizes: [],
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
  if (source[size] === undefined) {
    return 'original';
  }
  return `/${source[size]}`;
}

export function getFilePathOrNull(array, index) {
  try {
    return array[index].file_path;
  } catch (e) {
    return null;
  }
}

export function getFilePathReverseOrNull(array, index) {
  try {
    return getFilePathOrNull(array, array.length - index - 1);
  } catch (e) {
    return null;
  }
}
