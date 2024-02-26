import styles from './movie.module.css';
import { useLoaderData } from 'react-router-dom';
import BrowseCollection from '../../components/carousel/browse_collection';
import BackgroundPicture from '../../components/content-page-components/background-picture/background-picture';

import ContentHeader from '../../components/content-page-components/content-header/content-header';
import HeroContentContainer from '../../components/content-page-components/hero-content-container/hero-content-container';
import { getMovie } from '../../services/content';
import { getYear } from '../../utils';
import Player from '../../components/player/player';

export async function loadMovie({ params }) {
  return getMovie(params.id);
}

export default function MoviePage() {
  const data = useLoaderData();
  console.log(data);
  const {
    backdrop_path,
    title,
    poster_path,
    overview,
    imdb_id,
    genres,
    release_date,
    adult,
  } = data;

  return (
    <>
      <BackgroundPicture picture={backdrop_path} />
      <ContentHeader title={title} tags={genres} />
      <HeroContentContainer
        picture={poster_path}
        tags={genres}
        title={title}
        description={overview}
        year={getYear(release_date)}
      />
      <section className={styles['movie-media-section']}>
        <Player path={`movie/${imdb_id}`} />
      </section>
      <section>
        <BrowseCollection type='recommended_movies' />
      </section>
    </>
  );
}
