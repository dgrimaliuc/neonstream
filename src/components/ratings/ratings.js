import { useClasses } from '../../hooks/useClasses';
import rateStyles from './ratings.module.css';
import trailerStyles from './trailer.module.css';

export default function Ratings() {
  const { classes } = useClasses(rateStyles['icon-star'], rateStyles.checked);

  return (
    <div className={rateStyles['rating-section']}>
      <div className={rateStyles.ratings}>
        <span className={classes} />
        <span className={classes} />
        <span className={classes} />
        <span className={rateStyles['icon-star']} />
        <span className={rateStyles['icon-star']} />
      </div>
      <div className={rateStyles['average-rating']}>
        <button className={rateStyles['rating-text']}>
          <span>Average Rating: </span>
          <span>4.9 (286.9K)</span>
        </button>
      </div>
      <div className={trailerStyles['play-trailer-wrapper']}>
        <img
          alt='white_play_button'
          src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC41IDhMMS41IDAuNVYxNS41TDE0LjUgOFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo='
          className='css-lvyu5j en5uzng9'
        />
        <a href='https://www.youtube.com/watch?v=Bf6D-i8YpHg'>
          <span className={trailerStyles['play-trailer-link']}>
            Play Trailer
          </span>
        </a>
      </div>
    </div>
  );
}
