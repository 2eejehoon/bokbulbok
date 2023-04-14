import { useState, useCallback, MouseEvent } from "react";
import { convertImageIndexToText } from "@/utils/convert";

type useCarouselReturnType = [
  imageIndex: string,
  handleButtonClick: (e: MouseEvent<HTMLButtonElement>) => void
];

export default function useCarousel(): useCarouselReturnType {
  const [imageIndex, setImageIndex] = useState("one");

  const handleButtonClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setImageIndex(convertImageIndexToText(e.currentTarget.innerHTML));
  }, []);

  return [imageIndex, handleButtonClick];
}
