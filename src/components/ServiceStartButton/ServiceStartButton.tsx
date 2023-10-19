import styled from "styled-components";
import Button from "../Button/Button";
import useServiceStartButton from "@/hooks/useServiceStartButton";
import Loading from "../Loading/Loading";

export default function ServiceStartButton() {
  const { loaded, error, errorMessage, handleButtonClick } =
    useServiceStartButton();

  if (error) <ErrorMessage>{errorMessage}</ErrorMessage>;
  return (
    <StartButton type={"button"} disabled={!loaded} onClick={handleButtonClick}>
      {loaded ? "시작하기" : <Loading height={20} />}
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
