import { trailerActions } from '../../../../store';
import styles from './trailer.module.css';
import { useDispatchAction } from '../../../../hooks/useDispatchAction';

export default function TrailerButton({ trailer }) {
  const dispatch = useDispatchAction(trailerActions);
  return (
    <div className={styles['play-button-trailer-wrapper']}>
      <img
        alt='white_play_button'
        src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC41IDhMMS41IDAuNVYxNS41TDE0LjUgOFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo='
      />
      <div onClick={dispatch.selectTrailer(trailer)}>
        <span className={styles['play-trailer-link']}>Play Trailer</span>
      </div>
    </div>
  );
}
