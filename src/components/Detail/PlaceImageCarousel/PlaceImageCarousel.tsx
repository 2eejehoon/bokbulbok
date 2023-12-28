import BlurImage from "../../common/BlurImage/BlurImage";
import usePlaceImageCarousel from "./usePlaceImageCarousel";
import Swiper from "@/components/common/Swiper/Swiper";

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
            <Swiper.Slide key={image}>
              <BlurImage src={image} alt="사진" width={390} height={260} />
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
