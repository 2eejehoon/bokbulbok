import Image from "next/image";

interface BlurImageProps {
  src: string;
  alt: string;
}

export default function BlurImage({ src, alt }: BlurImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={"100%"}
      placeholder={"blur"}
      blurDataURL={
        "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
      }
    />
  );
}
