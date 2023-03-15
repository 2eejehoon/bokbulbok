import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { locationState } from "@/recoil/location";

export default function useGeolocation() {
  const [location, setLocation] = useRecoilState(locationState);

  const onSuccess = (location: { coords: { longitude: number; latitude: number } }) => {
    setLocation({
      coordinates: {
        mapX: location.coords.longitude,
        mapY: location.coords.latitude,
      },
    });
  };

  const onError = (error: { code: number; message: string }) => {
    setLocation({
      error: {
        code: error.code,
        message: error.message,
      },
    });
  };

  useEffect(() => {
    const { geolocation } = navigator;

    if (!geolocation) return;

    geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
}
