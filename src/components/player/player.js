import ReactPlayer from 'react-player';

export default function Player({
  url,
  playing,
  controls,
  playIcon,
  style,
  className,
  light,
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
      config={{
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
