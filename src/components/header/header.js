// import './header.css';

import styles from './styles/index.module.scss';

import { Logo, Login, Navigation } from './components';

export default function Header() {
  return (
    <>
      <header className={styles['header_container']}>
        <Logo />
        <Navigation />
        <Login />
      </header>
    </>
  );
}
