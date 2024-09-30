import { ExpandContainer } from '../../expand';
import styles from './translations.module.css';
import Translation from './translation';

export default function Translations({ translations, onClick, selected, maxShown = 6 }) {
  return (
    <>
      <ExpandContainer
        title='Select audio'
        buttonExpandMode
        titleClass={styles['section-title']}
        className={styles['section-background']}
        buttonClass={styles['expand-button-background']}
        allowExpand={translations?.length > maxShown}
      >
        <div
          className={styles['translation-wrapper']}
          style={{
            '--translation-flex-basis': translations.length < 3 && '40%',
            '--translation-max-width': translations.length < maxShown && '1000px',
          }}
        >
          <div className={styles['translations']}>
            {translations.map((t, i) => (
              <Translation key={i} selected={selected} index={i} label={t.name} onClick={onClick} />
            ))}
          </div>
        </div>
      </ExpandContainer>
    </>
  );
}
