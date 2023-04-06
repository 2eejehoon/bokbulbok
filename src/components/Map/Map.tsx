import { useRef, useEffect } from "react";
import style from "./Map.module.scss";

interface MapProps {
  lat: string;
  lng: string;
}

function Map({ lat, lng }: MapProps) {
  const mapRef = useRef<HTMLElement | null | any>(null);

  const location = new naver.maps.LatLng(Number(lat), Number(lng));

  useEffect(() => {
    const map = new naver.maps.Map("map", {
      center: location,
    });

    mapRef.current = new naver.maps.Marker({
      map,
      position: location,
    });
  }, [lat, lng]);

  return (
    <div className={style.container}>
      <div id={"map"} className={style.map} />
    </div>
  );
}

export default Map;
