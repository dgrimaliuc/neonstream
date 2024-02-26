export default function VidsrcPlayer({ path }) {
  const url = `https://vidsrc.to/embed/${path}`;
  return (
    <iframe
      title='vidsrc-player'
      src={url}
      width='100%'
      height='100%'
      allowTransparency
      allowFullScreen
      loading='lazy'

      // onLoad={() => {}}
    ></iframe>
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
