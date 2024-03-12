import { useLoaderData } from 'react-router-dom';
import { BrowseCollection } from '../../components/carousel';

import {
  SeasonsContainer,
  HeroContentContainer,
  ContentHeader,
  BackgroundPicture,
} from '../../components/content-page-components';
import { getSeries } from '../../services/content';
import { getYear } from '../../utils';

export async function loadTv({ params }) {
  return getSeries(params.id);
}

export default function SeriesPage() {
  const data = useLoaderData();

  const {
    backdrop_path,
    name,
    poster_path,
    overview,
    genres,
    first_air_date,
    number_of_seasons,
    number_of_episodes,
    // adult,
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
        additional={`${number_of_seasons} Seasons - ${number_of_episodes} Episodes`}
      />
      <SeasonsContainer seasonsTotal={number_of_seasons} seasons={seasons} />
      <section>
        <BrowseCollection type='recommended_series' />
      </section>
    </>
  );
}
