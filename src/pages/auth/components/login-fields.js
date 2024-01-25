import './auth-fields.css';
import { Link } from 'react-router-dom';
import useFocused from '../../../hooks/use-focused';

export default function LoginFields() {
  const [isFocusedEmail, handleFocusEmail, handleBlurEmail] = useFocused();
  const [isFocusedPass, handleFocusPass, handleBlurPass] = useFocused();
  return (
    <>
      <div className={`form-group ${isFocusedEmail ? 'focused' : ''}`}>
        <label htmlFor='email' className='placeholder'>
          Email
        </label>
        <input
          type='email'
          name='email1'
          id='email1'
          onFocus={handleFocusEmail}
          onBlur={handleBlurEmail}
        />
      </div>
      <div className={`form-group ${isFocusedPass ? 'focused' : ''}`}>
        <label htmlFor='password' className='placeholder'>
          Password
        </label>
        <input
          type='password'
          name='password1'
          id='password1'
          onFocus={handleFocusPass}
          onBlur={handleBlurPass}
        />
      </div>
      <span class='forgot-password'>
        <Link to='/forgot-password'>FORGOT PASSWORD?</Link>
      </span>
    </>
  );
}
