import styles from './seasons.module.css';
import SeasonsHeader from './seasons-header';
import Season from './season';
import EpisodesContainer from './episodes-container/episodes-container';
import { usePagination } from '../../../hooks/usePagination';

export default function SeasonsContainer({ seasonsTotal, seasonsMetadata }) {
  const { selected, select, iterator, nextPage, prevPage } = usePagination(
    seasonsTotal,
    styles['seasons-container'],
    styles.selected
  );

  return (
    <section className={styles['seasons-wrapper']}>
      <SeasonsHeader onPrevClick={prevPage} onNextClick={nextPage} />
      <nav className={styles['seasons-container']}>
        {iterator((i) => (
          <Season
            key={i}
            isSelected={selected === i}
            seasonNumber={i}
            onClick={select.bind(null, i)}
          />
        ))}
      </nav>
      <EpisodesContainer seasonMetadata={seasonsMetadata[selected]} />
    </section>
  );
}
