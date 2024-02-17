import styles from './seasons.module.css';
import SeasonsHeader from './seasons-header';
import Season from './season';
import EpisodesContainer from './episodes-container/episodes-container';
import { usePagination } from '../../../hooks/usePagination';

export default function SeasonsContainer({ total = 5 }) {
  const { selected, select, iterator, nextPage, prevPage } =
    usePagination(total);

  return (
    <section className={styles['seasons-wrapper']}>
      <SeasonsHeader onPrevClick={prevPage} onNextClick={nextPage} />
      <nav className={styles['seasons-container']}>
        {iterator((i) => (
          <Season
            key={i}
            isSelected={selected === i}
            title={`Season ${i}`}
            onClick={select.bind(null, i)}
          />
        ))}
      </nav>
      <EpisodesContainer />
    </section>
  );
}
