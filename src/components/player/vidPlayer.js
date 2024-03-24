// import ReactPlayer from 'react-player';
import styles from './player.module.css';

export default function VIDPlayer({ path }) {
  const url = `https://vidsrc.to/embed/${path}`;
  return (
    <div className={styles['player-container']}>
      <iframe
        title='vidsrc-player'
        src={url}
        width='100%'
        height='100%'
        allowFullScreen
        loading='lazy'
      ></iframe>
    </div>
  );
}
