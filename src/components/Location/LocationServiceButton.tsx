import styled from "styled-components";
import Button from "../Common/Button";
import Loading from "../Common/Loading";
import useServiceStartButton from "@/hooks/useLocationServiceStartButton";

const LocationServiceButton = () => {
  const { locationData, onLocationButtonClick } = useServiceStartButton();

  if (locationData.status === "error") {
    return null;
  }

  return (
    <LocationButton disabled={locationData.status !== "success"} onClick={onLocationButtonClick}>
      {locationData.status === "loading" ? <Loading height={15} /> : "내 주변 음식점"}
    </LocationButton>
  );
};

const LocationButton = styled(Button)`
  font-size: 12px;
  color: white;
  border: none;
  background-color: black;
  border-radius: 20px;
  width: 90px;
`;

export default LocationServiceButton;
