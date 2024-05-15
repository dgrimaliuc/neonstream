import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function getQueryParams() {
  if (!window.location.search) return null;
  return new URLSearchParams(window.location.search);
}

export function useQueryParams() {
  const location = useLocation();
  const [queryParams, setQueryParams] = useState(location.search);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = {};
    for (const [key, value] of params) {
      query[key] = value;
    }

    setQueryParams(Object.keys(query).length === 0 ? null : query);
  }, [location.search]);
  return queryParams;
}
