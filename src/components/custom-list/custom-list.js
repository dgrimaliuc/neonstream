import { useCallback, useEffect, useRef, useState } from 'react';
import { ContextMenu } from '../context-menu';
import './custom-list.css';

export default function CustomList() {
  const [isOpen, setIsOpen] = useState(false);
  const contextMenuRef = useRef(null);

  const handleClickOutside = useCallback((e) => {
    if (contextMenuRef.current && !contextMenuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className='custom-list'>
      <div className='cl-title'>Title</div>
      <div>0 items</div>
      <div
        ref={contextMenuRef}
        className='cl-settings-wrapper'
        onClick={setIsOpen.bind(null, (prev) => !prev)}
      >
        <i className='fa-ellipsis-v' />
        <ContextMenu options={['Rename', 'Remove']} isOpen={isOpen} />
      </div>
    </div>
  );
}
