import { forwardRef } from 'react';
import { useDispatchAction } from '../../../hooks/useDispatchAction';
import { trailerActions } from '../../../store';
import { VideoCard } from '../hero-actions/trailer';
import MediaCard from './media-card';

const MediaVideoCard = forwardRef(({ video }, ref) => {
  const dispatch = useDispatchAction(trailerActions);

  return (
    <MediaCard ref={ref}>
      <VideoCard video={video} onClick={dispatch.selectTrailer(video)} />
    </MediaCard>
  );
});

export default MediaVideoCard;
