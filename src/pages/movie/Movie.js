import styles from './movie.module.css';
import { useLoaderData } from 'react-router-dom';
import { BrowseCollection } from '../../components/carousel';

import { ContentHeader } from '../../components/content-page-components';
import { HeroContent } from '../../components/content-page-components/hero-content-container';
import { getMovie } from '../../services/content';
import { getPlayTime, smoothScrollTo } from '../../utils';
import { RECOMMENDED_MOVIES, SIMILAR_MOVIES } from '../../data/constants';
import { composeProps, imageProps, videosProps } from '../../api';
import { VIDPlayer } from '../../components/player';

export async function loadMovie({ params }) {
  return getMovie(params.id, composeProps(videosProps(), imageProps()));
}

export default function MoviePage() {
  const { imdb_id, runtime } = useLoaderData();

  return (
    <>
      <ContentHeader
        to='#player-section'
        onWatchClick={smoothScrollTo.bind(null, { id: 'player-section' })}
      />
      <HeroContent additional={getPlayTime(runtime)} />
      <section id='player-section' className={styles['movie-media-section']}>
        <h2>Watch</h2>
        <VIDPlayer path={`movie/${imdb_id}`} />
      </section>

      <section>
        <BrowseCollection type={RECOMMENDED_MOVIES} />
        <BrowseCollection type={SIMILAR_MOVIES} />
      </section>
    </>
  );
}
