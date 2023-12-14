import Swiper from "../Swiper/Swiper";
import BlurImage from "../BlurImage/BlurImage";
import usePlaceImageCarousel from "@/hooks/usePlaceImageCarousel";

type ImageCarouselProps = {
  images?: string[];
};

function ImageCarousel({ images = [] }: ImageCarouselProps) {
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

  // return (

  //   <Wrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
  //     <Swiper
  //       spaceBetween={10}
  //       slidesPerView={1}
  //       modules={[Navigation, Pagination]}
  //       pagination={{
  //         clickable: true,
  //         renderBullet: function (index, className) {
  //           return ReactDOMServer.renderToStaticMarkup(
  //             <PaginationButton className={className}>{index}</PaginationButton>
  //           );
  //         },
  //       }}
  //       navigation={{
  //         prevEl: ".swiper-button-prev",
  //         nextEl: ".swiper-button-next",
  //       }}
  //     >
  //       {images.map((image, index) => {
  //         return (
  //           <SwiperSlide key={index}>
  //             <BlurImage src={image} alt="사진" />
  //           </SwiperSlide>
  //         );
  //       })}
  //       {showButtons && (
  //         <>
  //           <SwiperPrevButton />
  //           <SwiperNextButton />
  //         </>
  //       )}
  //     </Swiper>
  //   </Wrapper>
  // );
}

export default ImageCarousel;
