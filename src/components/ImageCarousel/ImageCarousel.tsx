import * as ReactDOMServer from "react-dom/server";
import { useCallback, useState } from "react";
import {
  Swiper as _Swiper,
  SwiperSlide as _SwiperSlide,
  useSwiper,
} from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import BlurImage from "../BlurImage/BlurImage";
import styled from "styled-components";
import ArrowRight from "../../../public/arrow-right.svg";
import ArrowLeft from "../../../public/arrow-left.svg";

import "swiper/css";
import "swiper/css/pagination";

type ImageCarouselProps = {
  images?: string[];
};

function ImageCarousel({ images = [] }: ImageCarouselProps) {
  const [showButtons, setShowButtons] = useState(false);
  const onMouseEnter = useCallback(() => setShowButtons(true), []);
  const onMouseLeave = useCallback(() => setShowButtons(false), []);

  return (
    <Wrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return ReactDOMServer.renderToStaticMarkup(
              <PaginationButton className={className}>{index}</PaginationButton>
            );
          },
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <BlurImage src={image} alt="사진" />
            </SwiperSlide>
          );
        })}
        {showButtons && (
          <>
            <SwiperPrevButton />
            <SwiperNextButton />
          </>
        )}
      </Swiper>
    </Wrapper>
  );
}

const SwiperPrevButton = () => {
  const swiper = useSwiper();

  return (
    <PrevButton
      className=".swiper-button-prev"
      onClick={() => swiper.slidePrev()}
    >
      <ArrowLeft />
    </PrevButton>
  );
};

const SwiperNextButton = () => {
  const swiper = useSwiper();

  return (
    <NextButton
      className=".swiper-button-next"
      onClick={() => swiper.slideNext()}
    >
      <ArrowRight />
    </NextButton>
  );
};

const Wrapper = styled.section`
  padding: 10px;
`;

const Swiper = styled(_Swiper)`
  width: 100%;
  height: 100%;
`;

const SwiperSlide = styled(_SwiperSlide)`
  width: 100%;
  height: 260px;
  border: 1px solid lightgrey;
  border-radius: 15px;
  overflow: hidden;
`;

const PrevButton = styled.button`
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

const NextButton = styled.button`
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

export default ImageCarousel;
