import ActionsContainer from '../../actions/actionsContainer';
import Ratings from '../../ratings/ratings';
import { Genres } from '../../genres';
import styles from './content-header.module.css';

export default function ContentHeader({ title, tags }) {
  return (
    <>
      <div className={styles['content-header']}>
        <span className='green-text'>WATCH</span>
        <h1 className={styles.title}>{title}</h1>
        <Genres tags={tags} />
        <ActionsContainer />
        <Ratings />
      </div>
    </>
  );
}
