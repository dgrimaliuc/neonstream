import { useMemo, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ImagePlaceholder } from '../image-placeholder';

export default function Image({
  src,
  className,
  placeholderWidth,
  placeholderHeight,
  alt = 'Placeholder',
}) {
  const [error, setError] = useState(false);
  const handleError = () => setError(true);

  const placeholder = useMemo(
    () => (
      <ImagePlaceholder
        width={placeholderWidth}
        height={placeholderHeight}
        shape='image'
        className={className}
      />
    ),
    [className, placeholderHeight, placeholderWidth],
  );

  return (
    <>
      {error || !src ? (
        placeholder
      ) : (
        <LazyLoadImage
          style={{ userSelect: 'none' }}
          src={src}
          placeholder={placeholder}
          className={className}
          onError={handleError}
          alt={alt}
        />
      )}
    </>
  );
}
