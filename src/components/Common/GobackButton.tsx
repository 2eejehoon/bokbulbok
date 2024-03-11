import styled from "styled-components";
import Button from "./Button";
import useGoback from "@/hooks/useGoback";

export default function GobackButton() {
  const handleGobackClick = useGoback();

  return (
    <BackButton type={"button"} onClick={handleGobackClick}>
      뒤로가기
    </BackButton>
  );
}

const BackButton = styled(Button)`
  font-size: 12px;
  color: black;
  border: 1px solid lightgrey;
  background-color: white;
  border-radius: 20px;
`;
