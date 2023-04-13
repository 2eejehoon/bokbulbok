import { useEffect } from "react";
import { useRouter } from "next/router";
import { useGeolocation } from "@/hooks/useGeolocation";
import Loading from "@/components/common/Loading/Loading";
import Seo from "@/components/common/Seo/Seo";

export default function Home() {
  const router = useRouter();
  const location = useGeolocation();

  useEffect(() => {
    if (location === null) return;

    router.push(
      `/place/location?lng=${location.lng}&lat=${location.lat}&range=${5000}&sort=${"B"}`
    );
  }, [location]);

  return (
    <>
      <Seo title={"복불복"} description={"현재 위치 음식점 정보"} url={router.asPath} />
      <Loading />
    </>
  );
}
