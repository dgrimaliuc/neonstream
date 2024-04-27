import styles from './movie.module.css';
import { useLoaderData } from 'react-router-dom';
import { BrowseCollection } from '../../components/carousel';

import { ContentHeader } from '../../components/content-page-components';
import { HeroContent } from '../../components/content-page-components/hero-content-container';
import { getMovie } from '../../services/content';
import { getPlayTime, smoothScrollTo } from '../../utils';
import { RECOMMENDED_MOVIES, SIMILAR_MOVIES } from '../../data/constants';
import { composeProps, imageProps, videosProps } from '../../api';
import { VODPlayer } from '../../components/player';
import { useEffect } from 'react';
import { json } from '../../api/stream';

export async function loadMovie({ params }) {
  return getMovie(params.id, composeProps(videosProps(), imageProps()));
}

export default function MoviePage() {
  const { runtime } = useLoaderData();
  // useEffect(() => {
  //   const fetchMovie = async () => {
  //     const re = await fetch('http://localhost:3100/', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: json({
  //         url: 'https://hdrezka.ag/engine/ajax/search.php?q=%2Btt3359350',
  //       }),
  //     });
  //     console.log(re.headers);
  //   };
  //   fetchMovie();
  // }, []);

  return (
    <>
      <ContentHeader
        to='#player-section'
        onWatchClick={smoothScrollTo.bind(null, { id: 'player-section' })}
      />
      <HeroContent additional={getPlayTime(runtime)} />
      <section id='player-section' className={styles['movie-media-section']}>
        <h2>Watch</h2>
        <VODPlayer />
      </section>

      <section>
        <BrowseCollection type={RECOMMENDED_MOVIES} />
        <BrowseCollection type={SIMILAR_MOVIES} />
      </section>
    </>
  );
}
