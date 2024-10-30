import './carousel.css';

import Carousel from './carousel';
import { historyContent } from '../../store';
import { useSelector } from 'react-redux';
import { PlayableCard } from '../playable-card';
import { OrderedMap } from '../../utils/orderedMap';
import { useMemo } from 'react';

const HistoryCollection = () => {
  const history = useSelector(historyContent);
  const cards = useMemo(() => new OrderedMap(history).getOrdered().slice(0, 20), [history]);
  return (
    <Carousel title='Continue Watching' navigateTo='/history'>
      {cards.map((card, i) => (
        <PlayableCard key={i} showProgress title={card.title} date={card.date} {...card} />
      ))}
    </Carousel>
  );
};

export default HistoryCollection;
