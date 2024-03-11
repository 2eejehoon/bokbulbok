import styled from "styled-components";
import Button from "../common/Button";
import useServiceStartButton from "@/hooks/useServiceStartButton";

const AreaServiceButton = () => {
  const { onAreaButtonClick } = useServiceStartButton();

  return <AreaButton onClick={onAreaButtonClick}>지역별 음식점</AreaButton>;
};

const AreaButton = styled(Button)`
  font-size: 12px;
  color: white;
  background-color: black;
  border-radius: 20px;
`;

export default AreaServiceButton;
