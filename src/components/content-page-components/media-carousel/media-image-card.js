import classes from './media-carousel.module.css';

import MediaCard from './media-card';
import { getBackdrop } from '../../../utils';
import { forwardRef } from 'react';

const MediaImageCard = forwardRef(({ image }, ref) => {
  return (
    <MediaCard ref={ref}>
      <picture>
        <img className={classes['image-container']} src={getBackdrop(image)} alt='Backdrop' />
      </picture>
    </MediaCard>
  );
});

export default MediaImageCard;
