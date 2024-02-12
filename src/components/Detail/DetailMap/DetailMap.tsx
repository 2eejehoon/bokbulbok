import styled from "styled-components";
import useMap from "./useMap";

interface MapProps {
  lng: number;
  lat: number;
}

export default function DetailMap({ lng, lat }: MapProps) {
  useMap(lat, lng);

  return (
    <Container>
      <MapDiv id={"map"} />
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  width: 100%;
  height: 300px;
`;

const MapDiv = styled.div`
  border: 1px solid lightgrey;
  border-radius: 15px;
  width: 100%;
  height: 280px;
`;
