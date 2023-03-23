import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { locationState } from "@/recoil/location";
import { LocationType } from "@/types/location";

export function useGeolocation(): LocationType {
  const [location, setLocation] = useRecoilState(locationState);

  const onSuccess = (location: { coords: { longitude: number; latitude: number } }) => {
    setLocation({
      loaded: true,
      lng: location.coords.longitude,
      lat: location.coords.latitude,
    });
  };

  const onError = (error: { code: number; message: string }) => {
    setLocation({
      loaded: true,
      error: true,
      errorMessage: error.message,
    });
  };

  useEffect(() => {
    const { geolocation } = navigator;

    if (!geolocation) return;

    geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
}
