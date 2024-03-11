import { useRef, useEffect } from "react";

export default function useMap(lat: number, lng: number): void {
  const mapRef = useRef<HTMLElement | null | any>(null);

  useEffect(() => {
    const location = new naver.maps.LatLng(lat, lng);

    const map = new naver.maps.Map("map", {
      center: location,
    });

    mapRef.current = new naver.maps.Marker({
      map,
      position: location,
    });
  }, [lat, lng]);
}
