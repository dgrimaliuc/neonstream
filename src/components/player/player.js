import ReactPlayer from 'react-player';

export default function Player({
  url,
  playing,
  controls,
  playIcon,
  style,
  className,
  light,
  config,
}) {
  return (
    <ReactPlayer
      className={className}
      light={light}
      url={url}
      width='100%'
      height='100%'
      controls={controls}
      playing={playing}
      playIcon={playIcon}
      style={style}
      onError={(e) => {
        console.error('Error playing', e);
      }}
      config={{
        ...config,
        attributes: {
          crossOrigin: 'true',
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
}
