import EmptyState from './EmptyState';
import styles from './search.module.css';
import { useEffect, useState } from 'react';
import { SEARCH_ALL } from '../../data/constants';
import { useInitialScroll, useQueryParams, useSearchLoader } from '../../hooks';
import SearchContainer from './SearchContainer';

const searchMode = SEARCH_ALL;

export default function Search() {
  const [isInitial, setIsInitial] = useState(true);
  const query = useQueryParams();
  const { page, results, loading, total_pages, total_results, hasResults } = useSearchLoader(
    searchMode,
    query?.q,
  );
  useInitialScroll({ timeout: 10 });

  useEffect(() => {
    if (query?.q) {
      setIsInitial(false);
    }
  }, [query?.q]);

  return (
    <div className={styles['search-wrapper']}>
      {!query && isInitial && <EmptyState isInitial />}
      {!isInitial && (
        <SearchContainer
          page={page}
          totalPages={total_pages}
          totalResults={total_results}
          hasResults={hasResults}
          results={results}
          isLoading={loading}
          query={query?.q}
          searchMode={searchMode}
        />
      )}
    </div>
  );
}
