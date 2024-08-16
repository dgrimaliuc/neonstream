import styles from './browse-card.module.css';

export default function PlaceholderBrowseCard() {
  return (
    <div>
      <div className={`${styles['browse-card']} ${styles.placeholder}`}>
        <div className={`${styles['browse-card-body']} text-decoration-off`}>
          <div className={`${styles['browse-card-poster']} ${styles.placeholder}`} />
          <div className={styles['browse-card-info']}>
            <div className={styles.placeholder_title} />
          </div>
        </div>
      </div>
    </div>
  );
}
