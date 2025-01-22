import classes from './media-carousel.module.css';

import MediaCard from './media-card';
import { getBackdrop } from '../../../utils';
import { forwardRef } from 'react';
import { Image } from 'components/lazy-image';

const MediaImageCard = forwardRef(({ image }, ref) => {
  return (
    <MediaCard ref={ref}>
      <picture>
        <Image
          className={classes['image-container']}
          src={getBackdrop(image)}
          alt='Backdrop'
          placeholderWidth={533}
          placeholderHeight={300}
          showPlaceholderOnLoading
        />
      </picture>
    </MediaCard>
  );
});

export default MediaImageCard;
