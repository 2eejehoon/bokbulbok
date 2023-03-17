import { ReactElement, useEffect } from "react";
import { useRouter } from "next/router";
import { useGeolocation } from "@/hooks/useGeolocation";
import BaseLayout from "@/layout/BaseLayout/BaseLayout";

export default function Home() {
  const location = useGeolocation();
  const router = useRouter();

  useEffect(() => {
    if (!location.loaded) return;

    if (location.error) return;

    if (location.lng && location.lat) {
      router.push(`/place/location?lng=${location.lng}&lat=${location.lat}`);
    }
  }, [location]);

  return <></>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
