import BlurImage from "../../common/BlurImage/BlurImage";
import Swiper from "@/components/common/Swiper/Swiper";
import usePlaceImageCarousel from "@/components/Detail/PlaceImageCarousel/usePlaceImageCarousel";

type ImageCarouselProps = {
  images?: string[];
};

function PlaceImageCarousel({ images = [] }: ImageCarouselProps) {
  const { showButtons, onMouseEnter, onMouseLeave } = usePlaceImageCarousel();

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Swiper.Wrapper>
        {images.map((image) => {
          return (
            <Swiper.Slide key={image} width={390} height={260}>
              <BlurImage src={image} alt="사진" fill sizes="100%" />
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
    </div>
  );
}

export default PlaceImageCarousel;
