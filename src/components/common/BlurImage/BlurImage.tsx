import Image, { ImageProps } from "next/image";

type BlurImageProps = ImageProps;

const DEFAULT_BASE64 = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==";

export default function BlurImage(props: BlurImageProps) {
  return <Image {...props} placeholder={"blur"} blurDataURL={DEFAULT_BASE64} />;
}
