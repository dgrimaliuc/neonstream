import { useLoaderData } from 'react-router-dom';
import { useClasses } from '../../hooks';
import rateStyles from './ratings.module.css';
import { formatRatings } from '../../api';

export default function Ratings() {
  const { vote_average, vote_count } = useLoaderData();
  const { c: classes } = useClasses(
    rateStyles['icon-star'],
    rateStyles.checked
  );

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
          <span>{formatRatings(vote_average, vote_count)}</span>
        </button>
      </div>
    </div>
  );
}
