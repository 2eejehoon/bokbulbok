import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import Button from "../common/Button/Button";
import usePreviousPath from "@/hooks/usePreviousPath";

export default function GobackButton() {
  const router = useRouter();
  const prevPath = usePreviousPath();

  const handleGoBackClick = useCallback(() => {
    router.back();
  }, []);

  useEffect(() => {
    if (prevPath) router.prefetch(prevPath);
  }, []);

  return (
    <Button type={"button"} onClick={handleGoBackClick} color={"grey"} size={"small"}>
      뒤로가기
    </Button>
  );
}
