import styles from './background-picture.module.css';
import { getBackdrop } from '../../../utils/images';
import { useLoaderData } from 'react-router-dom';
import { Image } from 'components/lazy-image';

export default function BackgroundPicture() {
  const { backdrop_path } = useLoaderData();
  return (
    <picture className={styles['back-picture']}>
      <div className={styles['img-gradient']} />
      {backdrop_path && (
        <Image
          placeholderWidth={16}
          placeholderHeight={9}
          className={styles['header-image']}
          src={getBackdrop(backdrop_path, 3)}
          alt='Background'
          shape='none'
        />
      )}
    </picture>
  );
}
