import styled from "styled-components";
import { renderToStaticMarkup } from "react-dom/server";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useSwiper } from "swiper/react";
import BlurImage from "../common/BlurImage";
import ArrowRight from "../../../../public/arrow-right.svg";
import ArrowLeft from "../../../../public/arrow-left.svg";
import usePlaceImageCarousel from "../../hooks/usePlaceImageCarousel";

type ImageCarouselProps = {
  images?: string[];
};

function PlaceImageCarousel({ images = [] }: ImageCarouselProps) {
  const { showButtons, onMouseEnter, onMouseLeave } = usePlaceImageCarousel();

  return (
    <Wrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Swiper
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index: number, className: string) {
            return renderToStaticMarkup(<PaginationButton className={className}>{index}</PaginationButton>);
          },
        }}
        modules={[Navigation, Pagination]}
      >
        {images.map((image) => {
          return (
            <SwiperSlide key={image}>
              <BlurImage src={image} alt="사진" width={400} height={260} />
            </SwiperSlide>
          );
        })}
        {showButtons && (
          <>
            <PrevButton />
            <NextButton />
          </>
        )}
      </Swiper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const PrevButton = () => {
  const swiper = useSwiper();

  return (
    <_PrevButton className=".swiper-button-prev" onClick={() => swiper.slidePrev()}>
      <ArrowLeft />
    </_PrevButton>
  );
};

const NextButton = () => {
  const swiper = useSwiper();

  return (
    <_NextButton className=".swiper-button-next" onClick={() => swiper.slideNext()}>
      <ArrowRight />
    </_NextButton>
  );
};

const _PrevButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 12.5px);
  left: 5px;
  z-index: 1;
  background-color: white;
`;

const _NextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 12.5px);
  right: 5px;
  z-index: 1;
  background-color: white;
`;

const PaginationButton = styled.button`
  font-size: 10px;
  font-weight: 600;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  text-align: center;
`;

export default PlaceImageCarousel;
