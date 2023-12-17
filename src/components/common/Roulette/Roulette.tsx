import styled from "styled-components";
import Button from "../Button/Button";
import RouletteItem from "../RouletteItem/RouletteItem";
import useRoulette from "@/hooks/useRoulette";
import { Length } from "@/utils/convert";

export default function Roulette() {
  const { rouletteItems, start, stop, spin, handleSpinClick } = useRoulette();

  if (rouletteItems.length === 0) return <p>음식점을 추가해보세요 &#128555;</p>;
  return (
    <>
      <Arrow />
      <Wheel start={start} stop={stop}>
        {rouletteItems.map((item) => {
          return (
            <RouletteItem
              key={item.contentId}
              contentId={item.contentId}
              title={item.title}
              length={rouletteItems.length as Length}
            />
          );
        })}
      </Wheel>
      {!spin && (
        <ButtonContainer>
          <SpinButton type={"button"} onClick={handleSpinClick}>
            돌려 돌려 돌림판
          </SpinButton>
        </ButtonContainer>
      )}
    </>
  );
}

const Arrow = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 30px solid black;
  left: 50%;
  top: 85px;
  z-index: 1;
`;

const Wheel = styled.ul<{ start: boolean; stop: boolean }>`
  width: 330px;
  height: 330px;
  position: relative;
  border: 2px solid black;
  border-radius: 50%;
  list-style: none;
  overflow: hidden;

  animation: ${({ start }) => (start ? "spin 1.5s linear infinite" : "")};
  animation-play-state: ${({ stop }) => (stop ? "paused" : "")};

  @keyframes spin {
    100% {
      transform: rotate(1080deg);
    }
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 25px;
`;

const SpinButton = styled(Button)`
  font-size: 16px;
  color: white;
  background-color: black;
  border-radius: 20px;
`;
