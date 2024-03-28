import { formatVoteAverage, formatVoteCount } from '../../api';
import Star from '../icons/star';

export default function AverageRatingInfo({
  vote_average,
  vote_count,
  className,
}) {
  return (
    <button className={className}>
      <span>Average Rating: </span>
      <span>{` ${formatVoteAverage(vote_average)} `}</span>
      <Star />
      <span>{`(${formatVoteCount(vote_count)})`}</span>
    </button>
  );
}
