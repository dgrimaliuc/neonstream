import { useEffect } from 'react';
import { sleep } from '../utils';

export function useInitialScroll({ timeout = 100 }) {
  useEffect(() => {
    sleep(timeout).then(() => window.scrollTo(0, 0));
  }, [timeout]);
}
