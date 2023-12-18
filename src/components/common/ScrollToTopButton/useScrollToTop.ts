import { useState, useEffect, useCallback } from "react";
import { moveScrollTo } from "@/utils/scroll";

type useScrollToTopReturnType = [
  isScrolled: boolean,
  handleScrollToTop: () => void
];

export default function useScrollToTop(): useScrollToTopReturnType {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScrollToTop = useCallback(() => {
    moveScrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return [isScrolled, handleScrollToTop];
}
