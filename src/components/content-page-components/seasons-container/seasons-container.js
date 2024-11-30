import styles from './seasons.module.css';
import SeasonsHeader from './seasons-header';
import Season from './season';
import EpisodesContainer from './episodes-container/episodes-container';
import { useScrollablePagination } from '../../../hooks';
import { useSelector } from 'react-redux';
import { upNextContent } from '../../../store';
import { useEffect, useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { TV } from '../../../data/constants';
import { smoothScrollToRef } from '../../../utils';
import { isEmpty } from 'lodash';

export default function SeasonsContainer({ seasonsTotal, seasons }) {
  const upNext = useSelector(upNextContent);
  const seasonsRef = useRef(null);
  const { id } = useParams();
  const firstSeasonNumber = useMemo(() => seasons[0].season_number, [seasons]);
  const { selected, select, nextPage, prevPage } = useScrollablePagination(
    seasonsTotal,
    styles['seasons-container'],
    styles.selected,
    upNext ? upNext[`${TV}-${id}`]?.season_number : firstSeasonNumber,
  );

  useEffect(() => {
    if (!isEmpty(upNext) && upNext[`${TV}-${id}`]) {
      const upNextObj = upNext[`${TV}-${id}`];
      smoothScrollToRef(seasonsRef);
      const { season_number } = upNextObj;
      select(season_number);
    }
  }, [firstSeasonNumber, id, select, upNext]);

  const selectedSeason = seasons[selected + (firstSeasonNumber ? -1 : 0)];

  return (
    <section className={styles['seasons-wrapper']}>
      <SeasonsHeader onPrevClick={prevPage} onNextClick={nextPage} />
      <nav className={styles['seasons-container']} ref={seasonsRef}>
        {seasons.map((s, i) => {
          return (
            <Season
              key={i}
              isSelected={selectedSeason?.season_number === s.season_number}
              seasonTitle={s.name}
              onClick={select.bind(null, i + (firstSeasonNumber ? 1 : 0))}
            />
          );
        })}
      </nav>
      <EpisodesContainer seasonMetadata={selectedSeason} />
    </section>
  );
}
