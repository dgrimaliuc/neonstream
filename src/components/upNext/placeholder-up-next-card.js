import './upNext.css';
import { Image } from 'components/lazy-image';

export default function UpNextCardPlaceholder() {
  return (
    <div className='up-next-episode'>
      <div className='container-header'>
        <span className='up-next-header-text' />
      </div>
      <div className='up-next-episode-body'>
        <div className='up-next-image-container placeholder'>
          <Image className='up-next-image' placeholderWidth={126} placeholderHeight={71} />
        </div>
        <div className='up-next-info'>
          <div className='up-next-info-box'>
            <div className='up-next-title-placeholder' />
            <p className='description-wrapper placeholder'></p>
          </div>
        </div>
      </div>
    </div>
  );
}
