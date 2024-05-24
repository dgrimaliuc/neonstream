import { forwardRef } from 'react';
import './spinner.css';

const Spinner = forwardRef(({ display }, ref) => {
  if (!display) return null;
  return (
    <div ref={ref} className='spinner-wrapper'>
      <span>
        <div className='loader' />
      </span>
    </div>
  );
});

export default Spinner;
