import './browse.css';

import BrowseCard from '../../components/browse-card/browse-card';

import { Spinner } from '../../components/spinner';
import { useBrowseLoader } from '../../hooks/useBrowseLoader';
import { useInitialScroll } from '../../hooks';

export default function Browse({ mode }) {
  const { content, page } = useBrowseLoader(mode);
  useInitialScroll({ timeout: 10 });

  return (
    <div className='browse-wrapper'>
      <div className='browse-header'>
        <h2 className='browse-title'>Browse Movies</h2>
        <div className='browse-actions'>
          <button className='sorting'>
            <i className='fa-align-left'></i>
            <span>Newest</span>
          </button>
          <button className='filter'>
            <i className='fa-filter'></i>
            <span>Filter</span>
          </button>
        </div>
      </div>
      <div className='content-wrapper'>
        {content.map((card, i) => (
          <BrowseCard
            key={i}
            title={card.title || card.name}
            poster={card.poster_path}
            date={card.release_date || card.first_air_date}
            to={`/${card.media_type}/${card.id}`}
            {...card}
          />
        ))}
        <Spinner display={page < 500} />
      </div>
    </div>
  );
}
