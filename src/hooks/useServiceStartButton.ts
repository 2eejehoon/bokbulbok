import { useRouter } from "next/router";
import { useGeolocation } from "./useGeolocation";
import { isSuccess } from "@/utils/location";

export default function useServiceStartButton() {
  const router = useRouter();
  const locationData = useGeolocation();

  const handleButtonClick = () => {
    if (isSuccess(locationData)) {
      router.push(
        `/place/location?lng=${locationData.coords.longitude}&lat=${
          locationData.coords.latitude
        }&range=${5000}&sort=${"D"}`
      );
    }
  };

  return { locationData, handleButtonClick };
}
