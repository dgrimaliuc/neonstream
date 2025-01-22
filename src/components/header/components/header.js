import styles from '../styles/index.module.scss';

import { Logo, Login, Navigation } from '.';
import SearchBar from './search';

export default function Header() {
  return (
    <div className={styles['header_wrapper']}>
      <header className={styles['header_container']}>
        <div className={styles['header_container__column']}>
          <div className={styles['header_container__primary']}>
            <Logo />
            <SearchBar />
            <Login />
          </div>

          <Navigation />
        </div>
      </header>
      <div className={styles.spacer} />
    </div>
  );
}
