import { mdb } from './index';

const discoverProps = {
  with_original_language: 'en',
  language: 'en-US',
  include_adult: false,
  timeout: 500,
  page: 1,
};

export async function searchMulti(customProps) {
  return await mdb.searchMulti({ ...discoverProps, ...customProps });
}
