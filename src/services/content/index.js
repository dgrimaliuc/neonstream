import { MovieDb } from 'tmdb-promise';
const authToken = atob(process.env.REACT_APP_MDB_AUTH_TOKEN);
const mdb = new MovieDb({ authToken });

export const timeout = { timeout: 1000 }; // TODO Rename to delay

export { mdb };

export * from './series';
export * from './movie';
export * from './episode';
export * from './browseMultiple';
export * from './seasons';
