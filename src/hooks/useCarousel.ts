import { useState, useCallback, MouseEvent } from "react";
import { convertImageIndex } from "@/utils/convert";

type useCarouselReturnType = [
  imageIndex: string,
  handleButtonClick: (e: MouseEvent<HTMLButtonElement>) => void
];

export default function useCarousel(): useCarouselReturnType {
  const [imageIndex, setImageIndex] = useState("one");

  const handleButtonClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const index = convertImageIndex(e.currentTarget.innerHTML);
    setImageIndex(index);
  }, []);

  return [imageIndex, handleButtonClick];
}
