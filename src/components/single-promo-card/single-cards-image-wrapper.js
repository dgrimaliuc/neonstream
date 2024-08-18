import { Image } from '../lazy-image';
import './custom-border-violet.css';
import './single-promo-card-violet.css';
import './single-promo-card.css';

export default function SingleCardsImageWrapper({ topImage, bottomImage, className, to }) {
  return (
    <div className='single-card-img-wrapper'>
      <a href={to}>
        <picture>
          <Image
            src={topImage}
            placeholderWidth={220}
            placeholderHeight={330}
            className={className}
            showPlaceholderOnLoading
          />
        </picture>
      </a>
      <a className='image-right' href={to}>
        <picture>
          <Image
            src={bottomImage}
            placeholderWidth={220}
            placeholderHeight={330}
            className={className}
            showPlaceholderOnLoading
          />
        </picture>
      </a>
    </div>
  );
}
