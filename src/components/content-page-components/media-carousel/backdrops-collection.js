import classes from './media-carousel.module.css';
import { useLoaderData } from 'react-router-dom';
import MediaCard from './media-card';
import { getBackdrop } from '../../../utils';

export default function BackdropCollection() {
  const data = useLoaderData();

  return (
    <>
      {data.images.backdrops.map((image, i) => (
        <MediaCard key={i}>
          <picture>
            <img
              className={classes['image-container']}
              src={getBackdrop(image.file_path)}
              alt='Backdrop'
            />
          </picture>
        </MediaCard>
      ))}
    </>
  );
}
