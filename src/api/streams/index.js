import { getProxy } from './proxy';
import { Rezka2 } from './rezka2';

export const sources = async (object) => {
  const rezka2 = new Rezka2(object, await getProxy('rezka2'));
  return {
    rezka2,
  };
};
