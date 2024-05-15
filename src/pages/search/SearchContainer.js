import styles from './search.module.css';
import { GridContentWrapper } from '../../components/grid-content-wrapper';
import EmptyState from './EmptyState';
import jp from 'jsonpath';

export default function SearchContainer({
  page,
  results,
  isLoading,
  query,
  totalPages,
  totalResults,
  hasResults,
}) {
  const persons = jp.query(results, "$[?(@.media_type === 'person')]").length;

  if (!query || !hasResults || persons === totalResults) {
    return <EmptyState hasNoResults />;
  }

  return (
    <div className={styles['search-cards-container']}>
      <h2 className={styles.title}>Top results</h2>
      <GridContentWrapper
        content={results}
        showSpinner={results?.length < totalResults || totalResults === 0}
      />
    </div>
  );
}
