import { useEffect } from 'react';
import { useClasses } from '../../hooks';
import styles from './player.module.css';

export default function Translation({ selected, index, label, onClick }) {
  const {
    c: classes,
    addClass,
    setInitial,
  } = useClasses(styles['translation']);

  useEffect(() => {
    if (index === +selected) {
      addClass(styles.selected);
    } else {
      setInitial();
    }
  }, [index, selected, addClass, setInitial]);

  function onClickHandler(e) {
    onClick(e.target.attributes.getNamedItem('value').value);
  }

  return (
    <div className={classes} value={index} onClick={onClickHandler}>
      {label}
    </div>
  );
}
