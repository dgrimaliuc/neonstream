import { useLoaderData } from 'react-router-dom';
import { useClasses } from '../../hooks';
import rateStyles from './ratings.module.css';
import AverageRatingInfo from './average-rating-info';

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
        <AverageRatingInfo
          className={rateStyles['rating-text']}
          vote_average={vote_average}
          vote_count={vote_count}
        />
      </div>
    </div>
  );
}
