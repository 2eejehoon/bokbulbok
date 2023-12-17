import { useRouter } from "next/router";
import { useGeolocation } from "./useGeolocation";
import { isSuccessLocationData } from "@/utils/location";

export default function useServiceStartButton() {
  const router = useRouter();
  const locationData = useGeolocation();

  const handleButtonClick = () => {
    if (isSuccessLocationData(locationData)) {
      router.push(
        `location/location?lng=${locationData.coords.longitude}&lat=${
          locationData.coords.latitude
        }&range=${5000}&sort=${"D"}`
      );
    }
  };

  return { locationData, handleButtonClick };
}
