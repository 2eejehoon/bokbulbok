import { MouseEvent, useCallback, useState } from "react";
import classNames from "classnames/bind";
import Button from "../common/Button/Button";
import BlurImage from "../common/BlurImage/BlurImage";
import style from "./Carousel.module.scss";
import { convertImageIndex } from "@/utils/convert";

interface CarouselProps {
  images: string[];
}

const cx = classNames.bind(style);

function Carousel({ images }: CarouselProps) {
  const [imageIndex, setImageIndex] = useState("1");

  const handleButtonClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setImageIndex(e.currentTarget.innerHTML);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.carousel}>
        {images.map((image) => {
          return (
            <div key={image} className={cx("image", convertImageIndex(imageIndex))}>
              <BlurImage src={image} alt={"음식점"} />
            </div>
          );
        })}
      </div>
      <div className={style.buttonContainer}>
        {images.map((_, index) => {
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
