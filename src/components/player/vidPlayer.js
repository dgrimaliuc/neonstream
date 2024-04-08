import styles from './player.module.css';
import Player from './player';
import { useLoaderData } from 'react-router-dom';
import useStreams from '../../hooks/useStreams';
import Translations from './translations';
import { TRY_ANOTHER_SOURCE_MESSAGE } from '../../data/constants';

export default function VIDPlayer({ path }) {
  const url = `https://vidsrc.to/embed/${path}`;

  const data = useLoaderData();

  const {
    audioSources,
    loading,
    stream,
    error,
    selectedStream,
    setSelectedStream,
  } = useStreams(data);

  return (
    <>
      {path ? (
        <div className={styles['player-container']}>
          <iframe
            title='vidsrc-player'
            src={url}
            width='100%'
            height='100%'
            allowFullScreen
            loading='lazy'
          />
        </div>
      ) : (
        <div className={styles['player-wrapper']}>
          <div className={styles['player-header']}>
            <Translations
              selected={selectedStream}
              sources={audioSources?.rezka2?.extract?.voice}
              onClick={setSelectedStream}
            />
          </div>
          <div className={styles['player-container']}>
            {error && (
              <div className={styles['player-error']}>
                {TRY_ANOTHER_SOURCE_MESSAGE}
              </div>
            )}

            {!error && !loading && (
              <Player controls url={stream?.stream || stream} />
            )}
          </div>
        </div>
      )}
    </>
  );
}
