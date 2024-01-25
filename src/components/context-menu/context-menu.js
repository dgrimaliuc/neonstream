import './context-menu.css';

export default function ContextMenu({ className, options, isOpen }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className='context-menu-wrapper'>
      <div className={`context-menu ${className ?? ''}`.trim()}>
        {options.map((option, index) => (
          <div key={index} className='context-item'>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
