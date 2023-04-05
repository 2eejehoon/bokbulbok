import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "../common/Button/Button";

export default function GoBackButton() {
  const [mount, setMount] = useState(false);
  const router = useRouter();

  const prevPath = typeof window && mount && sessionStorage.getItem("prevPath");

  const handleGoBackClick = () => {
    router.push(prevPath as string);
  };

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <Button type={"button"} onClick={handleGoBackClick} color={"grey"} size={"small"}>
      뒤로가기
    </Button>
  );
}
