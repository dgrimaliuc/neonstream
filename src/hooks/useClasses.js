import { useState } from 'react';

export function useClasses(...initial) {
  const [classes, setClasses] = useState(initialClasses());

  function addClass(className, append = true) {
    if (append) {
      setClasses(`${classes} ${className}`);
    } else {
      setClasses(`${initial} ${className}`);
    }
  }

  function initialClasses() {
    return initial.join(' ');
  }
  function removeClass(className) {
    setClasses(classes.replace(className, '').trim());
  }

  function setInitial() {
    setClasses(initialClasses());
  }

  return { classes, addClass, setInitial, removeClass, setClasses };
}
