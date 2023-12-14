import styled from "styled-components";
import Button from "@/components/Button/Button";
import Slider from "@/components/Slider/Slider";
import useRangeSliderModal from "@/hooks/useRangeSliderModal";

export default function RangeSliderModal() {
  const [
    range,
    sliderInputRef,
    isSliderOpen,
    handleButtonClick,
    handleSliderClose,
    handleConfirm,
  ] = useRangeSliderModal();

  return (
    <Wrapper>
      <RangeButton type={"button"} onClick={handleButtonClick}>
        {`${range} km`}
      </RangeButton>
      {isSliderOpen && (
        <>
          <Container>
            <SliderContainer>
              <Slider
                defaultValue={range}
                ref={sliderInputRef}
                min={"5"}
                max={"50"}
                step={"5"}
              />
            </SliderContainer>
            <ButtonContainer>
              <SliderButton type={"button"} onClick={handleSliderClose}>
                취소
              </SliderButton>
              <SliderButton type={"button"} onClick={handleConfirm}>
                확인
              </SliderButton>
            </ButtonContainer>
          </Container>
          <Background onClick={handleSliderClose} />
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const RangeButton = styled(Button)`
  font-size: 12px;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 20px;
  color: black;
`;

const SliderButton = styled(Button)`
  font-size: 12px;
  color: black;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 20px;
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 350px;
  height: 150px;
  align-items: center;
  padding: 10px;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 5px;
  top: 45px;
  z-index: 2;
`;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 50px;
  gap: 5px;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 100vh;
  z-index: 1;
`;
