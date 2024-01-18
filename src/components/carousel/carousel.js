import './carousel.css';

import BrowseCard from '../browse-card/browse-card';
import Controls from '../controls/controls';

export default function Carousel() {
  return (
    <div className='carousel-wrapper'>
      <div className='carousel-header'>
        <div className='seasons-header'>
          <h2 className='carousel-title'>Similar To</h2>
          <Controls />
        </div>
      </div>
      <div className='cards-section'>
        {Array.from({ length: 15 }).map((_, i) => (
          <BrowseCard key={i} />
        ))}
      </div>
    </div>
  );
}
