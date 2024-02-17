import styles from './episodes-container.module.css';

import smallWideImg1 from '../../../../assets/One Piece/episodes/one-peace-1-2.jpeg';
import smallWideImg2 from '../../../../assets/One Piece/episodes/one-peace-1-1.jpeg';
import Pagination from '../../../../components/pagination/pagination';
import EpisodeCard from './episode-card';

export default function EpisodesContainer() {
  return (
    <div className={styles['episodes-container']}>
      <EpisodeCard />
      <EpisodeCard />
      <EpisodeCard />

      <div>
        <Pagination />
      </div>
    </div>
  );
}
