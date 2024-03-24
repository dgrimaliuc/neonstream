import { useLoaderData } from 'react-router-dom';
import { CLIP, TEASER, TRAILER, filterByTypes } from '../../../api';
import MediaCard from './media-card';
import { useDispatchAction } from '../../../hooks/useDispatchAction';
import { trailerActions } from '../../../store';
import { VideoCard } from '../hero-actions/trailer';

export default function VideosCollection() {
  const data = useLoaderData();
  const dispatch = useDispatchAction(trailerActions);

  return filterByTypes(data.videos, TRAILER, TEASER, CLIP).map((video, i) => (
    <MediaCard key={i}>
      <VideoCard video={video} onClick={dispatch.selectTrailer(video)} />
    </MediaCard>
  ));
}
