import styles from '../translations.module.css';
import { ExpandContainer } from '../../expand';
import TranslationPlaceholder from './placeholder-translation';

export default function TranslationsPlaceholder() {
  return (
    <>
      <ExpandContainer
        title='Select audio'
        buttonExpandMode
        titleClass={styles['section-title']}
        className={styles['section-background']}
        buttonClass={styles['expand-button-background']}
        allowExpand={false}
      >
        <div
          className={styles['translation-wrapper']}
          style={{
            '--translation-flex-basis': '30%',
            '--translation-max-width': '1000px',
          }}
        >
          <div className={styles['translations']}>
            {Array.from({ length: 6 }).map((_, i) => (
              <TranslationPlaceholder key={i} />
            ))}
          </div>
        </div>
      </ExpandContainer>
    </>
  );
}
