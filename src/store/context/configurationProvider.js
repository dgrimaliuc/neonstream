import { createContext, useContext, useEffect, useState } from 'react';
import { mdb } from '../../services/content';
import { STORAGE_CONFIG_KEY } from '../../data/constants';

const TMDBConfig = createContext({
  images: {
    baseUrl: '',
    backdrop_sizes: [],
    logo_sizes: [],
    poster_sizes: [],
    profile_sizes: [],
    still_sizes: [],
  },
  change_keys: [],
  getConfig: () => {},
  setConfig: () => {},
});

export default TMDBConfig;

export function TMDBConfigProvider({ children }) {
  const [tmdbConfig, setTmdbConfig] = useState({});

  function setConfig(config) {
    localStorage.setItem(STORAGE_CONFIG_KEY, JSON.stringify(config));
    setTmdbConfig(config);
  }

  function getConfig() {
    let config = localStorage.getItem(STORAGE_CONFIG_KEY);
    return JSON.parse(config);
  }

  useEffect(() => {
    const fetch = async () => {
      let config = getConfig();
      if (!config) {
        config = await mdb.configuration();
        setConfig(config);
      }
      window.tmdbConfig = config;
    };
    fetch();
  }, []);

  return (
    <TMDBConfig.Provider value={tmdbConfig}>{children}</TMDBConfig.Provider>
  );
}

export const useTMDBConfig = () => {
  const { tmdbConfig } = useContext(TMDBConfig);
  return { tmdbConfig };
};
