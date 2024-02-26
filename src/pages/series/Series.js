import { useLoaderData } from 'react-router-dom';
import BrowseCollection from '../../components/carousel/browse_collection';
import BackgroundPicture from '../../components/content-page-components/background-picture/background-picture';

import ContentHeader from '../../components/content-page-components/content-header/content-header';
import HeroContentContainer from '../../components/content-page-components/hero-content-container/hero-content-container';
import SeasonsContainer from '../../components/content-page-components/seasons-container/seasons-container';
import { getSeries } from '../../services/content';
import { getYear } from '../../utils';

export async function loadTv({ params }) {
  return getSeries(params.id);
}

export default function SeriesPage() {
  const data = useLoaderData();
  console.log(data);
  const {
    backdrop_path,
    name,
    poster_path,
    overview,
    imdb_id,
    genres,
    first_air_date,
    number_of_seasons,
    number_of_episodes,
    adult,
    seasons,
  } = data;
  return (
    <>
      <BackgroundPicture picture={backdrop_path} />
      <ContentHeader title={name} tags={genres} />
      <HeroContentContainer
        picture={poster_path}
        tags={genres}
        title={name}
        description={overview}
        year={getYear(first_air_date)}
      />
      <SeasonsContainer
        seasonsTotal={number_of_seasons}
        seasonsMetadata={seasons}
      />
      <section>
        <BrowseCollection type='recommended_series' />
      </section>
    </>
  );
}
