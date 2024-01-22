import './browse.css';

import BrowseCard from '../../components/browse-card/browse-card';

export default function Browse() {
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
        {Array.from({ length: 100 }).map((_, i) => (
          <BrowseCard key={i} />
        ))}
      </div>
    </div>
  );
}
