import styles from './player.module.css';
import Player from './player';
import { Translations } from './translations';
import { useEffect, useRef, useState } from 'react';
import { useHistory, usePlayerControls } from '../../hooks';
import useTranslations from '../../hooks/useTranslations';
import VODPlayerPlaceholder from './placeholder-vod-player';
import useStream from '../../hooks/useStream';
import usePlayerState from '../../hooks/usePlayerState';
import { getYoutubeUrl, selectMainTrailer } from '../../api';
import { TV } from '../../data/constants';

export default function VODPlayer({ content }) {
  const ref = useRef(null);

  const [trailer, setTrailer] = useState(null);

  const { savePlayhead, removePlayhead, getPlayhead, saveCurrentTime } = useHistory({
    content,
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

  const { streamIsLoading, streamData, streamError } = useStream(
    content,
    translationsData?.translations ? translationsData?.translations[selected] : null,
  );

  useEffect(() => {
    if (!streamData && content.videos) {
      const trailer = selectMainTrailer(content.videos);
      if (trailer?.key) {
        setTrailer(getYoutubeUrl(trailer.key));
      }
    }
  }, [streamData, content.videos]);

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
              url={
                !streamIsLoading && streamData && !streamError
                  ? Object.values(streamData?.qualitys)[0]
                  : content.media_type !== TV
                  ? trailer
                  : null
              }
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
}
