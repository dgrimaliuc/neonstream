import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import styles from '../styles/index.module.scss';

export default function SearchBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const removeParam = useCallback(
    key => {
      searchParams.delete(key);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams],
  );

  const handleInputChange = useCallback(
    event => {
      const value = event.target.value;

      setValue(value);
      if (value === '') {
        removeParam('q');
      } else {
        setSearchParams({ q: value });
      }
    },
    [removeParam, setSearchParams],
  );

  const handleClick = () => {
    if (location.pathname !== '/search') {
      navigate('/search');
    }
  };

  useEffect(() => {
    setValue(searchParams.get('q') || '');
    if (searchParams.get('q') === '') {
      removeParam('q');
    }
    return () => {
      setValue('');
    };
  }, [location, removeParam, searchParams, setSearchParams]);

  return (
    <div className={styles['search_container']}>
      <div className={styles['search_container__input']}>
        <input
          value={value}
          type='text'
          placeholder='Search...'
          onClick={handleClick}
          onChange={handleInputChange}
        />
        <span className={styles['search_container__icon']}>
          <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='#ffffff'>
            <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
            <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
            <g id='SVGRepo_iconCarrier'>
              <path
                d='M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z'
                stroke='#f6f6f6'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
            </g>
          </svg>
        </span>
      </div>
    </div>
  );
}
