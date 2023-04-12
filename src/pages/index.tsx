import { useEffect } from "react";
import { useRouter } from "next/router";
import { useGeolocation } from "@/hooks/useGeolocation";
import useCustomRouter from "@/hooks/useCustomRouter";
import Loading from "@/components/common/Loading/Loading";
import Seo from "@/components/common/Seo/Seo";

export default function Home() {
  const router = useRouter();
  const location = useGeolocation();
  const customRouterPush = useCustomRouter();

  useEffect(() => {
    if (location === null) return;

    customRouterPush("location", location);
  }, [location]);

  return (
    <>
      <Seo title={"복불복"} description={"현재 위치 음식점 정보"} url={router.asPath} />
      <Loading />
    </>
  );
}
