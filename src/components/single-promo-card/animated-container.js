import './custom-border-violet.css';
import './single-promo-card-violet.css';
import './single-promo-card.css';

export function AnimatedContainer({ topClassName, bottomClassName }) {
  return (
    <div className='animated-boxes'>
      <div className={`space-box ${topClassName} top-place`} />
      <div className={`space-box ${bottomClassName} bottom-place`} />
    </div>
  );
}
