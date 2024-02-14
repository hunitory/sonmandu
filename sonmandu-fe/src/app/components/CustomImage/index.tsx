import React from 'react';
import Image, { ImageProps } from 'next/image';

function CustomImage(props: ImageProps) {
  const imageLoader = ({ src, width }: { src: string; width: number }) => {
    return `${src}?w=${width}`;
  };
  return <Image loader={imageLoader} {...props}></Image>;
}

export default CustomImage;
