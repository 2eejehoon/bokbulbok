import { useEffect, useState } from "react";
import { LocationType } from "@/types/location";

export function useGeolocation(): LocationType {
  const [location, setLocation] = useState<LocationType>({
    lat: 37.55376,
    lng: 126.969655,
    loaded: false,
  });

  useEffect(() => {
    const onSuccess = (location: {
      coords: { longitude: number; latitude: number };
    }) => {
      setLocation({
        loaded: true,
        lng: location.coords.longitude,
        lat: location.coords.latitude,
      });
    };

    const onError = (error: { code: number; message: string }) => {
      setLocation({
        ...location,
        loaded: true,
        error: true,
        errorMessage: error.message,
      });
    };

    const options = {
      enableHighAccuracy: true,
      maximumAge: 5000,
    };

    const { geolocation } = navigator;

    if (!geolocation) return;

    geolocation.getCurrentPosition(onSuccess, onError, options);
  }, []);

  return location;
}
