import { useCallback, useEffect } from 'react';
import { useClasses } from '../../hooks';
import styles from './translations.module.css';

export default function Translation({ selected, index, label, onClick }) {
  const { c: classes, addClass, setInitial } = useClasses(styles['translation']);

  const isSelected = useCallback(() => index === +selected, [index, selected]);

  useEffect(() => {
    if (isSelected()) {
      addClass(styles.selected);
    } else {
      setInitial();
    }
  }, [index, selected, addClass, setInitial, isSelected]);

  function onClickHandler(e) {
    if (isSelected()) return;
    onClick(e.target.attributes.getNamedItem('value').value);
  }

  return (
    <div className={classes} value={index} onClick={onClickHandler}>
      {label}
    </div>
  );
}
