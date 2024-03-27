import React, { forwardRef } from 'react';
import { usePlaceholder } from '../../hooks/usePlaceholder';

const ImagePlaceholder = forwardRef((props, ref) => {
  const {
    width = 300,
    height = 300,
    style,
    className = 'placeholder-img',
    alt = 'Placeholder',
  } = props;
  const image = usePlaceholder({
    ref,
    width,
    height,
    ...props,
  });

  return (
    <img
      ref={ref}
      data-t='placeholder-img'
      src={image}
      style={{ minWidth: '100%', height: 'auto', ...style }}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading='lazy'
    />
  );
});

export default ImagePlaceholder;
