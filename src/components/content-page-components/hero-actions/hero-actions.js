import { Tooltip } from '../../tooltip';
import styles from './hero-actions.module.css';
import { TrailerButton } from './trailer';

// Rework
const backgroundColor = { backgroundColor: '#354651' };

export default function HeroActions({ trailer }) {
  return (
    <div className={styles['hero-actions']}>
      <Tooltip text='Add to List' {...backgroundColor}>
        <button className={styles['rounded-button']}>
          <span className='fa-plus'></span>
        </button>
      </Tooltip>
      <Tooltip text='Mark as Watched' {...backgroundColor}>
        <button className={styles['rounded-button']}>
          <span className='fa-check'></span>
        </button>
      </Tooltip>
      <Tooltip text='Download' {...backgroundColor}>
        <button className={styles['rounded-button']}>
          <span className='fa-download'></span>
        </button>
      </Tooltip>
      {trailer && <TrailerButton trailer={trailer} />}
    </div>
  );
}
