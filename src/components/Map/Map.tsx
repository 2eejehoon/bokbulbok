import style from "./Map.module.scss";
import useMap from "@/hooks/useMap";

interface MapProps {
  lng: number;
  lat: number;
}

function Map({ lng, lat }: MapProps) {
  useMap(lat, lng);

  return (
    <div className={style.container}>
      <div id={"map"} className={style.map} />
    </div>
  );
}

export default Map;
