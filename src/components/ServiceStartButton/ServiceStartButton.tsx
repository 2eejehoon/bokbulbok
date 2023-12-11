import styled from "styled-components";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";
import useServiceStartButton from "@/hooks/useServiceStartButton";

export default function ServiceStartButton() {
  const { locationData, handleButtonClick } = useServiceStartButton();

  if (locationData.status === "error") {
    <ErrorMessage>{locationData.error.message}</ErrorMessage>;
  }

  return (
    <StartButton
      type={"button"}
      disabled={locationData.status !== "success"}
      onClick={handleButtonClick}
    >
      {locationData.status === "success" ? "시작하기" : <Loading height={20} />}
    </StartButton>
  );
}

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
