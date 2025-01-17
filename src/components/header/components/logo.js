import styles from '../styles/index.module.scss';

export default function Logo() {
  return (
    <a className={styles.logo} href='/'>
      <div>
        <img className='saturn' src='/./logo.svg' alt='Saturn' />
      </div>
      <div className={styles['logo__text']} role='button'>
        Neon
      </div>
    </a>
  );
}
