import styles from './expand.module.css';
import { useClasses } from '../../hooks';
import { useEffect, useRef, useState } from 'react';
import { combineClasses } from '../../utils';

export default function ExpandContainer({
  children,
  title,
  titleClass,
  className,
  useGradient = false,
  buttonExpandMode,
  sectionExpandMode,
  allowExpand = true,
  extraHeight = 10,
  buttonClass,
  style,
}) {
  const [isExpanded, setIsExpanded] = useState(!allowExpand);
  const [maxHeight, setMaxHeight] = useState(0);
  const childrenRef = useRef(null);
  const titleRef = useRef(null);

  const {
    c: expandClasses,
    setInitial,
    addClass,
  } = useClasses(styles['expand-section-wrapper'], className);

  function expandHandler() {
    setIsExpanded(prev => !prev);
  }

  useEffect(() => {
    const totalHeight =
      childrenRef.current?.clientHeight + titleRef.current?.clientHeight + extraHeight + 'px';
    setMaxHeight(totalHeight);
  }, [children.props.className, extraHeight]);

  useEffect(() => {
    isExpanded ? addClass(styles['expanded']) : setInitial();
  }, [addClass, isExpanded, setInitial]);

  return (
    <>
      <div
        className={expandClasses}
        style={{
          '--max-expand-section-height': maxHeight,
          '--section-gradient': !useGradient && 0,
          ...style,
        }}
        onClick={allowExpand && sectionExpandMode ? expandHandler : null}
      >
        {title && (
          <h4 ref={titleRef} className={titleClass || styles['section-title']}>
            {title}
          </h4>
        )}

        <div ref={childrenRef} className={styles['section-gradient']}>
          {children}
        </div>
      </div>
      {allowExpand && buttonExpandMode && (
        <button
          className={combineClasses(styles['expand-button'], buttonClass)}
          onClick={buttonExpandMode ? expandHandler : null}
        >
          {isExpanded ? '-- Show Less --' : '-- Show More --'}
        </button>
      )}
    </>
  );
}
