import React from 'react';
import Image, { ImageProps } from 'next/image';

function CustomImage(props: ImageProps) {
  const imageLoader = ({ src, width }: { src: string; width: number }) => {
    return `${src}?w=${width}`;
  };
  return (
    <Image
      loader={imageLoader}
      {...props}
      quality={40}
      placeholder="blur"
      blurDataURL="data:/image/no-profile-image-user-4.svg"
    ></Image>
  );
}

export default CustomImage;
