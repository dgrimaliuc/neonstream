import { forwardRef } from 'react';

const Scroll = forwardRef(({ children }, ref) => {
  return (
    <div ref={ref} className='scrolling-section'>
      {children}
    </div>
  );
});

export default Scroll;
