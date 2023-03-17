import { ReactElement, useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { useGeolocation } from "@/hooks/useGeolocation";
import BaseLayout from "@/layout/BaseLayout/BaseLayout";
import { radiusState } from "@/recoil/range";
import { arrangeState } from "@/recoil/sort";

export default function Home() {
  const router = useRouter();
  const location = useGeolocation();
  const radius = useRecoilValue(radiusState);
  const arrange = useRecoilValue(arrangeState);

  useEffect(() => {
    if (!location.loaded) return;

    if (location.error) return;

    if (location.lng && location.lat && radius && arrange) {
      router.push(
        `/place/location?lng=${location.lng}&lat=${location.lat}&range=${radius}&sort=${arrange}`
      );
    }
  }, [location]);

  return <></>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
