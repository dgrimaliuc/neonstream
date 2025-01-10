import { getBackdrop } from '../../utils';
import { Image } from '../lazy-image';
import { UnavailableVideoContent } from '../unavailable-video-content';
import unavailableStyles from './unavailable.module.css';

export default function VODPlayerUnavailable({ img }) {
  return (
    <>
      <div className={unavailableStyles['unavailable-stream-wrapper']}>
        <UnavailableVideoContent />
        {img && (
          <Image
            placeholderWidth={16}
            placeholderHeight={9}
            src={getBackdrop(img, 2)}
            className={unavailableStyles['unavailable-image']}
            showPlaceholderOnLoading
            shape='0'
          />
        )}
      </div>
    </>
  );
}
