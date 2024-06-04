import styles from './seasons.module.css';
import SeasonsHeader from './seasons-header';
import Season from './season';
import EpisodesContainer from './episodes-container/episodes-container';
import { useScrollablePagination } from '../../../hooks';

export default function SeasonsContainer({ seasonsTotal, seasons }) {
  const firstSeasonNumber = seasons[0].season_number;

  const { selected, select, nextPage, prevPage } = useScrollablePagination(
    seasonsTotal,
    styles['seasons-container'],
    styles.selected,
    firstSeasonNumber,
  );

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
