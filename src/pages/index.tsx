import { ReactElement } from "react";
import { useRouter } from "next/router";
import BaseLayout from "@/layout/BaseLayout/BaseLayout";
import { useGeolocation } from "@/hooks/useGeolocation";
import Button from "@/components/common/Button/Button";

export default function Home() {
  const router = useRouter();
  const location = useGeolocation();

  const handleClick = () => {
    if (location.error) return alert(location.errorMessage);

    if (location.lng && location.lat) {
      router.push(
        `/place/location?lng=${location.lng}&lat=${location.lat}&range=${5000}&sort=${"A"}`
      );
    }
  };

  return (
    <>
      {location.loaded && (
        <Button type="button" color="black" size="medium" onClick={handleClick}>
          내 주변 음식점 정보 확인하기
        </Button>
      )}
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
