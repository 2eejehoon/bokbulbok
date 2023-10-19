import { useMemo } from "react";
import Button from "../common/Button/Button";
import useScrollToTop from "@/hooks/useScrollToTop";
import styled from "styled-components";

export default function ScrollToTopButton() {
  const [isScrolled, handleButtonClick] = useScrollToTop();

  const ButtonRenderer = useMemo(() => {
    if (!isScrolled) return null;

    return (
      <ScrollButton type={"button"} onClick={handleButtonClick}>
        &uarr;
      </ScrollButton>
    );
  }, [isScrolled]);

  return <>{ButtonRenderer}</>;
}

const ScrollButton = styled(Button)`
  position: fixed;
  bottom: 10px;
  width: 40px;
  height: 40px;
  font-size: 16px;
  font-weight: 700;
  color: white;
  background-color: black;
  border-radius: 50%;
`;
