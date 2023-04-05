import { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Button from "../common/Button/Button";

export default function GoBackButton() {
  const router = useRouter();
  const prevPathRef = useRef<string | null>(null);

  const handleGoBackClick = useCallback(() => {
    router.push(prevPathRef.current as string);
  }, []);

  useEffect(() => {
    const storage = window.sessionStorage;
    if (!storage) return;

    const prevPath = storage.getItem("prevPath");
    prevPathRef.current = prevPath;
  }, []);

  return (
    <Button type={"button"} onClick={handleGoBackClick} color={"grey"} size={"small"}>
      뒤로가기
    </Button>
  );
}
