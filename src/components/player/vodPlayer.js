import styles from './player.module.css';
import Player from './player';
import { useLoaderData } from 'react-router-dom';
import useStreams from '../../hooks/useStreams';
import { Translations } from './translations';

export default function VODPlayer() {
  const data = useLoaderData();

  const { audioSources, loading, stream, error, selectedStream, setSelectedStream } =
    useStreams(data);

  return (
    <>
      <div className={styles['player-wrapper']}>
        <div className={styles['player-header']}>
          <Translations
            selected={selectedStream}
            sources={audioSources?.rezka2?.extract?.voice}
            onClick={setSelectedStream}
          />
        </div>
        <div className={styles['player-container']}>
          {error && <div className={styles['player-error']}>{error}</div>}

          {!error && !loading && <Player controls url={stream?.stream || stream} />}
        </div>
      </div>
    </>
  );
}
