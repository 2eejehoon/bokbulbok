import styled from "styled-components";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";
import useServiceStartButton from "@/hooks/useServiceStartButton";

export default function ServiceStartButton() {
  const { loaded, error, errorMessage, handleButtonClick } =
    useServiceStartButton();

  if (error) <ErrorMessage>{errorMessage}</ErrorMessage>;
  return (
    <Container>
      {loaded ? (
        <StartButton type={"button"} onClick={handleButtonClick}>
          시작하기
        </StartButton>
      ) : (
        <Loading />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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
`;
