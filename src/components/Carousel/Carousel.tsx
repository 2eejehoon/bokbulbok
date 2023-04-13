import classNames from "classnames/bind";
import Button from "../common/Button/Button";
import BlurImage from "../common/BlurImage/BlurImage";
import style from "./Carousel.module.scss";
import useCarousel from "@/hooks/useCarousel";

interface CarouselProps {
  images?: string[];
}

const cx = classNames.bind(style);

function Carousel({ images }: CarouselProps) {
  const [imageIndex, handleButtonClick] = useCarousel();

  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        {(images ?? ["/noimg.png"]).map((image) => {
          return (
            <div key={image} className={cx("image", imageIndex)}>
              <BlurImage src={image} alt={"음식점"} />
            </div>
          );
        })}
      </div>
      <div className={style.buttonContainer}>
        {(images ?? []).map((_, index) => {
          return (
            <Button
              key={index}
              type={"button"}
              onClick={handleButtonClick}
              size={"carousel"}
              color={"grey"}
            >
              {index + 1}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
