import { NavLink } from 'react-router-dom';
import styles from '../styles/index.module.scss';
import { useMemo } from 'react';

const templates = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'All',
    to: '/browse',
  },
  {
    name: 'Series',
    to: '/browse/tv',
  },
  {
    name: 'Movies',
    to: '/browse/movies',
  },
  {
    name: 'Watchlist',
    to: '/watchlist',
  },
];

export default function Navigation() {
  let links = useMemo(() => {
    return templates.map(link => (
      <NavLink end key={link.name} to={link.to} role='button'>
        <span>{link.name}</span>
      </NavLink>
    ));
  }, []);

  return (
    <div className={styles['header-navigation-wrapper']}>
      <div className={styles['navigation-items-container']}>{links}</div>
    </div>
  );
}
