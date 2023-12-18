import styled from "styled-components";
import Button from "../Button/Button";
import useGoback from "@/components/common/GobackButton/useGoback";

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
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 20px;
`;
