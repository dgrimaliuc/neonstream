import './carousel.css';

import BrowseCard from '../browse-card/browse-card';
import Carousel from './carousel';
import { watchlistContent } from '../../store';
import { useSelector } from 'react-redux';

const WatchlistCollection = () => {
  const watchlist = useSelector(watchlistContent);

  return (
    <Carousel title='Your Watchlist' navigateTo='/watchlist'>
      {Object.values(watchlist)
        .slice(0, 20)
        .map((card, i) => (
          <BrowseCard key={i} title={card.title} poster={card.poster} date={card.date} {...card} />
        ))}
    </Carousel>
  );
};

export default WatchlistCollection;
