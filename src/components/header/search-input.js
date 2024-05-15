import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SearchInput() {
  const navigate = useNavigate();
  const location = useLocation();
  const ref = useRef();

  const handleInputChange = event => {
    const value = event.target.value;
    const url = value === '' ? '/search' : `/search?q=${value}`;
    navigate(url);
  };

  const handleClick = () => {
    if (location.pathname !== '/search') {
      navigate('/search');
    }
  };

  useEffect(() => {
    const inputRef = ref.current;
    const params = new URLSearchParams(location.search);
    inputRef.value = params.get('q') || '';
    return () => {
      inputRef.value = '';
    };
  }, [location]);

  return (
    <div className='search'>
      <div id='cover'>
        <input
          type='text'
          placeholder='Search...'
          onClick={handleClick}
          onChange={handleInputChange}
          ref={ref}
        />
      </div>
    </div>
  );
}
