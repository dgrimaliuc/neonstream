import styles from './player.module.css';
import Player from './player';
import { useLoaderData } from 'react-router-dom';
import useStreams from '../../hooks/useStreams';
import { Translations } from './translations';
import { useCallback, useRef, useState } from 'react';
import { useHistory } from '../../hooks';
import { smoothScrollTo } from '../../utils';

export default function VODPlayer() {
  const data = useLoaderData();

  const ref = useRef(null);
  const { savePlayhead, removePlayhead, getPlayhead } = useHistory({
    ref,
  });
  const [isPLaying, setIsPlaying] = useState(false);

  const { audioSources, loading, stream, error, selectedStream, setSelectedStream } =
    useStreams(data);

  const saveOnProgress = useCallback(
    progress => {
      if (isPLaying) {
        savePlayhead(progress?.playedSeconds || progress);
      }
    },
    [isPLaying, savePlayhead],
  );

  const saveCurrentTime = useCallback(() => {
    if (ref.current) {
      savePlayhead(ref.current.getCurrentTime());
    }
  }, [savePlayhead]);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const handlePause = useCallback(() => {
    saveCurrentTime();
    setIsPlaying(false);
  }, [saveCurrentTime]);

  const onSeek = useCallback(() => {
    const id = setTimeout(() => {
      setIsPlaying(true);
    }, 500);

    return () => clearTimeout(id);
  }, []);

  const handleReady = useCallback(
    player => {
      const playhead = getPlayhead();
      if (playhead?.progress) {
        if (data?.media_type === 'movie') {
          smoothScrollTo({ id: 'player-section' });
        }
        player.seekTo(playhead?.progress);
      }
    },
    [data?.media_type, getPlayhead],
  );

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
          {!error && !loading && (
            <Player
              ref={ref}
              controls
              url={stream?.stream || stream}
              playing={isPLaying}
              onPause={handlePause}
              progressInterval={30000}
              onProgress={saveOnProgress}
              onPlay={handlePlay}
              onStart={handlePlay}
              onEnded={removePlayhead}
              onSeek={onSeek}
              onReady={handleReady}
            />
          )}
        </div>
      </div>
    </>
  );
}
