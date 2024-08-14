import { useMemo, useState } from 'react';
import { ImagePlaceholder } from '../image-placeholder';

export default function Image({
  src,
  className,
  placeholderWidth,
  placeholderHeight,
  alt = 'Placeholder',
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (hasError || !src) {
    return placeholder;
  }

  return (
    <>
      {isLoading && <div style={{ width: placeholderWidth, height: placeholderHeight }}></div>}
      <img
        style={{ userSelect: 'none', display: isLoading ? 'none' : 'block' }}
        src={src}
        className={className}
        onError={handleError}
        onLoad={handleLoad}
        alt={alt}
      />
    </>
  );
}
