import Image from "next/image";
import { useState } from "react";

interface BlurImageProps {
  src: string;
  alt: string;
}

function BlurImage({ src, alt }: BlurImageProps) {
  const [imageSrc, setImageSrc] = useState(src);

  const handleError = () => {
    setImageSrc("/noimg.png");
  };

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      sizes={"100%"}
      placeholder={"blur"}
      blurDataURL={
        "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
      }
      onError={handleError}
    />
  );
}

export default BlurImage;
