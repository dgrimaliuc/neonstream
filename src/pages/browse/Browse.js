import './browse.css';

import { useBrowseLoader } from '../../hooks/useBrowseLoader';
import { useInitialScroll } from '../../hooks';
import { GridContentWrapper } from '../../components/grid-content-wrapper';

export default function Browse({ mode }) {
  const { content, page } = useBrowseLoader(mode);
  useInitialScroll({ timeout: 10 });

  return (
    <div className='browse-wrapper'>
      <div className='browse-header'>
        <h2 className='browse-title'>Browse Content</h2>
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
      <GridContentWrapper content={content} display={page < 500} />
    </div>
  );
}
