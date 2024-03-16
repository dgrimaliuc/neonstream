import styles from './episodes-container.module.css';

export default function EpisodeLoadButton({
  onClick,
  isEnd,
  loadIndex,
  maxUserActions,
}) {
  if (isEnd) return null;

  return (
    <button onClick={onClick} className={styles['load-more-button']}>
      {loadIndex > maxUserActions ? 'Show All' : 'Show More'}
    </button>
  );
}
