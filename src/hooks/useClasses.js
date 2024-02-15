import { useState } from 'react';

export function useClasses(...initial) {
  const [classes, setClasses] = useState(initial.join(' '));

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

  function setInitial() {
    setClasses(initial.join(' '));
  }

  return { classes, addClass, setInitial, removeClass, setClasses };
}
