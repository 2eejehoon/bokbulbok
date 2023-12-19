import styled from "styled-components";
import Button from "../../common/Button/Button";
import useServiceStartButton from "@/components/Home/ServiceStartButton/useServiceStartButton";

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