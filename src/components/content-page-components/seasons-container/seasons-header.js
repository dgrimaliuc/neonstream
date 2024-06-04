import styles from './seasons.module.css';
import Controls from '../../controls/controls';

export default function SeasonsHeader({ onPrevClick, onNextClick }) {
  return (
    <div className={styles['seasons-header']}>
      <h2>Season Content</h2>
      <Controls activeControls onLeftClick={onPrevClick} onRightClick={onNextClick} />
    </div>
  );
}
