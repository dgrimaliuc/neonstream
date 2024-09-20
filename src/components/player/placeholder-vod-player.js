import styles from './player.module.css';
import Player from './player';

import TranslationsPlaceholder from './translations/placeholders/placeholder-translations';

export default function VODPlayerPlaceholder() {
  return (
    <>
      <div className={styles['player-wrapper']}>
        <div className={styles['player-header']}>
          <TranslationsPlaceholder />
        </div>
        <div data-t='placeholder' className={styles['player-container']}>
          {<Player />}
        </div>
      </div>
    </>
  );
}
