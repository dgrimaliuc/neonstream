import { MOVIE, TV } from '../data/constants';

export function validateContentType(mediaType) {
  if (mediaType !== MOVIE && mediaType !== TV) {
    throw new Error(
      `Invalid media type: ${mediaType}. Must be either ${MOVIE} or ${TV}`
    );
  }
}
