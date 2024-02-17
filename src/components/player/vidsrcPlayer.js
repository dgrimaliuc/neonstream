import { useEffect, useRef, useState } from 'react';
import './player.css';
export default function VidsrcPlayer({ url }) {
  const ref = useRef(null);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    // setMsg(JSON.stringify(ref.current.contentWindow.frames.top));
  }, []);

  return (
    <>
      <iframe
        ref={ref}
        title='vidsrc-player'
        src={url}
        width='100%'
        height='100%'
        // allow='autofocus'
        allowFullScreen
        onLoad={() => {}}
        onCanPlay={() => {
          setMsg('can play');
        }}
        onCanPlayThrough={() => {
          setMsg('can play through');
        }}
        onPlay={() => {
          setMsg('playing');
        }}
        onPlaying={() => {
          setMsg('playing');
        }}
        onProgress={() => {
          setMsg('progress');
        }}
        onTimeUpdate={() => {
          setMsg('time update');
        }}
        onLoadedData={() => {
          setMsg('loaded data');
        }}
        onLoadedMetadata={() => {
          setMsg('loaded metadata');
        }}
        onScroll={() => {
          setMsg('scroll');
        }}
      ></iframe>
      <div>-{msg}</div>
    </>
  );
}

/*

 <ReactPlayer
            url='https://www.youtube.com/watch?v=7NK_JOkuSVY'
            width='100%'
            height='100%'
            controls={true}
            // playing={аф}
          ></ReactPlayer>
*/
