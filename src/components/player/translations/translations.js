import { ExpandContainer } from '../../expand';
import styles from './translations.module.css';
import Translation from './translation';

export default function Translations({
  sources,
  onClick,
  selected,
  maxShown = 6,
}) {
  if (!sources || !sources.length) return null;

  return (
    <>
      <ExpandContainer
        title='Select audio'
        buttonExpandMode
        titleClass={styles['section-title']}
        className={styles['section-background']}
        buttonClass={styles['expand-button-background']}
        allowExpand={sources.length > maxShown}
      >
        <div
          className={styles['translation-wrapper']}
          style={{
            '--translation-flex-basis': sources.length < 3 && '40%',
            '--translation-max-width': sources.length < maxShown && '1000px',
          }}
        >
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
        </div>
      </ExpandContainer>
    </>
  );
}
