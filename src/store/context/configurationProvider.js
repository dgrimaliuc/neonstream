import { createContext, useEffect, useState } from 'react';
import { mdb } from '../../services/content';

const TMDBContext = createContext({
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

export default TMDBContext;

export function TMDBContextProvider({ children }) {
  const [tmdbConfig, setTmdbConfig] = useState(null);

  function setConfig(config) {
    localStorage.setItem('tmdbConfig', JSON.stringify(config));
    setTmdbConfig(config);
  }

  function getConfig() {
    const config = localStorage.getItem('tmdbConfig');
    return JSON.parse(config);
  }

  useEffect(() => {
    const fetchConfigurations = async () => {
      let config = getConfig();
      if (!config) {
        config = await mdb.configuration();
        setConfig(config);
      }
    };
    fetchConfigurations();
  }, []);

  return (
    <TMDBContext.Provider value={(tmdbConfig, setConfig)}>
      {children}
    </TMDBContext.Provider>
  );
}
