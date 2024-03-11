import { useState, useCallback, MouseEvent } from "react";

type useCarouselReturnType = {
  imageIndex: number;
  handleButtonClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export default function useCarousel(): useCarouselReturnType {
  const [imageIndex, setImageIndex] = useState(0);

  const handleButtonClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setImageIndex(Number(e.currentTarget.innerHTML) - 1);
  }, []);

  return { imageIndex, handleButtonClick };
}
