import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

export default function SearchInput() {
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
    <div className='search'>
      <div id='cover'>
        <input
          value={value}
          type='text'
          placeholder='Search...'
          onClick={handleClick}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
