import { useGeolocation } from "@/hooks/useGeolocation";
import Button from "@/components/common/Button/Button";
import useCustomRouter from "@/hooks/useCustomRouter";

export default function Home() {
  const location = useGeolocation();
  const customRouterPush = useCustomRouter();

  const handleClick = () => {
    customRouterPush("location", location);
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
