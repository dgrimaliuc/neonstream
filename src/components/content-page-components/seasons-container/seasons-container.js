import styles from './seasons.module.css';
import SeasonsHeader from './seasons-header';
import Season from './season';
import EpisodesContainer from './episodes-container/episodes-container';
import { useScrollablePagination } from '../../../hooks';
import { useSelector } from 'react-redux';
import { upNextContent } from '../../../store';
import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { TV } from '../../../data/constants';

export default function SeasonsContainer({ seasonsTotal, seasons }) {
  const upNext = useSelector(upNextContent);
  const { id } = useParams();
  const firstSeasonNumber = useMemo(() => seasons[0].season_number, [seasons]);

  const { selected, select, nextPage, prevPage } = useScrollablePagination(
    seasonsTotal,
    styles['seasons-container'],
    styles.selected,
    upNext[`${TV}-${id}`]?.season_number || firstSeasonNumber,
  );

  useEffect(() => {
    const upNextObj = upNext[`${TV}-${id}`];
    if (upNextObj) {
      const { season_number } = upNextObj;
      select(season_number);
    }
  }, [firstSeasonNumber, id, select, upNext]);

  const selectedSeason = seasons[selected + (firstSeasonNumber ? -1 : 0)];

  return (
    <section className={styles['seasons-wrapper']}>
      <SeasonsHeader onPrevClick={prevPage} onNextClick={nextPage} />
      <nav className={styles['seasons-container']}>
        {seasons.map((s, i) => {
          return (
            <Season
              key={i}
              isSelected={selectedSeason.season_number === s.season_number}
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
