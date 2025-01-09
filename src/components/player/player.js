import { forwardRef, memo } from 'react';
import ReactPlayer from 'react-player/lazy';

const Player = memo(
  forwardRef(
    (
      {
        url,
        playing,
        controls,
        playIcon,
        style,
        className,
        onReady,
        light,
        config,
        onPause,
        onPlay,
        onBuffer,
        onSeek,
        onStart,
        played,
        onEnded,
        autoPlay = false,
        onProgress,
        progressInterval,
        width = '100%',
        height = '100%',
      },
      ref,
    ) => {
      return (
        <ReactPlayer
          ref={ref}
          onPause={onPause}
          onReady={onReady}
          onBuffer={onBuffer}
          onPlay={onPlay}
          // fallback={<Spinner display />}
          onSeek={onSeek}
          onStart={onStart}
          onProgress={onProgress}
          onEnded={onEnded}
          played={played}
          className={className}
          light={light}
          autoPlay={autoPlay}
          url={url}
          width={width}
          height={height}
          progressInterval={progressInterval}
          controls={controls}
          playing={playing}
          playIcon={playIcon}
          style={style}
          onError={e => {
            console.error('Error playing', e);
          }}
          config={{
            ...config,
            attributes: {
              crossOrigin: 'true',
              allow: 'autoplay',
            },
            file: {
              attributes: {
                controlsList: 'nodownload',
              },
            },
            youtube: {
              playerVars: {
                showinfo: 0,
                modestbranding: 1,
                rel: 0,
                iv_load_policy: 3,
              },
            },
          }}
        />
      );
    },
  ),
);

export default Player;
