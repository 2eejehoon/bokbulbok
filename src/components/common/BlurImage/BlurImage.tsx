import Image from "next/image";

type BlurImageProps = {
  src: string;
  alt: string;
};

const DEFAULT_BASE64 =
  "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==";

export default function BlurImage({ src, alt }: BlurImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={"100%"}
      placeholder={"blur"}
      blurDataURL={DEFAULT_BASE64}
    />
  );
}
