import { useMemo } from "react";
import Button from "../common/Button/Button";
import style from "./ScrollToTopButton.module.scss";
import useScrollToTop from "@/hooks/useScrollToTop";

export default function ScrollToTopButton() {
  const [isScrolled, handleButtonClick] = useScrollToTop();

  const ScrollButton = useMemo(() => {
    if (!isScrolled) return null;

    return (
      <Button type={"button"} onClick={handleButtonClick} color={"black"} size={"large"}>
        맨 위로 이동
      </Button>
    );
  }, [isScrolled]);

  return <div className={style.container}>{ScrollButton}</div>;
}
