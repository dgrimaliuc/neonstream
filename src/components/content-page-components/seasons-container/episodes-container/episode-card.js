import styles from './episodes-container.module.css';

import smallWideImg1 from '../../../../assets/One Piece/episodes/one-peace-1-2.jpeg';

export default function EpisodeCard() {
  return (
    <div className={styles.episode}>
      <a href='/'>
        <div className={styles.poster}>
          <picture>
            <img src={smallWideImg1} alt='Episode' />
          </picture>
        </div>
      </a>
      <div>
        <div className={styles['episode-header']}>
          <a href='/' className='text-decoration-off'>
            <h5>S1 E1</h5>
            <span className={styles['episode-title']}>
              I'm Luffy! The Man Who's Gonna Be King of the Pirates!
            </span>
          </a>
        </div>
        <p className={styles['episode-description']}>
          Countless souls have been lured along the Grand Line in pursuit of the
          legendary One Piece! Luffy D. Monkey is a young pirate with a dream:
          to prove the legend true and be king of them all!
        </p>
      </div>
    </div>
  );
}
