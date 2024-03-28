import { ActionsContainer } from '../../actions';
import Ratings from '../../ratings/ratings';
import { Genres } from '../../genres';
import styles from './content-header.module.css';
import { useLoaderData } from 'react-router-dom';
import BackgroundPicture from '../background-picture/background-picture';

export default function ContentHeader({ to, onWatchClick }) {
  const { title, name, genres } = useLoaderData();
  return (
    <>
      <BackgroundPicture />
      <div className={styles['content-header']}>
        <span className='green-text'>WATCH</span>
        <h1 className={styles.title}>{title || name}</h1>
        <Genres genres={genres} />
        <ActionsContainer to={to} onWatchClick={onWatchClick} />
        <Ratings />
      </div>
    </>
  );
}
