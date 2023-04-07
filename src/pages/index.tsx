import { useEffect } from "react";
import { useGeolocation } from "@/hooks/useGeolocation";
import useCustomRouter from "@/hooks/useCustomRouter";
import Loading from "@/components/common/Loading/Loading";

export default function Home() {
  const location = useGeolocation();
  const customRouterPush = useCustomRouter();

  useEffect(() => {
    if (location === null) return;

    customRouterPush("location", location);
  }, [location]);

  return <Loading />;
}
