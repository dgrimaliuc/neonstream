import { useLoaderData } from 'react-router-dom';
import { BrowseCollection } from '../../components/carousel';

import {
  SeasonsContainer,
  HeroContent,
  ContentHeader,
} from '../../components/content-page-components';
import { getSeries } from '../../services/content';
import { RECOMMENDED_SERIES, SIMILAR_SERIES } from '../../data/constants';
import { composeProps, externalIdsProps, imageProps, videosProps } from '../../api';
import useSeries from '../../hooks/useSeries';

export async function loadTv({ params }) {
  return getSeries(params.id, composeProps(videosProps(), imageProps(), externalIdsProps()));
}

export default function SeriesPage() {
  const data = useLoaderData();
  const { number_of_seasons, number_of_episodes, seasons } = data;
  useSeries();

  return (
    <>
      <ContentHeader />
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
