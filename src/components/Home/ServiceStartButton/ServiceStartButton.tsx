import styled from "styled-components";
import Button from "../../common/Button/Button";
import Loading from "../../common/Loading/Loading";
import useServiceStartButton from "@/components/Home/ServiceStartButton/useServiceStartButton";

export default function ServiceStartButton() {
  const { locationData, onLocationButtonClick, onAreaButtonClick } =
    useServiceStartButton();

  if (locationData.status === "error") {
    <ErrorMessage>{locationData.error.message}</ErrorMessage>;
  }

  return (
    <Wrapper>
      <StartButton
        type={"button"}
        disabled={locationData.status !== "success"}
        onClick={onLocationButtonClick}
      >
        {locationData.status === "success" ? (
          "내 주변 음식점"
        ) : (
          <Loading height={20} />
        )}
      </StartButton>
      <StartButton type="button" onClick={onAreaButtonClick}>
        지역별 음식점
      </StartButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ErrorMessage = styled.p`
  text-align: center;
  height: 100px;
`;

const StartButton = styled(Button)`
  font-size: 16px;
  color: white;
  background-color: black;
  border-radius: 20px;
  width: 120px;
`;
