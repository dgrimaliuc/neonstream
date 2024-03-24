import styles from './hero-content.module.css';
import { getPoster } from '../../../utils/images';

export default function HeroPoster({ picture }) {
  return (
    <div className={styles['hero-poster']}>
      <picture>
        <img
          className={styles['hero-image']}
          src={getPoster(picture, 5)}
          alt='#Poster of the movie or series#'
        />
      </picture>
    </div>
  );
}
