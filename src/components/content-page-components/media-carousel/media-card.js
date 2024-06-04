import { forwardRef } from 'react';
import classes from './media-carousel.module.css';

const MediaCard = forwardRef(({ children }, ref) => {
  return (
    <div ref={ref}>
      <div className={classes['media-card']}>{children}</div>
    </div>
  );
});

export default MediaCard;
