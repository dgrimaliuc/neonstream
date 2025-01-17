import { Link } from 'react-router-dom';
import styles from '../styles/index.module.scss';

export default function Login() {
  return (
    <div className={styles.login}>
      <Link to='/'>Login</Link>
      <Link to='/'>Sign Up</Link>
    </div>
  );
}
