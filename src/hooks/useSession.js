import { useEffect, useState } from 'react';
import config from '../config';

export function useSession() {
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    const sessionExists = document.cookie.split('; ').find(row => row.startsWith('sessionExists='));
    // This fetch request automatically sets the sessionId cookie
    if (!sessionExists) {
      fetch(`${config.api}/session`, {
        method: 'GET',
        credentials: 'include',
      })
        .then(response => response.json())
        .then(data => {
          setSessionId(data.sessionId);
        });
    } else {
      setSessionId(sessionId.split('=')[1]);
    }
  }, [sessionId]);

  return sessionId;
}
