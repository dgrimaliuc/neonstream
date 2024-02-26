import styles from './player.module.css';
import VidsrcPlayer from './vidsrcPlayer';

export default function Player({ path, title = 'Original Audio' }) {
  return (
    <>
      <h1>{title}</h1>
      <div className={styles['player-container']}>
        <VidsrcPlayer path={path} />
      </div>
    </>
  );
}
