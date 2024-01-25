import { useState } from 'react';
import './auth.css';

import { NavLink, useLocation } from 'react-router-dom';
import LoginFields from './components/login-fields';
import RegisterField from './components/register-fields';

export default function Authentification() {
  const location = useLocation();
  const isRegister = location.pathname === '/register';

  return (
    <>
      <div className='auth-wrapper'>
        <div className='auth-container'>
          {/* <div className='background-auth-image' src={bg2}></div> */}
          <form className='auth-content'>
            <div className='form-header-controls'>
              <NavLink to='/login' className='form-header-item'>
                Sign in
              </NavLink>
              <NavLink to='/register' className='form-header-item'>
                Register
              </NavLink>
            </div>
            <form className='auth-form'>
              {isRegister ? <RegisterField /> : <LoginFields />}

              <div className='form-controls'>
                <button>{isRegister ? 'Register' : 'Log In'}</button>
              </div>
            </form>
          </form>
        </div>
      </div>
    </>
  );
}
