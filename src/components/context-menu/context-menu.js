import { useState } from 'react';
import './context-menu.css';

export default function ContextMenu({ className, options, isOpen }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className='context-menu-wrapper'>
      <div className={`context-menu ${className ?? ''}`.trim()}>
        {options.map((option, index) => (
          <div key={index} className='contex-item'>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
