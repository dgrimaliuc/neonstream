import { useEffect, useState } from 'react';
import styles from './flash-message.module.css';
import { useClasses } from '../../hooks/useClasses';
import { useTimer } from '../../hooks/useTimer';

export default function FlashMessage({
  timeout = 4000,
  message = 'Flash message',
}) {
  const [isVisibile, setIsVisible] = useState(true);
  const [classes, addClass] = useClasses(styles.flash_message_wrapper);
  const [clearTimer, callback] = useTimer(() => {
    setIsVisible(false);
  }, timeout);

  useEffect(() => {
    const classToAdd = isVisibile ? styles.visible : styles.hidden;
    addClass(classToAdd, false);
  }, [addClass, isVisibile]);

  useEffect(() => {
    return () => clearTimer();
  }, [clearTimer]);

  return (
    <div className={classes}>
      <p className={styles.flash_message}>{message}</p>
      <div className={styles.close_container} onClick={callback}>
        <i className='fa-close' />
      </div>
    </div>
  );
}
