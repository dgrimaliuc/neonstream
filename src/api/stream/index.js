import { Rezka2 } from './providers/rezka2';

export const sources = async object => {
  const rezka2 = new Rezka2(object);
  return {
    rezka2,
  };
};

export * from './utils';
export * from './providers/rezka2';
