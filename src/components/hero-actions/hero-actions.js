import styles from './hero-actions.module.css';

export default function HeroActions() {
  return (
    <div className={styles['hero-actions']}>
      <div>
        <button className={styles['rounded-button']} title='See later'>
          <span className='fa-plus'></span>
        </button>
        <p className={styles['action-label']}>To See</p>
      </div>
      <div>
        <button className={styles['rounded-button']} title='See later'>
          <span className='fa-check'></span>
        </button>
        <p className={styles['action-label']}>Seen It</p>
      </div>
      <div>
        <button className={styles['rounded-button']} title='See later'>
          <span className='fa-download'></span>
        </button>
        <p className={styles['action-label']}>Save</p>
      </div>
    </div>
  );
}
