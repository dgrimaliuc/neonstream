import styles from './background-picture.module.css';
import imgWide from '../../../assets/One Piece/One Piece Wide.jpg';
import { getBackdrop } from '../../../utils/images';

export default function BackgroundPicture({ picture }) {
  return (
    <div>
      <picture className={styles['back-picture']}>
        <div className={styles['img-gradient']} />
        <img
          className={styles['header-image']}
          src={getBackdrop(picture, 3)}
          alt='One Peace'
        />
      </picture>
    </div>
  );
}
