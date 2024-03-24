import { useEffect, useMemo } from 'react';
import classes from './modal.module.css';
import { createPortal } from 'react-dom';
import { useEventListener } from '../../hooks/useEventListener';
import { ESCAPE } from '../../data/constants';

export default function Modal({ children, onOutsideClick, show, className }) {
  const listener = useMemo(
    () => (event) => {
      if (show) {
        var key = event.key || event.keyCode;
        if (key === ESCAPE) {
          onOutsideClick();
        }
      }
    },
    [onOutsideClick, show]
  );

  useEventListener('keydown', listener, [show]);
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show]);

  if (!show) return null;

  return (
    <>
      {createPortal(
        <>
          <div className={classes.backdrop} onClick={onOutsideClick} />
          <div className={className || classes.modal}>{children}</div>
        </>,
        document.getElementById('modal')
      )}
    </>
  );
}
