import styled from "styled-components";
import Button from "../Button/Button";
import useScrollToTop from "@/hooks/useScrollToTop";

export default function ScrollToTopButton() {
  const [isScrolled, handleButtonClick] = useScrollToTop();

  return (
    <ScrollButton
      type={"button"}
      onClick={handleButtonClick}
      isscrolled={isScrolled ? "true" : "false"}
    >
      &uarr;
    </ScrollButton>
  );
}

const ScrollButton = styled(Button)<{ isscrolled: string }>`
  position: fixed;
  bottom: ${({ isscrolled }) => (isscrolled === "true" ? `10px` : "-40px")};
  width: 40px;
  height: 40px;
  font-size: 16px;
  font-weight: 700;
  color: white;
  background-color: black;
  border-radius: 50%;
  transition: bottom 0.3s;
  transition-timing-function: ease;
`;
