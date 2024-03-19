import styled from "styled-components";
import Button from "../Common/Button";
import useAreaServiceStartButton from "@/hooks/useAreaServiceStartButton";

const AreaServiceButton = () => {
  const onAreaButtonClick = useAreaServiceStartButton();

  return <AreaButton onClick={onAreaButtonClick}>지역별 음식점</AreaButton>;
};

const AreaButton = styled(Button)`
  font-size: 12px;
  color: white;
  border: none;
  background-color: black;
  border-radius: 20px;
`;

export default AreaServiceButton;
