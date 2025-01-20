import styles from '../styles/index.module.scss';

export default function HeroCardsWrapper({ children }) {
  return <div className={styles['hero-cards-wrapper']}>{children}</div>;
}
