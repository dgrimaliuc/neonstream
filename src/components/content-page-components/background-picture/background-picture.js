import styles from './background-picture.module.css';
import { getBackdrop } from '../../../utils/images';

export default function BackgroundPicture({ picture }) {
  return (
    <picture className={styles['back-picture']}>
      <div className={styles['img-gradient']} />
      {picture && (
        <img
          className={styles['header-image']}
          src={getBackdrop(picture, 3)}
          alt='Background'
        />
      )}
    </picture>
  );
}
