import { Link } from 'react-router-dom';
import styles from '../styles/index.module.scss';

export default function Login() {
  return (
    <div className={styles.login}>
      {/* Uncomment when will be in progress */}
      <Link to='login'>Login</Link>
      <Link to='register'>Sign Up</Link>
    </div>
  );
}
