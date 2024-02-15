import { useFocused } from '../../../hooks/use-focused';

export default function RegisterField() {
  const [isFocusedEmail, handleFocusEmail, handleBlurEmail] = useFocused();
  const [isFocusedPass, handleFocusPass, handleBlurPass] = useFocused();
  const [isFocusedName, handleFocusName, handleBlurName] = useFocused();

  return (
    <>
      <div className={`form-group ${isFocusedName ? 'focused' : ''}`}>
        <label htmlFor='email' className='placeholder'>
          Name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          onFocus={handleFocusName}
          onBlur={handleBlurName}
        />
      </div>
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
          name='password'
          id='password'
          onFocus={handleFocusPass}
          onBlur={handleBlurPass}
        />
      </div>
    </>
  );
}
