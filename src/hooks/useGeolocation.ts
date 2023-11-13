import { useEffect, useState } from "react";
import { LocationData, getGeolocationData } from "@/utils/location";

export function useGeolocation() {
  const [location, setLocation] = useState<LocationData>({ status: "loading" });

  useEffect(() => {
    (async () => {
      const location = await getGeolocationData();
      setLocation(location);
    })();
  }, []);

  return location;
}
