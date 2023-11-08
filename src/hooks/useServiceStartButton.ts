import { useRouter } from "next/router";
import { useGeolocation } from "./useGeolocation";

interface useServiceStartButtonReturnType {
  loaded: boolean;
  error?: boolean;
  errorMessage?: string;
  handleButtonClick: () => void;
}

export default function useServiceStartButton(): useServiceStartButtonReturnType {
  const router = useRouter();
  const { loaded, lng, lat, error, errorMessage } = useGeolocation();

  const handleButtonClick = () => {
    router.push(
      `/place/location?lng=${lng}&lat=${lat}&range=${5000}&sort=${"D"}`
    );
  };

  return { loaded, error, errorMessage, handleButtonClick };
}
