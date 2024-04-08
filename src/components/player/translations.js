import styles from './player.module.css';
import Translation from './translation';

export default function Translations({ sources, onClick, selected }) {
  if (!sources || !sources.length) return null;

  return (
    <>
      <div className={styles['translations']}>
        {sources.map((s, i) => (
          <Translation
            key={i}
            selected={selected}
            index={i}
            label={s.label || s.name || s}
            onClick={onClick}
          />
        ))}
      </div>
    </>
  );
}
