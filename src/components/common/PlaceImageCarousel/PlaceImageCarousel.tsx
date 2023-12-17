import Swiper from "../Swiper/Swiper";
import BlurImage from "../BlurImage/BlurImage";
import usePlaceImageCarousel from "@/hooks/usePlaceImageCarousel";

type ImageCarouselProps = {
  images?: string[];
};

function PlaceImageCarousel({ images = [] }: ImageCarouselProps) {
  const { showButtons, onMouseEnter, onMouseLeave } = usePlaceImageCarousel();

  return (
    <Swiper.Wrapper
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      pagination
      navigation
    >
      {images.map((image, index) => {
        return (
          <Swiper.Slide key={index} width={"100%"} height={260}>
            <BlurImage src={image} alt="사진" />
          </Swiper.Slide>
        );
      })}
      {showButtons && (
        <>
          <Swiper.PrevButton />
          <Swiper.NextButton />
        </>
      )}
    </Swiper.Wrapper>
  );
}

export default PlaceImageCarousel;
