import classes from './media-carousel.module.css';

export default function MediaCard({ children }) {
  return (
    <div>
      <div className={classes['media-card']}>{children}</div>
    </div>
  );
}
