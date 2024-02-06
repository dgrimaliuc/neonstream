import './spinner.css';

export default function Spinner({ display }) {
  if (!display) return null;
  return (
    <div className='spinner-wrapper'>
      <span>
        <div className='loader' />
      </span>
    </div>
  );
}
