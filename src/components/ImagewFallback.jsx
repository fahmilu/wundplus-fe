"use client";
import Image from "next/image";
import { useState } from "react";
const fallbackImageSrc = '/imgs/placeholder.jpg';

const ImageWithFallback = (props) => {
    const { src, fallbackSrc = fallbackImageSrc, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(src);

    return (
      <Image
        {...rest}
        src={imgSrc}
        onError={() => {
          setImgSrc(fallbackSrc);
        }}
      />
    );
  };

export default ImageWithFallback;