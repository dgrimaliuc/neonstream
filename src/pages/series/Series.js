import { useLoaderData, useParams } from 'react-router-dom';
import { BrowseCollection } from '../../components/carousel';

import {
  SeasonsContainer,
  HeroContent,
  ContentHeader,
} from '../../components/content-page-components';
import { getSeries } from '../../services/content';
import { RECOMMENDED_SERIES, SIMILAR_SERIES } from '../../data/constants';
import {
  composeProps,
  externalIdsProps,
  imageProps,
  keywordsProps,
  translationsProps,
  videosProps,
} from '../../api';
import useSeries from '../../hooks/useSeries';
import { useInitialScroll } from '../../hooks';

export async function loadTv({ params }) {
  return getSeries(
    params.id,
    composeProps(
      videosProps(),
      imageProps(),
      externalIdsProps(),
      translationsProps(),
      keywordsProps(),
    ),
  );
}

export default function SeriesPage() {
  const data = useLoaderData();
  const { id } = useParams();
  const { number_of_seasons, number_of_episodes, seasons } = data;
  useSeries();
  useInitialScroll({ timeout: 50 });

  return (
    <>
      <ContentHeader to={`/tv/${id}/watch/1/1`} />
      <HeroContent additional={`${number_of_seasons} S - ${number_of_episodes} E`} />
      {seasons.length > 0 && (
        <SeasonsContainer seasonsTotal={number_of_seasons} seasons={seasons} />
      )}
      <section>
        <BrowseCollection type={RECOMMENDED_SERIES} />
        <BrowseCollection type={SIMILAR_SERIES} />
      </section>
    </>
  );
}
