import styles from './hero-content.module.css';
import { getPoster } from '../../../utils/images';
import { Image } from 'components/lazy-image';

export default function HeroPoster({ picture }) {
  return (
    <div className={styles['hero-poster']}>
      <picture>
        <Image
          className={styles['hero-image']}
          src={getPoster(picture, 5)}
          alt='#Poster of the movie or series#'
          placeholderWidth={330}
          placeholderHeight={495}
        />
      </picture>
    </div>
  );
}
