import styles from '../actions.module.css';
import placeholder from './placeholder-actions.module.css';

export default function PlaceholderWatchNow() {
  return (
    <div>
      <button className={`${styles['watch-now-btn']} ${placeholder.placeholder}`} />
    </div>
  );
}
