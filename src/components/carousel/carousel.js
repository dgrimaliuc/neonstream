import './carousel.css';
import Controls from '../controls/controls';

export default function Carousel({ children, title }) {
  return (
    <div className='carousel-wrapper'>
      <div className='carousel-header'>
        <div className='seasons-header'>
          <h2 className='carousel-title'>{title}</h2>
          <Controls />
        </div>
      </div>
      <div className='cards-section'>{children}</div>
    </div>
  );
}
