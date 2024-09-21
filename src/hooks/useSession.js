import { useEffect } from 'react';
import config from '../config';

export function useSession() {
  useEffect(() => {
    const sessionExists = document.cookie.split('; ').find(row => row.startsWith('sessionExists='));
    // This fetch request automatically sets the sessionId cookie
    if (!sessionExists) {
      fetch(`${config.api}/session`, {
        method: 'GET',
        credentials: 'include',
      });
    }
  }, []);
}
