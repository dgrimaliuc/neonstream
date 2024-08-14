import classes from './hero-card.module.css';

import { ActionsContainer } from '../../actions';
import { useClasses, useNavigateToContent } from '../../../hooks';
import { useEffect } from 'react';
import { getBackdrop } from '../../../utils';
import { Image } from '../../lazy-image';

export default function HeroCard({ data, active, id, mediaType }) {
  const to = useNavigateToContent(mediaType, id);
  const {
    c: heroContainerClasses,
    addClass,
    setInitial,
  } = useClasses(classes['hero-card-container']);

  useEffect(() => {
    if (active) {
      addClass(classes['active'], false);
    } else {
      addClass(classes['inactive'], false);
    }
  }, [active, addClass, setInitial]);

  if (!data) {
    return null;
  }

  return (
    <div className={classes['hero-card-wrapper']}>
      <div className={heroContainerClasses}>
        <div className={classes['hero-card-poster']}>
          <picture className={classes['hero-card-background']}>
            <Image
              className={classes['hero-card-picture']}
              src={getBackdrop(data.backdrop_path, 3)}
              alt='Hero carousel item'
            />
          </picture>
        </div>
        <div className={classes['hero-card-info']}>
          <a href={`/${mediaType}/${id}`} className={classes['title']}>
            {data.title || data.name || 'Undefined'}
          </a>
          <div className={classes.description}>
            <p>{data.overview}</p>
          </div>
          <ActionsContainer to={to} addToList={false} data={data} />
        </div>
      </div>
    </div>
  );
}
