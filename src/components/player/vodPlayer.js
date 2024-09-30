import styles from './player.module.css';
import Player from './player';
import { useLoaderData } from 'react-router-dom';
import { Translations } from './translations';
import { useRef, memo } from 'react';
import { useHistory, usePlayerControls } from '../../hooks';
import useTranslations from '../../hooks/useTranslations';
import VODPlayerPlaceholder from './placeholder-vod-player';
import useStream from '../../hooks/useStream';
import usePlayerState from '../../hooks/usePlayerState';

const VODPlayer = memo(() => {
  const content = useLoaderData();
  const ref = useRef(null);

  const { savePlayhead, removePlayhead, getPlayhead, saveCurrentTime } = useHistory({
    ref,
  });

  const { isTranslationsLoading, translationsData, translationsError, selected, setSelected } =
    useTranslations(content);

  const { isPlaying, setIsPlaying, handlePlay, handlePause, isReady, setIsReady } =
    usePlayerState(saveCurrentTime);

  const { onSeek, handleReady, saveOnProgress } = usePlayerControls({
    content,
    selected,
    isReady,
    isPlaying,
    setIsPlaying,
    setIsReady,
    getPlayhead,
    savePlayhead,
  });

  const { streamData } = useStream(
    content,
    translationsData?.translations ? translationsData?.translations[selected] : null,
  );

  if (isTranslationsLoading || !translationsData) {
    return <VODPlayerPlaceholder />;
  }

  return (
    <>
      <div className={styles['player-wrapper']}>
        <div className={styles['player-header']}>
          <Translations
            translations={translationsData.translations}
            selected={selected}
            onClick={setSelected}
          />
        </div>
        <div className={styles['player-container']}>
          {translationsError && <div className={styles['player-error']}>{translationsError}</div>}
          {
            <Player
              ref={ref}
              autoPlay={true}
              controls
              url={streamData?.qualitys['1080p']}
              playing={isPlaying}
              onPause={handlePause}
              progressInterval={20000}
              onProgress={saveOnProgress}
              onPlay={handlePlay}
              onStart={handlePlay}
              onEnded={removePlayhead}
              onSeek={onSeek}
              onReady={handleReady}
            />
          }
        </div>
      </div>
    </>
  );
});

export default VODPlayer;
