import './carousel.css';
import Controls from '../controls/controls';

export default function Carousel({ children, title }) {
  return (
    <div className='carousel-wrapper'>
      <div className='carousel-header'>
        <h2 className='carousel-title'>{title}</h2>
        {children.length > 0 && <Controls />}
      </div>
      <div className='cards-section'>{children}</div>
    </div>
  );
}
