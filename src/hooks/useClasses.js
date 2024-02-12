import { useState } from 'react';

export function useClasses(initial) {
  const [classes, setClasses] = useState(initial);

  function addClass(className, append = true) {
    if (append) {
      setClasses(`${classes} ${className}`);
    } else {
      setClasses(`${initial} ${className}`);
    }
  }

  function removeClass(className) {
    setClasses(classes.replace(className, '').trim());
  }

  return [classes, addClass, removeClass, setClasses];
}
