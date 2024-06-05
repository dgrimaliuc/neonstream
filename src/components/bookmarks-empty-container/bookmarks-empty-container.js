import styles from './bookmarks-empty-container.module.css';
import cosmonaut from '../../assets/icons/cosmonaut.png';
export default function BookmarksEmptyContainer() {
  return (
    <div className={styles.container} data-t='bookmarks-empty-container'>
      <div>
        <img className={styles.icon} src={cosmonaut} alt='Cosmonaut' />
      </div>
      <div className={styles.title}>Nothing to show</div>
      <div className={styles.description}>Feel free to add something here!</div>
    </div>
  );
}
