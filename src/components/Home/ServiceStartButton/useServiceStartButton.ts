import { useRouter } from "next/router";
import { useGeolocation } from "../../../hooks/useGeolocation";
import { isSuccessLocationData } from "@/utils/location";

export default function useServiceStartButton() {
  const router = useRouter();
  const locationData = useGeolocation();

  const onLocationButtonClick = () => {
    if (isSuccessLocationData(locationData)) {
      router.push({
        pathname: "/location/location",
        query: {
          lng: locationData.coords.longitude,
          lat: locationData.coords.latitude,
          range: 5000,
          sort: "D",
        },
      });
    }
  };

  const onAreaButtonClick = () => {
    router.push({
      pathname: "/area/area",
      query: {
        areaCode: 1,
        sort: "D",
      },
    });
  };

  return { locationData, onLocationButtonClick, onAreaButtonClick };
}
