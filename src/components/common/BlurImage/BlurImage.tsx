import Image from "next/image";

interface BlurImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function BlurImage({ src, alt, width, height }: BlurImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
    />
  );
}
