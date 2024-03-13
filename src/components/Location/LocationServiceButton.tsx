import styled from "styled-components";
import Button from "../Common/Button";
import useServiceStartButton from "@/hooks/useServiceStartButton";

const LocationServiceButton = () => {
  const { onLocationButtonClick } = useServiceStartButton();

  return <LocationButton onClick={onLocationButtonClick}>내 주변 음식점</LocationButton>;
};

const LocationButton = styled(Button)`
  font-size: 12px;
  color: white;
  border: none;
  background-color: black;
  border-radius: 20px;
`;

export default LocationServiceButton;