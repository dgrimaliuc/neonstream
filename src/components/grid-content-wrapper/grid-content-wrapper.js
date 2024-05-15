import styles from './grid-content.module.css';
import BrowseCard from '../browse-card/browse-card';

import { Spinner } from '../spinner';

export default function GridContentWrapper({ content, showSpinner = true }) {
  return (
    <>
      <div className={styles['content-wrapper']}>
        {content.map((card, i) => (
          <BrowseCard
            key={i}
            title={card.title || card.name}
            poster={card.poster_path}
            date={card.release_date || card.first_air_date}
            {...card}
          />
        ))}
        <Spinner display={showSpinner} />
      </div>
    </>
  );
}
