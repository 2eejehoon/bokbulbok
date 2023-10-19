import styled from "styled-components";
import Button from "@/components/common/Button/Button";
import Modal from "@/components/common/Modal/Modal";
import Slider from "@/components/common/Slider/Slider";
import useRangeSliderModal from "@/hooks/useRangeSliderModal";

export default function RangeSliderModal() {
  const [
    range,
    isModalOpen,
    handleModalOpen,
    handleModalClose,
    handleRangeChange,
    handleConfirm,
  ] = useRangeSliderModal();

  return (
    <>
      <ModalButton type={"button"} onClick={handleModalOpen}>
        {`${range} km`}
      </ModalButton>
      <Modal
        width={360}
        height={150}
        modalOpen={isModalOpen}
        setModalClose={handleModalClose}
      >
        <Container>
          <SliderContainer>
            <Slider
              value={range}
              onChange={handleRangeChange}
              id={"거리"}
              text={`${range} km`}
              min={"5"}
              max={"50"}
              step={"5"}
            />
          </SliderContainer>
          <ButtonContainer>
            <SliderButton type={"button"} onClick={handleModalClose}>
              취소
            </SliderButton>
            <SliderButton type={"button"} onClick={handleConfirm}>
              확인
            </SliderButton>
          </ButtonContainer>
        </Container>
      </Modal>
    </>
  );
}

const ModalButton = styled(Button)`
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
