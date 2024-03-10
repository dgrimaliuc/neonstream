import styles from './episodes-container.module.css';

export default function EpisodeLoadButton({ onClick, isEnd, loadIndex }) {
  if (isEnd) return null;

  return (
    <button onClick={onClick} className={styles['load-more-button']}>
      {loadIndex > 3 ? 'Show All' : 'Show More'}
    </button>
  );
}
