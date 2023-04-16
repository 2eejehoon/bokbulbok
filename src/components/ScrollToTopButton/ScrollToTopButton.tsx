import { useMemo } from "react";
import Button from "../common/Button/Button";
import useScrollToTop from "@/hooks/useScrollToTop";

export default function ScrollToTopButton() {
  const [isScrolled, handleButtonClick] = useScrollToTop();

  const ScrollButton = useMemo(() => {
    if (!isScrolled) return null;

    return (
      <Button
        type={"button"}
        onClick={handleButtonClick}
        color={"black"}
        size={"scrollTop"}
      >
        &uarr;
      </Button>
    );
  }, [isScrolled]);

  return <>{ScrollButton}</>;
}
