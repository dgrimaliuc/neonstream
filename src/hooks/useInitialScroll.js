import { useEffect } from 'react';
import { printLog, sleep } from '../utils';

export function useInitialScroll({ timeout = 100 }) {
  useEffect(() => {
    printLog('useInitialScroll', 'scrolling to top');
    sleep(timeout).then(() => window.scrollTo(0, 0));
  }, [timeout]);
}
