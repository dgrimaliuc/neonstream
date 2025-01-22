import styles from './browse-card.module.css';

import { getPoster, getYear } from '../../utils';
import { Image } from 'components/lazy-image';

const BrowseCard = ({ title, poster, date, media_type, id, skipMode = true }) => {
  if (skipMode && (!poster || media_type === 'person')) return;

  return (
    <div>
      <div className={styles['browse-card']}>
        <a
          href={`/${media_type}/${id}`}
          className={`${styles['browse-card-body']} ${styles['text-decoration-off']}`}
        >
          <div className={styles['browse-card-poster']}>
            <div className={styles['browse-card-hover']}>
              <i className='fa-play' />
            </div>
            <picture>
              <Image
                className={styles['browse-card-poster']}
                src={getPoster(poster)}
                alt={title}
                placeholderWidth={2}
                placeholderHeight={3}
              />
            </picture>
          </div>
          <div className={styles['browse-card-info']}>
            <p>
              <span>{title}</span> ({getYear(date)})
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BrowseCard;
