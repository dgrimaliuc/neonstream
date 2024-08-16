import '../carousel.css';

import PlaceholderControls from '../../controls/placeholder-controls';
import PlaceholderBrowseCard from '../../browse-card/placeholder-browse-card';

export default function PlaceholderBrowseCollection() {
  return (
    <div className='carousel-wrapper'>
      <div className='carousel-header'>
        <div className='carousel-title placeholder-a2Z' />
        <PlaceholderControls />
      </div>
      <div className='scrolling-section'>
        {Array.from({ length: 10 }).map((_, i) => (
          <PlaceholderBrowseCard key={i} />
        ))}
      </div>
    </div>
  );
}
