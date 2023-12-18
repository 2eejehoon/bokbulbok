import {
  Swiper as _Swiper,
  SwiperSlide as _SwiperSlide,
  useSwiper,
} from "swiper/react";
import { HTMLAttributes, ReactNode } from "react";
import * as ReactDOMServer from "react-dom/server";
import styled from "styled-components";
import { Navigation, Pagination } from "swiper/modules";
import ArrowRight from "../../../../public/arrow-right.svg";
import ArrowLeft from "../../../../public/arrow-left.svg";

type SwiperProps = {
  children: ReactNode;
  navigation?: boolean;
  pagination?: boolean;
  modules?: typeof Pagination | (typeof Navigation)[];
} & HTMLAttributes<HTMLDivElement>;

const SwiperWrapper = ({
  children,
  navigation,
  pagination,
  ...props
}: SwiperProps) => {
  return (
    <_SwiperWrapper {...props}>
      <_Swiper
        navigation={
          navigation && {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }
        }
        pagination={
          pagination && {
            clickable: true,
            renderBullet: function (index: number, className: string) {
              return ReactDOMServer.renderToStaticMarkup(
                <PaginationButton className={className}>
                  {index}
                </PaginationButton>
              );
            },
          }
        }
        modules={[Navigation, Pagination]}
      >
        {children}
      </_Swiper>
    </_SwiperWrapper>
  );
};

_Swiper.displayName = "SwiperWrapper";
_SwiperSlide.displayName = "SwiperSilde";

const _SwiperWrapper = styled.div`
  padding: 5px;
`;

const PrevButton = () => {
  const swiper = useSwiper();

  return (
    <_PrevButton
      className=".swiper-button-prev"
      onClick={() => swiper.slidePrev()}
    >
      <ArrowLeft />
    </_PrevButton>
  );
};

const NextButton = () => {
  const swiper = useSwiper();

  return (
    <_NextButton
      className=".swiper-button-next"
      onClick={() => swiper.slideNext()}
    >
      <ArrowRight />
    </_NextButton>
  );
};

const SwiperSlide = styled(_SwiperSlide)<{
  width: string | number;
  height: string | number;
}>`
  width: ${({ width }) =>
    typeof width === "string" ? `${width}` : `${width}px`};
  height: ${({ height }) =>
    typeof height === "string" ? `${height}` : `${height}px`};
  border: 1px solid lightgrey;
  border-radius: 20px;
  overflow: hidden;
`;

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

const Swiper = {
  Wrapper: SwiperWrapper,
  Slide: SwiperSlide,
  PrevButton: PrevButton,
  NextButton: NextButton,
};

export default Swiper;
