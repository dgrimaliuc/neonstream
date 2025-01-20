// import classes from '../hero-card/hero-card.module.css';
import styles from '../styles/index.module.scss';

import { ActionsContainer } from '../../actions';
import { useClasses, useNavigateToContent } from '../../../hooks';
import { useEffect } from 'react';
import { getBackdrop } from '../../../utils';
import { Image } from 'components/lazy-image';

export default function HeroCard({ data, active, id, mediaType }) {
  const navigate = useNavigateToContent(mediaType, id);
  const {
    c: heroContainerClasses,
    addClass,
    setInitial,
  } = useClasses(styles['hero-card-container']);

  useEffect(() => {
    if (active) {
      addClass(styles['active'], false);
    } else {
      addClass(styles['inactive'], false);
    }
  }, [active, addClass, setInitial]);

  if (!data) {
    return null;
  }

  return (
    <div className={styles['hero-card-wrapper']}>
      <div className={heroContainerClasses}>
        <div className={styles['hero-card-poster']}>
          <picture className={styles['hero-card-background']}>
            <Image
              className={styles['hero-card-picture']}
              src={getBackdrop(data.backdrop_path, 3)}
              alt='Hero carousel item'
              shape='none'
              placeholderHeight={9}
              placeholderWidth={16}
            />
          </picture>
        </div>
        <div className={styles['hero-card-info']}>
          <a href={`/${mediaType}/${id}`} className={styles['title']}>
            {data.title || data.name || 'Undefined'}
          </a>
          <div className={styles.description}>
            <p className={`multiline-ellipsis ${styles['hero-card-ellipsis']}`}>{data.overview}</p>
          </div>
          <ActionsContainer onWatchClick={navigate} addToList={false} data={data} />
        </div>
      </div>
    </div>
  );
}
