import { useEffect, useState } from "react";
import { LocationType } from "@/types/location";

export function useGeolocation(): LocationType | null {
  const [location, setLocation] = useState<LocationType | null>(null);

  useEffect(() => {
    const onSuccess = (location: { coords: { longitude: number; latitude: number } }) => {
      setLocation({
        lng: location.coords.longitude,
        lat: location.coords.latitude,
      });
    };

    const onError = (error: { code: number; message: string }) => {
      setLocation({
        error: true,
        errorMessage: error.message,
      });
    };

    const options = {
      enableHighAccuracy: true,
      maximumAge: 60000,
    };

    const { geolocation } = navigator;

    if (!geolocation) return;

    geolocation.getCurrentPosition(onSuccess, onError, options);
  }, []);

  return location;
}
