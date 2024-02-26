import { MovieDb } from 'tmdb-promise';
const apiKey = '13dcd6ddc1a270f0239c5503c49237b3';
const mdb = new MovieDb(apiKey);
export { mdb };

export * from './series';
export * from './movie';
export * from './browseMultiple';
export * from './seasons';
