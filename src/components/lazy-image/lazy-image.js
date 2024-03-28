import { useState } from 'react';
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

  const placeholder = (
    <ImagePlaceholder
      width={placeholderWidth}
      height={placeholderHeight}
      shape='image'
      className={className}
    />
  );

  return (
    <>
      {error || !src ? (
        placeholder
      ) : (
        <LazyLoadImage
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
