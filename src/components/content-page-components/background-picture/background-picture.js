import styles from './background-picture.module.css';
import imgWide from '../../../assets/One Piece/One Piece Wide.jpg';

export default function BackgroundPicture() {
  return (
    <div>
      <picture className={styles['back-picture']}>
        <div className={styles['img-gradient']}></div>
        <img className={styles['header-image']} src={imgWide} alt='One Peace' />
      </picture>
    </div>
  );
}
