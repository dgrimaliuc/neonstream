import styles from './tooltip.module.css';

export default function Tooltip({ children, text, backgroundColor }) {
  return (
    <div className={styles.tooltip}>
      {children}
      <span
        className={styles['tooltip-text']}
        style={{ backgroundColor: backgroundColor || 'black' }}
      >
        {text}
      </span>
    </div>
  );
}
