import { useState } from "react";

type usePlaceImageCarouselReturnType = {
  showButtons: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const usePlaceImageCarousel = (): usePlaceImageCarouselReturnType => {
  const [showButtons, setShowButtons] = useState(false);

  const onMouseEnter = () => {
    setShowButtons(true);
  };

  const onMouseLeave = () => {
    setShowButtons(false);
  };

  return {
    showButtons,
    onMouseEnter,
    onMouseLeave,
  };
};

export default usePlaceImageCarousel;
