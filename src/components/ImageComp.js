import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component'

function ImageComp({src}) {
  return (
    <LazyLoadImage
        src={src}
        alt='img'
        // effect='blur'
        height="auto"
        width="100%"
    />
  )
}

export default ImageComp