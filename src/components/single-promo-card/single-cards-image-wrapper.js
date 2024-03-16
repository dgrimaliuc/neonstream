import './custom-border-violet.css';
import './single-promo-card-violet.css';
import './single-promo-card.css';

export default function SingleCardsImageWrapper({
  topImage,
  bottomImage,
  className,
  to,
}) {
  return (
    <div className='single-card-img-wrapper'>
      <a href={to}>
        <picture>
          <img
            className={className}
            src={topImage}
            alt=' The Big Bang Theory Poster'
          />
        </picture>
      </a>
      <a className='image-right' href={to}>
        <picture>
          <img
            className={className}
            src={bottomImage}
            alt=' The Big Bang Theory Poster'
          />
        </picture>
      </a>
    </div>
  );
}
