import { useState } from 'react';
import { useClasses } from '../../../hooks/useClasses';
import styles from './hero-description.module.css';

export default function HeroDescription() {
  const [classes, setClasses] = useState(styles['description-wrapper']);

  // const { classes, setInitial, addClass } = useClasses(
  //   styles['description-wrapper']
  // );

  function expandHandler() {
    if (classes.includes('expanded')) {
      setClasses(styles['description-wrapper']);
    } else {
      setClasses(`${styles['description-wrapper']} ${styles['expanded']}`);
    }
  }

  return (
    <div className={classes} onClick={expandHandler}>
      <div className={styles['description-gradient']}>
        <div className={styles['description-container']}>
          <p>
            Monkey. D. Luffy refuses to let anyone or anything stand in the way
            of his quest to become the king of all pirates. With a course
            charted for the treacherous waters of the Grand Line and beyond,
            this is one captain who'll never give up until he's claimed the
            greatest treasure on Earth: the Legendary One Piece! Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Ullam sapiente
            laudantium corporis. Provident recusandae enim qui, perferendis
            rerum exercitationem ratione dolores aliquam, labore excepturi
            quisquam debitis, eos placeat nostrum vel! Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Magni vitae hic totam rerum ad
            eum eos voluptate dolor porro deserunt quibusdam voluptas soluta
            autem ex, libero quia omnis veritatis nulla.
          </p>
        </div>
      </div>
    </div>
  );
}
