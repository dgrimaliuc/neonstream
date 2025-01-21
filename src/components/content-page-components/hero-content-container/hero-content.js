import './hero-content-container-index.css';

import HeroActions from '../hero-actions/hero-actions';
import { Genres } from '../../genres';
import HeroDescription from '../hero-description/hero-description';
import heroStyles from './hero-content.module.css';
import HeroPoster from './hero-poster';
import { useLoaderData } from 'react-router-dom';
import { selectMainTrailer } from '../../../api';
import { getYear } from '../../../utils';
import { MediaCarousel } from '../media-carousel';
import TrailerModal from '../../modal/trailer-modal';

import { useSelector } from 'react-redux';
import { selectedTrailer, trailerActions } from '../../../store';
import { useDispatchAction } from '../../../hooks/useDispatchAction';
import { useEffect } from 'react';
import { Meta } from '../../meta';

export default function HeroContent({ additional, to }) {
  const dispatch = useDispatchAction(trailerActions);
  const trailer = useSelector(selectedTrailer);

  const {
    poster_path,
    videos,
    tagline,
    genres,
    title,
    name,
    overview,
    first_air_date,
    release_date,
  } = useLoaderData();

  useEffect(() => {
    return () => {
      dispatch.unselectTrailer()();
    };
  }, [dispatch]);

  return (
    <div>
      <Meta title={title || name} overview={overview} poster_path={poster_path} />
      <TrailerModal onOutsideClick={dispatch.unselectTrailer()} trailer={trailer} />
      <div className={heroStyles['hero-content-section']}>
        <div className={heroStyles['hero-content-wrapper']}>
          <HeroPoster picture={poster_path} />
          <div className={heroStyles['hero-content']}>
            <div className={heroStyles['hero-content-header']}>
              <h2 className={heroStyles['hero-title']}>{`${title || name} (${getYear(
                release_date || first_air_date,
              )})`}</h2>
              <span className={heroStyles['additional-info']}>{additional}</span>
            </div>

            <HeroActions trailer={selectMainTrailer(videos)} />
            <Genres genres={genres} />
            <div className={heroStyles.tagline}>{tagline}</div>
            <HeroDescription description={overview} />
          </div>
        </div>
        <MediaCarousel />
      </div>
    </div>
  );
}
