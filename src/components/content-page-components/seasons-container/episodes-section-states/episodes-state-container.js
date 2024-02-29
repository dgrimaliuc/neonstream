import classes from './loading-episodes-container.module.css';

export default function EpisodesStateContainer({ children }) {
  return <div className={classes['loading-wrapper']}>{children}</div>;
}
