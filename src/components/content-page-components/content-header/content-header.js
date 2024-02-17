import ActionsContainer from '../../actions/actionsContainer';
import Ratings from '../../ratings/ratings';
import Tags from '../../tags/tags';
import styles from './content-header.module.css';

export default function ContentHeader() {
  return (
    <>
      <div className={styles['content-header']}>
        <span className='green-text'>WATCH</span>
        <h1 className={styles.title}>One Piece</h1>
        <Tags />
        <ActionsContainer />
        <Ratings />
      </div>
    </>
  );
}
