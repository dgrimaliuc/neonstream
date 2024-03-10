import './custom-border-violet.css';
import './single-promo-card-violet.css';
import './single-promo-card.css';

export default function SingleCardsImageWrapper({
  topImage,
  bottomImage,
  className,
}) {
  return (
    <div className='single-card-img-wrapper'>
      <div>
        <picture>
          <img
            className={className}
            src={topImage}
            alt=' The Big Bang Theory Poster'
          />
        </picture>
      </div>
      <div className='image-right'>
        <picture>
          <img
            className={className}
            src={bottomImage}
            alt=' The Big Bang Theory Poster'
          />
        </picture>
      </div>
    </div>
  );
}
